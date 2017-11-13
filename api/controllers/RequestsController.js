'use strict';
/**
 * UsersController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  create: function (req, res) {
     var currentUrl =  req.url;
     var prescriptionId = req.query.prescriptionId;
     var requestedForId = req.query.requestedForId;
     var requesterId =  req.session.user.id;
    Request.create({requested_for_by_id:requestedForId, requested_by_id: requesterId, prescription_id: prescriptionId, status: 'pending'}).exec(function (err, request) {
      if (err) {
        res.serverError(err);
      }
      if (!request) {
        return res.notFound('Could not find Finn, sorry.');
      }
      res.redirect(req.session.currentUrl);
    });
  },
  index: function (req, res) {
    var userId=  req.session.user.id;
    Request.find({requested_for_by_id: userId}).exec(function (err, requests) {
      if (err) {
        res.serverError(err);
      }
      if (!requests) {
        return res.notFound('Could not find Finn, sorry.');
      }
      res.view('requests/index', {requests: requests});
    });
  },
  update: function (req, res) {
    var approvedById =  req.session.user.id;
    var requestId= req.query.requestId;
    var action = req.query.action;
    Request.update({id:requestId},{ approved_by_id:approvedById, status: action}).exec(function (err, request) {
      if (err) {
        res.serverError(err);
      }
      if (!request) {
        return res.notFound('Could not find Finn, sorry.');
      }
      res.redirect('/requests');
    });
  }
};