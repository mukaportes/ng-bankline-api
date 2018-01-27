// Dependencies 
var restful = require('node-restful');
var mongoose = restful.mongoose;

var bcrypt = require('bcrypt')
var SALT_WORK_FACTOR = 10;

// Schema
var userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    account: 
    {type: Number,
    required: true,
    min: 1000,
    max: 9999},


    password:
       {type: String,
        required: true},
    balance: Number,
    logs: Array,
    email: 
       {type: String,
        required: true}
    })


    userSchema.pre('save', function(next) {
        var user = this;
    
        // only hash the password if it has been modified (or is new)
        if (!user.isModified('password')) return next();
    
        // generate a salt
        bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
            if (err) return next(err);
    
            // hash the password using our new salt
            bcrypt.hash(user.password, salt, function(err, hash) {
                if (err) return next(err);
    
                // override the cleartext password with the hashed one
                user.password = hash;
                next();
            });
        });
    });
    
    userSchema.methods.comparePassword = function(candidatePassword, cb) {
        bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
            if (err) return cb(err);
            cb(null, isMatch);
        });
    };
    
// Return model
module.exports = restful.model('User', userSchema);
