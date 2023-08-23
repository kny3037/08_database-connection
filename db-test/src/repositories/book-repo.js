const bookQuery = require('../database/book-query');

exports.findAllBooks = (connection) => {

    return new Promise((resolve, reject) => {

        connection.query(bookQuery.findAllBooks(), (err, result) => {
            if (err) {
                reject(err);
            }
            resolve(result)
        });
    });
};

exports.findBookByBookNo = (connection, bookNo) => {
    
    return new Promise((resolve, reject) => {

        connection.query(bookQuery.findBookByBookNo(), [bookNo], (err, result) => {
            if (err) {
                reject(err);
            }
            resolve(result);
        })
    });
};

exports.registNewBook = (connection, newBook) => {

    return new Promise((resolve, reject) => {

        connection.query(
            bookQuery.registNewBook(newBook),
            [
                newBook.bookNo,
                newBook.bookName,
                newBook.bookWriter,
                newBook.categoryNo
            ],
            (err, result) => {
                if(err) {
                    reject(err);
                }
                console.log('repo result : ', result);
                resolve(result);
            });
    });
};

exports.updateBook = (connection, bookNo, newBook) => {
    
    return new Promise((resolve, reject) => {
        
        connection.query(
            bookQuery.updateBook(bookNo, newBook),
            [
                bookNo,
                newBook.bookName,
                newBook.bookWriter,
                newBook.categoryNo
            ],
            (err, result) => {
                if(err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
    });
};
