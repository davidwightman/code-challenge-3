/*Code Challenge
We're also asking people to submit a quick code sample for us to review. We're after an ES5 Javascript class for a library which allows people to find book details by ISBN number and search for books by their title. Please add comments/thoughts about any limitations your implementations yours had and why you chose to do things a certain way. This shouldn't take longer than 15 minutes.*/


//constructor
function Library(books) {
	this._books = books 
	//create lookup object by isbn
	this._byIsbn = {};
	for(var i=0; i < books.length; i++){
		this._byIsbn[books[i].isbn] = books[i]
	}
}
//search by isbn method
Library.prototype.searchByIsbn =function(isbn) {
	return this._byIsbn[isbn] || null;
}
// search by tite method
Library.prototype.searchByTitle = function(title) {
	//to lowercase to normalize the query
	title = title.toLowerCase()
	for(var i=0; i < this._books.length; i++){
		//search for portion of title
		if (this._books[i].title.toLowerCase().indexOf(title) !== -1){
			return this._books[i]
		}
	}
	return null
}
//constructing an instance of library
var obj = new Library([
	{
		isbn: 9780596517748,
		author: "Crockford, Douglas",
		title: "JavaScript: The Good Parts"
	}, {
		isbn: 9781617292859,
		author: "Resig, John",
		title: "Secrets of the JavaScript Ninja"
	}]);
//invoking obj's Library method
console.log(obj.searchByIsbn(9780596517748))

console.log(obj.searchByTitle("Secrets of the JavaScript Ninja"))

//problems: 
//1. exact title matches
//2. finds the first title match. does not find all title matches
