'use strict';
/**
 * AuthController
 *
 * @description :: Server-side logic handling the users authentication
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */


var passport = require('passport');
module.exports = {
  register: function (req, res) {
    var params = {name: req.body.name, password: req.body.password, email: req.body.email};
    User.create(params).exec(function (err, user) {
      if (err) {
        res.serverError(err);
      }
      else {
        res.send(user);
      }
    });
  },
  login: function (req, res, next) {
    passport.authenticate('local', {
      failureRedirect: '/'
    }, function (err, user, response) {
      if (err) {
        return next(err);
      }
      if (user) {
        User.findOne({id: user.id}).populate('roles')
          .exec(function (err, finn) {
            if (err) {
              return res.serverError(err);
            }
            if (!finn) {
              return res.notFound('Could not find Finn, sorry.');
            }
            var title = finn.roles[0].title;
            user.role = title;
            req.session.user = user;
            if (title.toLowerCase() === 'doctor' || title.toLowerCase() === 'pharmacist') {
              res.redirect('/users')
            } else {
              res.redirect('/requests');
            }
          });
      }
      else {
        res.json({message: 'Bad username/password combination'});
      }
    })(req, res, next);
  },
  logout: function (req, res) {
    delete req.logout();
    req.session.destroy(function(){
      res.redirect('/login');
    })
  }
};