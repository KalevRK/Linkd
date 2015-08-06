/* 
* @Author: Katrina Uychaco
* @Date:   2015-08-05 19:29:06
* @Last Modified by:   Katrina Uychaco
* @Last Modified time: 2015-08-05 22:48:11
*/

'use strict';

var isLoggedIn = require('./helpers.js').isLoggedIn;

module.exports = function(app, passport) {

  // Home Page
  app.get('/', function(req, res) {
    res.render('index.ejs');
  });

  // // Login
  // app.get('/login', function(req, res) {
  //   res.render('login.ejs', { message: req.flash('loginMessage') });
  // });

  // app.post('/login', function(req, res) {
  //   // TODO: passport stuff here
  // });

  // // Signup 
  // app.get('/signup', function(req, res) {
  //   res.render('signup.ejs', { message: req.flash('signupMessage') });
  // });

  // app.post('/signup', function(req, res) {
  //   // TODO: passport stuff here
  // });

  // Profile section 
  // Use route middleware to verify user is logged in
  app.get('/profile', isLoggedIn, function(req, res) {
    // Get the user out of the session and pass to template
    res.render('profile.ejs', { user: req.user });
  });

  // Logout
  app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  });

  // Google Routes
  // Send to google to do authentication
  app.get('/auth/google', 
    passport.authenticate('google', { scope: 'https://www.googleapis.com/auth/plus.login' }));

  // The callback after google has authenticated the user
  app.get('/auth/google/callback',
    passport.authenticate('google', {
      // successRedirect: '/profile',
      failureRedirect: '/'
    }),
    function(req, res) {
      res.redirect('/profile');
    });

};