exports.findAllBooks = () => {

    return `SELECT * 
            FROM BOOK
        `;
};

exports.findBookByBookNo = () => {

    return `
        SELECT *
        FROM BOOK
        WHERE BOOK_NO = ?
        `;
};

exports.registNewBook = () => {

    return `
        INSERT 
            INTO BOOK
            (BOOK_NO, BOOK_NAME, BOOK_WRITER, CATEGORY_NO)
        VALUES
        (?, ?, ?, ?)
    `;
};

exports.updateBook = () => {

    return `
        UPDATE 
            BOOK SET
            BOOK_NAME =?,
            BOOK_WRITER =?,
            CATEGORY_NO =?
    `;
};