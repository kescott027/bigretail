var mongoose = require('mongoose');
var Hotel = mongoose.model('Hotel');

// Get All reviews for one hotel
module.exports.reviewsGetAll = function(req, res) {
  var hotelId = req.params.hotelId;
  console.log("GET hotelId ", hotelId);

Hotel
  .findById(hotelId)
  .select('reviews')
  .exec(function(err, doc) {
    res
      .status(200)
      .json(doc.reviews);
  });
};

// Get One review for one hotel
module.exports.reviewsGetOne = function(req, res) {
  var hotelId = req.params.hotelId;
  var reviewId = req.params.reviewId;
  console.log("GET reviewId " + reviewId + " for hotelId " + hotelId);

  Hotel
    .findById(hotelId)
    .select('reviews')
    .exec(function(err, hotel) {
      console.log("Returned hotel", hotel);
      var reviews =  hotel.reviews.id(reviewId);
      res
        .status(200)
        .json(reviews);

    });
};
