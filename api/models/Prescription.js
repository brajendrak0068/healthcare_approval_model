module.exports  = {
  tableName:'prescriptions',
  attributes:{
    id:{
      type: 'integer',
      primaryKey: true,
      autoIncrement: true
    },
    title:{
      type: 'string'
    },
    prescribed_by_id:{
      type:'integer'
    },
    medical_record_by_id:{          // foreign key medical record id
      type:'integer',
      model:'medicalrecord'
    },
    requested_for_by_id:{
      type:'integer'
    },
    requests: {                 // one to many relationship with requests
      type:  'integer',
      collection: 'request',
      via:  'prescription_id'
    },
    quantity:{
      type:'string'
    },
    description:{
      type:'string'
    },
    duration:{
      type:'string'
    },
    frequency: {
      type:'string'
    },
    created_at: {
      type: 'datetime',
      defaultsTo: function() {return new Date();}
    },
    updated_at: {
      type: 'datetime',
      defaultsTo: function() {return new Date();}
    }
  },
  beforeUpdate:function(values,next) {
    values.updated_at = new Date();
    next();
  }
};