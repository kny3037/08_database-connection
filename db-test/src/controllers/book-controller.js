const BookService = require('../service/book-service')

exports.findAllBooks = async () => {
    
    const results = await BookService.findAllBooks();

    console.log(results);
}

exports.findBookByBookNo = async (bookNo) => {
    const results = await BookService.findBookByBookNo(bookNo);

    console.log(results);
};

exports.registNewBook = async (book) => {

    const results = await BookService.registNewBook(book);

    console.log(results);
};

exports.updateBook = async (book) => {

    const results = await BookService.updateBook(book);

    console.log(results);
};