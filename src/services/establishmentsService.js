const { response } = require('express');
const Establishment = require("../model/establishment");
const Validate = require("../services/validationService");

let db = [new Establishment("1","Carrefour","Demarchi","https://m3storage.com.br/locais/26-m3storage-carrefour-sao-bernardo-demarchi.html"), new Establishment("2","Bem Barato","Av. Pereira Barreto","https://grupobembarato.com.br/lojas/")];

class EstablishmentService {
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
            db.push(new Establishment(body.id,body.name,body.address,body.image));        
            return db;
        }
        return null;   
    }

    async update(body, code){
        var res = db.find(x => x.id == code)
        if(!res)
            return null;
        
        if(!Validate.validateUpdate(code,body,db)){
            return "Error";
        }
        var foundIndex = db.findIndex(x => x.id == code);
        db[foundIndex] = new Establishment(body.id,body.name,body.address,body.image);
        return db;
    }
}

module.exports = new EstablishmentService();