const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/restaurants-db', {
  useNewUrlParser: true,
});

const restaurantSchema = new mongoose.Schema({
  id: Number,
  name: String,
  manager: String,
  numberOfRestaurants: Number,
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

const restaurant = new Restaurant({
  id: 1,
  name: 'McDonald',
  manager: 'Adam S.',
  numberOfRestaurants: 403,
});

restaurant.save();

export default Restaurant;
