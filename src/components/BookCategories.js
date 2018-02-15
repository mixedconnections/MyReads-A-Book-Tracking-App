import React, { Component } from 'react';
import BookCategory from './BookCategory.js';
import {Link} from 'react-router-dom';

class BookCategories extends Component {
 	render() {
                   return <div className="list-books">
			     <div className="list-books-content">
				<div>
				   <BookCategory shelfTitle='Currently Reading' bookArray={this.props.books.filter(book => book.shelf === 'currentlyReading')}
			                            onCategoryChange={this.props.onCategoryChange}/>,
				   <BookCategory shelfTitle='Want to Read' bookArray={this.props.books.filter(book => book.shelf === 'wantToRead')}
			      			    onCategoryChange={this.props.onCategoryChange}/>,
				   <BookCategory shelfTitle='Read' bookArray={this.props.books.filter(book => book.shelf === 'read')}
			                            onCategoryChange={this.props.onCategoryChange}/>
			         </div>
			     </div>  
                	     <div className="open-search">
                                 <Link to="/search">Add a book</Link>
                             </div>
		    </div>
    } 
}

export default BookCategories;
