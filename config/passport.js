var passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy,
  bcrypt = require('bcrypt');

passport.serializeUser(function (user, done) {
  console.log('useruseruseruseruser', user);
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  console.log('ddddesiisisiss i', id);
  User.findOne({id: id}, function (err, user) {
    done(err, user);
  });
});

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  },
  function (email, password, done) {

    User.findOne({email: email}, function (err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, {message: 'Incorrect email.'});
      }
      bcrypt.compare(password, user.password, function (err, res) {
        if (!res){
          return done(null, false, {
            message: 'Invalid Password'
          });
        }
        console.log('starttttttttt')
        return done(null, user, { message: 'Logged In Successfully' });
      });
    });
  }
));
