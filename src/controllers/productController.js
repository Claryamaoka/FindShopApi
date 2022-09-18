const { response } = require('express');
const Product = require("../model/product");
const service = require("../services/productService");
const Output = require("../model/output");

class ProductController {
    async create(req, res) {
        await service.create(req.body)
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            });
    }

    async listAll(req, res) {
        //await service.find().sort("id")
        await service.find()
            .then(
                response => {
                    response = response.sort(function(a, b) { 
                        (a.name.localeCompare(b.name));
                      });
                    return res.status(200).json(response);
                }
            )
            .catch(error => {
                return res.status(500).json(error)
            })
    }

    async getById(req, res) {
        const code = req.params.code;

        await service.findById(code)
            .then(
                response => {
                    if(response == null)
                        return res.status(400).json(new Output("400","Not Found","O produto não foi encontrado"));

                    return res.status(200).json(response);
                }
            )
            .catch(error => {
                return res.status(500).json(error)
            })
    }
}

module.exports = new ProductController();