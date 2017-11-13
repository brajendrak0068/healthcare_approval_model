
module.exports = {
  tableName:'requests',
  attributes:{
    id: {
        type: 'integer',
        primaryKey: true,
        autoIncrement: true
    },
    approved_by_id :{
      type: 'integer'
    },
    requested_for_by_id:{
     type: 'integer'
    },
    prescription_id: {
      model:'prescription',
      type:'integer'
    },
    requested_by_id: {
      type:'integer'
    },
    status:{
      type:'string',
      enum: ['pending', 'approved', 'denied']
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
