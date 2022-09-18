const database = require("../dao/mysql");

class Section {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        //this.establishment = establishment;//um endereço da model Establishment
    };
}

module.exports = Section;