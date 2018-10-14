const bcrypt = require('bcryptjs'); 

module.exports.comparePasswords = (candiatePassword, hash, callback) => {
    bcrypt.comparePasswords(candiatePassword, hash, (err, isMatch) =>{  
        if(err) throw err;
        callback(null, isMatch); 
    });
}