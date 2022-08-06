var mongoose = require('mongoose');
var userSchema = mongoose.Schema({
    nama: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        lowercase: true,
        required: true
    },
    alamat: {
        type: String,
    },
    password: {
        type: String
    },
    token: {
        type: String
    },
    level: {
        type: String,
        default: 5
    },
    gender: String,
    phone: String,
    create_date: {
        type: Date,
        default: Date.now
    }
});
// userSchema.methods.comparePassword = function(password) {
//     return bcrypt.compareSync(password, this.hash_password);
//   };
module.exports = mongoose.model('User', userSchema);