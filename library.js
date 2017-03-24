//constructor
function Library(books) {
	var i
	this._books = books
	//create lookup object by isbn
	this._byIsbn = {};
	this._lowerCasedTitle = [];
	for(i = 0; i < books.length; i++){
		this._byIsbn[books[i].isbn] = books[i]
		this._lowerCasedTitle.push(books[i].title.toLowerCase());
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
	var matches = []
	for(var i=0; i < this._books.length; i++){
		//search for portion of title
		if (this._lowerCasedTitle[i].indexOf(title) !== -1){
			matches.push(this._books[i])
		}
	}
	return matches
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
console.log(obj.searchByTitle("secrets"))
console.log(obj.searchByTitle("the"))
