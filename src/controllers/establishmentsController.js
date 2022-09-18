//Get establishment + image por ID 
const { response } = require('express');
const Establishments = require("../model/establishment");
const service = require("../services/establishmentsService");
const Output = require("../model/output");

class EstablishmentsController {
    async list(req, res) {
        //await service.find().sort("id")
        await service.find()
            .then(
                response => {
                    response = response.sort(function(a, b) { 
                        (a.id - b.id);
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
                        return res.status(400).json(new Output("400","Not Found","O estabelecimento não foi encontrado"));

                    return res.status(200).json(response);
                }
            )
            .catch(error => {
                return res.status(500).json(error)
            })
    }

    async create(req, res) {
        await service.create(req.body)
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            });
    }

    async update(req, res) {
        const code = req.params.code;
        await service.update(req.body, code)
            .then(response => {
                if(response == null)
                        return res.status(400).json(new Output("400","Not Found","O estabelecimento não foi encontrado"));

                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            });
    }

}

module.exports = new EstablishmentsController();