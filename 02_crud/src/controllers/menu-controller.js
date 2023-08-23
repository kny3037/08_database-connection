const MenuService = require('../service/menu-service')

exports.findAllMenus = async () => {

    const results = await MenuService.findAllMenus();

    console.log(results);
};

exports.findMenuByMenuCode = async (menuCode) => {
    const results = await MenuService.findMenuByMenuCode(menuCode);

    console.log(results);
};

exports.registNewMenu = async (menu) => {

    const results = await MenuService.registNewMenu(menu);

    console.log(results);
};