var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/part10');

var OrderSchema = new mongoose.Schema({
	count: {
		type: Number,
		required: true,
		max: 1000,
		min:5
	}
});

var Order = mongoose.model('Order',OrderSchema);

var order = new Order();
order.count = 100;


order.save(function(err){
	if (err) {
		return  console.log('save faild',err);
	}
	console.log('save success');
});