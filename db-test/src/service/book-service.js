const getConnection = require('../database/connection');
const BookRepository = require('../repositories/book-repo');

exports.findAllBooks = () => {

    return new Promise((resolve, reject) => {

        console.log('findAllBooks service function called');
        const connection = getConnection();

        const results = BookRepository.findAllBooks(connection);

        connection.end();

        resolve(results);
    });
}

exports.findBookByBookNo = (bookNo) => {

    return new Promise((resolve, reject) => {

        const connection = getConnection();

        const results = BookRepository.findBookByBookNo(connection, bookNo);

        connection.end();

        resolve(results);
    });
}

exports.registNewBook = (book) => {

    return new Promise(async(resolve, reject) => {

        const connection = getConnection();

        connection.beginTransaction();

        try {

            const result = await BookRepository.registNewBook(connection, book);
            console.log('result : ', result.insertId);

            const insertedBook = await BookRepository.findBookByBookNo(connection, result.insertId);
            console.log('insertedBook : ', insertedBook);

            connection.commit();
            console.log('commit successful');

            resolve(insertedBook);

        }catch(err) {

            connection.rollback();
            console.error('rollback successful');

            reject(err);
        }finally {
            connection.end();
            console.log('connection is closed');
        }
    });
};

exports.updateBook = (book) => {
    return new Promise(async(resolve, reject) => {

        const connection = getConnection();
        connection.beginTransaction();

        try {
            const findBook = await BookRepository.findBookByBookNo(connection, book);
            console.log('findBook : ', findBook);

            if(!findBook) {
                throw new Error('Book not found');
            }

            const updatedBook = await BookRepository.updateBook(connection, findBook, book);

            connection.commit();
            connection.release();

            resolve(updatedBook);

        }catch(err) {

            connection.rollback();
            console.log('rollback successful');

            reject(err);
        }finally {
            connection.end();
            console.log('connection is closed');
        } 
    });
}