var mongoose = require('mongoose');

var reviewSchema = new mongoose.Schema({
  name : {
    type: String,
    required : true
  },
  rating : {
    type : Number,
    min : 0,
    max : 5,
    required : true
  },
  createdOn : {
    type: Date,
    default : Date.now
  }
});

var roomSchema = new mongoose.Schema({
  type : String,
  number : Number,
  description : String,
  photos : [String],
  price : Number
});

var hotelSchema = new mongoose.Schema({
  name : {
    type: String,
    required: true

  },
  stars: {
    type: Number,
    min: 1,
    max: 5,
    "default": 0
  },
  services: [String],
  description: String,
  photos: [String],
  currency: String,
  reviews : [reviewSchema],
  rooms : [roomSchema],
  location : {
    address : String,
    // Always store coordinates logitude (E/W), latitude [N/S] order
    coordinates : {
      type : [Number],
      index : '2dsphere'
    }
  }
});

/*
   compiles the schema into a model
   form Model name, Schema name, collection
   In this form it would also search by default
   for the model name - converted to lowercase
   and pluralized.  Therefore the collection here
   would be optional.
*/
mongoose.model('Hotel', hotelSchema, 'hotels');
