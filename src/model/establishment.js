const database = require("../dao/mysql");

class Establishment {
    constructor(id, name, address,image) {
        this.id = id;
        this.name = name;
        this.address = address;//um endereço da model Address
        this.image = image; //imagem em base64
    };
}

module.exports = Establishment;