/**
 * HomeController
 *
 * @description :: Server-side logic for managing home page
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function (req, res, next) {
        var title  = req.session.user && req.session.user.role.toLowerCase();
   
       if(title==='patient'){
        res.redirect('/requests');
        } else if(title === 'doctor' || title === 'pharmacist') {
        res.redirect('/users');
        } else {
        res.redirect('/login');
     }
  },
  getLoginPage: function (req, res, next){

   res.view('users/login');

  }
};

