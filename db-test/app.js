const BookController = require('./src/controllers/book-controller');

// BookController.findAllBooks();

// BookController.findBookByBookNo(1);

// BookController.registNewBook({
//     bookNo: 6,
//     bookName: '나는 냥이로소이다',
//     bookWriter: '신소윤',
//     categoryNo: 8
// });

BookController.updateBook(
    6,
    {
        bookName: '나는 냥이로소이다',
        bookWriter: '신소윤',
        categoryNo: 10
    } 
);
