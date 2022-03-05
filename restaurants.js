import express, { request } from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

mongoose.connect('mongodb://localhost:27017/restaurants-db', {
  useNewUrlParser: true,
});

const restaurantSchema = new mongoose.Schema({
  name: String,
  manager: String,
});

const RestaurantsChain = mongoose.model('RestaurantsChain', restaurantSchema);

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
        res.render(err);
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
      });
    } else {
      res.render(err);
    }
  });
});

app
  .route('/restaurantChains/edit/:chainId')

  .get(function (req, res) {
    RestaurantsChain.findById(req.params.chainId, function (err, chain) {
      if (!err) {
        res.render('edit', {
          sectionTitle: 'Edit chain',
          id: chain._id,
          name: chain.name,
          manager: chain.manager,
        });
      } else {
        res.render(err);
      }
    });
  })

  .put(function (req, res) {
    console.log(req.params.chainId);
    RestaurantsChain.findByIdAndUpdate(
      req.params.chainId,
      {
        name: req.body.name,
        manager: req.body.manager,
      },
      function (err) {
        if (!err) {
          res.redirect('/restaurantChains/:chainId');
        } else {
          res.render(err);
        }
      },
    );
  });
app.get('/restaurantChains/delete/:chainId', function (req, res) {
  RestaurantsChain.findByIdAndDelete(req.params.chainId, function (err) {
    if (!err) {
      res.redirect('/restaurantChains');
    } else {
      res.render(err);
    }
  });
});

app.listen(5050, function () {
  console.log('Server started on port 5050');
});
