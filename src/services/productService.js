const { response } = require('express');
const Product = require("../model/product");
const Validate = require("../services/validationService");

let db = [new Product("1","Banana","Frutas"),new Product("2","Leite","Laticínios")];

class ProductService {
    async find() {
        return db;
    }

    async findById(id) {
        var res = db.find(x => x.id == id)
        if(!res)
            return null;
        return res;
    }

    async create(body){
        if(!body)
            return null;
        if(Validate.validateCreate(body,db)){
            db.push(new Product(body.id,body.name,body.section));
            return db;
        }
        
    }
}

module.exports = new ProductService();