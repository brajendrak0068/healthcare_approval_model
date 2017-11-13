'use strict';

/**
 * UsersController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  index: function(req, res) {
    User.find().populate('medical_record').exec(function (error, users){
        if(error) {
          return next(error);
        }
        if (!users) {
          return res.notFound('Could not find Finn, sorry.');
        }
        res.view('users/index',{users: users})
      });
  }
};