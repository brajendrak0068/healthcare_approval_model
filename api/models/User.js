/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
var bcrypt = require('bcrypt');

module.exports = {
  tableName: 'users',
  attributes: {
    id: {
      type: 'integer',
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: 'string',
      required: true
    },
    password: {
      type: 'string',
      minLength: 6,
      required: true
    },
    email: {
      type: 'email',
      unique: true,
      required: true
    },
    toJSON: function() {
      var obj = this.toObject();
      delete obj.password;
      return obj;
    },
    roles: {
      collection: 'role',
      via: 'user_id',
      through: 'userrole'
    },
    medical_record:{
      collection:'medicalrecord',
      via: 'owner'
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
  },
  beforeCreate: function (values, cb) {
    // Hash password
    bcrypt.hash(values.password, 10, function(err, hash) {
      if(err) return cb(err);
      values.password = hash;
      //calling cb() with an argument returns an error. Useful for canceling the entire operation if some criteria fails.
      cb();
    });
  }
};