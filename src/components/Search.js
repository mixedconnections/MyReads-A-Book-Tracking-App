import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';
import Book from './Book';

export default class Search extends Component {
    constructor(args) {
        super(args);
        this.state = {
            searchResults: []
        }
    }

    onSearchQuery = (e) => {
	const query = e.target.value;   
        if (!query) {
            this.setState({searchResults: []});
            return;
        }
        BooksAPI.search(query, 20).then(searchResults => {
            if (!searchResults || searchResults.error) {
                searchResults = [];
            }
            searchResults = searchResults.map((book) => {
                const bookInCategory = this.props.books.find(searchResult => searchResult.id === book.id);
                if (bookInCategory) book.shelf = bookInCategory.shelf;
                return book;
            });
            this.setState({searchResults});
        });
    };

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" onChange={this.onSearchQuery}/>              
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.searchResults && this.state.searchResults.map(book => (
                            <li key={book.id}>
                                <Book book={book} onCategoryChange={this.props.onCategoryChange}/>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        );
    }
}
