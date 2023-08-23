const menuQuery =  require('../database/menu-query');
exports.findAllMenus = (connection) => {

    return new Promise((resolve, reject) => {

        connection.query(menuQuery.findAllMenus(), (err, result) => {
            if (err) {
                reject(err);
            }

            resolve(result);
        });
    });  
};

exports.findMenuByMenuCode = (connection, menuCode) => {

    return new Promise((resolve, reject) => {

        connection.query(menuQuery.findMenuByMenuCode(),[menuCode], (err, result) => {

            if(err) {
                reject(err);
            }

            resolve(result);
        });
    });
};

exports.registNewMenu = (connection, newMenu) => {

    return new Promise((resolve, reject) => {
        
        connection.query(
            menuQuery.registNewMenu(), 
            [
                newMenu.menuName,
                newMenu.menuPrice,
                newMenu.categoryCode,
                newMenu.orderableStatus
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
