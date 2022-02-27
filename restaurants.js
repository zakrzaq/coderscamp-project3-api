import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect('mongodb://localhost:27017/restaurants-db', {useNewUrlParser: true});

const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please check your data entry, no value specified!'],
  },
  manager: {
    type: String,
    required: [true, 'Please check your data entry, no value specified!'],
  },
});

const RestaurantsChain = mongoose.model("RestaurantsChain", restaurantSchema);

app.route('/restaurantChains')

.get(function (req, res) {
  RestaurantsChain.find(function(err, chains){
    if (!err) {
      res.render('restaurantsChain', { 
        sectionTitle: 'Restaurants Chains',
        restaurantsChains: chains
      })
    } else {
      res.render(err)
    }
  })
});

app.listen(5050, function () {
  console.log('Server started on port 5050');
});
