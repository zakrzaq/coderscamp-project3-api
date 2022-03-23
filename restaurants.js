import express, { request } from 'express';
import bodyParser from 'body-parser';
import connectDB from './db/mongoose.js';
import { RestaurantsChain } from './models/RestaurantChain.js';
import { httpStatus } from './utils/httpStatusCode.js';

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

connectDB();

app
  .route('/restaurantChains')

  .get(function (req, res) {
    RestaurantsChain.find(function (err, chains) {
      if (!err) {
        res.render('restaurantsChain', {
          sectionTitle: 'Restaurants Chains',
          restaurantsChains: chains,
        });
      } else {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
          success: false,
          error: 'Server Error',
        });
      }
    });
  })

  .post(function (req, res) {
    const newChain = new RestaurantsChain({
      name: req.body.name,
      manager: req.body.manager,
    });

    newChain.save();

    res.redirect('/restaurantChains');
  });

app.get('/restaurantChains/:chainId', function (req, res) {
  RestaurantsChain.findOne({ _id: req.params.chainId }, function (err, chain) {
    if (!err) {
      res.render('chain', {
        id: chain._id,
        name: chain.name,
        manager: chain.manager,
        restaurants: chain.Restaurant,
      });
    } else {
      return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        success: false,
        error: 'Server Error',
      });
    }
  });
});

app.post('/restaurantChains/edit/:chainId', function (req, res) {
  RestaurantsChain.findByIdAndUpdate(
    req.params.chainId,
    {
      id: req.body.id,
      name: req.body.name,
      manager: req.body.manager,
    },
    function (err) {
      if (!err) {
        res.redirect(`/restaurantChains/${req.params.chainId}`);
      } else {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
          success: false,
          error: 'Server Error',
        });
      }
    },
  );
});

app.get('/restaurantChains/delete/:chainId', function (req, res) {
  RestaurantsChain.findByIdAndDelete(req.params.chainId, function (err) {
    if (!err) {
      res.redirect('/restaurantChains');
    } else {
      return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        success: false,
        error: 'Server Error',
      });
    }
  });
});

app.listen(5050, function () {
  console.log('Server started on port 5050');
});
