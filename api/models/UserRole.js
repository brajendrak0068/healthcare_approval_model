module.exports = {
  tableName:'user_roles',
  attributes: {
    id:{
      type: 'integer',
      primaryKey: true,
      autoIncrement: true
    },
    role_id: {
      model: 'role'
    },
    user_id: {
      model: 'user'
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