import React, { Component } from 'react';
import Book from "./Book.js";

class BookCategory extends Component {
	   render() {
	 	return ( 
		        <div className="bookshelf">
				<h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
			            <div className="boookshelf-books">
			                <ol className="books-grid">
			                {
				              this.props.bookArray.map((book) => {
					                return <li key={book.id}><Book onCategoryChange={this.props.onCategoryChange} book={book}/></li>
					      })
				        }
			                </ol>
			             </div>
			 </div>
		  )
            }
}

export default BookCategory
