const database = require("../dao/mysql");

class Product {
    constructor(id, name, section) {
        this.id = id;
        this.name = name;
        this.section = section;
    };
}

//export default Product;
module.exports = Product;