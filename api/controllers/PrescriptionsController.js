'use strict';
/**
 * PrescriptionsController
 *
 * @description :: Server-side logic for managing the Prescriptions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */


module.exports = {
  index: function (req, res) {
    var requesterId=  req.session.user.id;
    var requestedForId=  req.params.userId;
    var requestedById=  req.session.user.id;
    req.session.currentUrl = req.url;

    Prescription.find({medical_record_by_id: req.params.medicalRecordId}).populate('requests', {where:{requested_by_id: requestedById}}).exec(function (err, prescriptions) {
      if (err) {
        return res.serverError(err);
      }
      if (!prescriptions) {
        return res.notFound('Could not find prescriptions, sorry.');
      }
      res.view('prescriptions/index', {prescriptions:prescriptions, role: req.session.user.role,prescriptionId:req.params.prescriptionId ,requestedForId:requestedForId, medicalRecordId:req.params.medicalRecordId})
    });
  },
  show: function (req, res) {
    var prescriptionId=  req.params.prescriptionId;
    var requestedById=  req.session.user.id;
    Prescription.find({id: prescriptionId}).populate('requests',{where:{requested_by_id: requestedById, status:'approved'}}).exec(function (err, prescription) {

      if (err) {
        return res.serverError(err);
      }
      if (!prescription) {
        return res.notFound('Could not find prescription, sorry.');
      }
      res.view('prescriptions/show', {prescription: prescription})
    });
  }
};
