var mongoose = require('mongoose');
var bookSchema = mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: true
    },
    author: {
        type: String,
        trim: true,
        required: true
    },
    isbn: {
        type: String,
        unique: true
    },
    published: {
        type: String
    },
    book_language: {
        type: String,
        default: "Bahasa Indonesia"
    },
    synopsis: {
        type: String,
        required: true
    },
    publisher: {
        type: String,
        defaukt: "-"
    },
    genre: {
        type: String
    },
    stock: {
        type: Number,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    },
    edited_at: {
        type: Date,
        default: Date.now
    }
});
// userSchema.methods.comparePassword = function(password) {
//     return bcrypt.compareSync(password, this.hash_password);
//   };
module.exports = mongoose.model('Book', bookSchema);