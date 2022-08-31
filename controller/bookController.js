let Book = require('../model/bookModel');

exports.index = function (req, res) {
    Book.find({}, function(err, Book) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        //res.render("index", {
            //title: 'BookStore', Book});
        res.render({
            status: "success",
            message: "Book retrieved successfully",
            data: Book
        });
    });
};

exports.new = function (req, res) {
    let book = new Book();
    book.title = req.body.title ? req.body.title : book.title;
    book.author = req.body.author;
    book.book_language = req.body.book_language;
    book.publisher = req.body.publisher;
    book.stock = req.body.stock;
    book.synopsis = req.body.synopsis;
    book.genre = req.body.genre;
    book.isbn = req.body.isbn;
    book.published = req.body.published;
// save the contact and check for errors
book.save(function (err) {
        // if (err)
        //     res.json(err);
        res.json({
            message: 'New book successfully added!',
            Title: book.title
        });
    });
};

exports.search = function (req, res) {
    Book.findById (req.params.id, function (err, book) {
        if (err)
        res.json({
            status: "error",
            message: err,
        });
        res.json({
            message: 'Book details loading..',
            data: book
        });
    });
};