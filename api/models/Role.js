module.exports = {
  tableName:'roles',
  attributes: {
    id: {
      type: 'integer',
      primaryKey: true,
      autoIncrement: true
    },
    title:{
      type:'string'
    },
    desciption:{
      type:'string'
    },
    users: {
      collection: 'user',
      via: 'role_id',
      through: 'userrole'
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
