'use strict';
/**
 * MedicalRecordsController
 *
 * @description :: Server-side logic for managing Medical Records
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  show: function(req, res, next) {
    MedicalRecord.find({owner: req.params['userId']}).populate('prescriptions').populate('owner').exec(function (error, records){
      if(error){
        return next(error);
      }
      if (!records) {
        return res.notFound('Could not find records, sorry.');
      }
      res.view('medicalrecords/index', {records: records} )
    });
  }
};
