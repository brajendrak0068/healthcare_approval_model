module.exports = {
  tableName:'medical_records',
  attributes: {
    id: {
      type: 'integer',
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: 'string'
    },
    description: {
      type: 'string'
    },
    owner:{                 // medical record and user one to one associations
      type:'integer',
      model:'user',
      unique: true
    },
    prescriptions:{             // one to many relationships with prescriptions
      collection:'prescription',
      via:'medical_record_by_id'
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

