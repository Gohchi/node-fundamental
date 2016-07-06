var express = require('express');
var router = express.Router();
var Customer = require('../model/customer');

router.route('/')
  .get(function(req, res, next) {
    Customer.find(function(err, customers) {
      if (err)
        res.send(err);

      res.render('customers', { title: 'Showing all customers', customers: customers,  form: false });
    });
  })
  .post(function(req, res) {
    var newcustomer = new Customer({
      name: req.body.name,
      username: req.body.username,
      password: req.body.password,
      premium: req.body.premium,
      location: req.body.location,
    });
    
    newcustomer.save(function(err) {
      if (err)
        res.send(err);
        
      Customer.find(function(err, customers) {
        if (err)
          res.send(err);

        res.render('customers', 
          {
            title: 'Showing all customers', 
            msg: 'Customer created!', 
            customers: customers,
            form: false 
          }
        );
      });
    });
  });

router.route('/:id')
  .get(function(req, res, next) {
    if(req.params.id == 0){
      res.render('customers', { 
        title: 'Fill data',
        customer: null,
        form: true 
      });
    }else{
      Customer.findById(req.params.id, function(err, customer) {
        if (err)
          res.send(err);
                  
          res.render('customers', 
            { 
              title: 'Update data',
              customer: customer,
              name: 'Albert',
              username: 'AlbertTest',
              form: true
            }
          );      
      });
    }
  })
  .put(function(req, res, next) {
    res.send('respond with a resource PUT');
  })
  .delete(function(req, res) {
    res.send('respond with a resource DELETE');
  });
// // Get all the customers
// router.get('/', function(req, res, next) {
//   res.render('customers', { title: 'Showing all customers' });
// });
// // Create a customer
// router.post('/', function(req, res, next) {
//   res.send('respond with a resource POST');
// });
// // Input form
// // Get a single customer
// router.get('/:id', function(req, res, next) {
//   res.render('customers', { title: 'Update data', name: 'Albert', username: 'AlbertTest' });
// });
// // Update a customer with new info
// router.put('/:id', function(req, res, next) {
//   res.send('respond with a resource PUT');
// });
// // Delete a customer
// router.delete('/:id', function(req, res, next) {
//   res.send('respond with a resource DELETE');
// });

module.exports = router;
