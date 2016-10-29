var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/part10');

var PersonSchema = new mongoose.Schema({
	firstName: String,
	lastName: String
});

PersonSchema.virtual('fullname').get(function(){
	return this.firstName + ' ' + this.lastName;
})

PersonSchema.set('toJSON',{getters:true,virtual:true});

var Person = mongoose.model('Person',PersonSchema);

var person = new Person({
	firstName: 'mo',
	lastName: 'hong'
});

console.log('person`s fullname',person.fullname);
console.log('person',JSON.stringify(person));