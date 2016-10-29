var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/part10');

var BookSchema = mongoose.Schema({
	isbn: {
		type: Number,
		unique: true
	},
	name: {
		type: String,
		index: true
	}
});

var Book = mongoose.model('Book',BookSchema);

var book = new Book({
	isbn: '12345',
	name: '围棋死活大全'
});

book.save();

console.log('book',book);