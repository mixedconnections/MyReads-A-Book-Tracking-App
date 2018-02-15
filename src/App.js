import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookCategories from "./components/BookCategories";
import Search from "./components/Search";
import {Route} from 'react-router-dom';

class BooksApp extends React.Component {
	constructor(args) {
	    super(args);
	    this.state = {
	        books: []
            }
    }

  componentDidMount() {
            BooksAPI.getAll().then(books => {
               this.setState({books: books})
        })

   }


  onCategoryChange = (book, shelf) => {
	          BooksAPI.update(book, shelf).then(
                     this.setState((state) => ({
                        books: state.books.map(b => {
                        if (b.title === book.title) {
                             b.shelf = shelf;
                         } 
                        return b
                     })
                        
                     }))
                  )
     };


  render() {
	
	return (
 		<div className="app">

       		  <Route path="/search" exact render={({history}) => (
	                           <Search
	                               history={history}
				       books={this.state.books}
	                               onCategoryChange={this.onCategoryChange}
	                           />
	          )}/>

		    <Route path="/" exact render={() => (
		       <div>
		             <div className="list-books-title">
		                   <h1>MyReads</h1>
		             </div>
			     {
			            <BookCategories
				     	onCategoryChange={this.onCategoryChange}
				        books={this.state.books}
			            />
                             }
		       </div>
	           )}/>


 		</div>
	  )
  }
}

export default BooksApp
