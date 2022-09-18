//padrão da rota da api : 
//www.site.com/api/v1.0.0/products
//preferencialmente no plural (products, establishments)

const express = require('express');
const route = express.Router();

const productController = require('../controllers/productController');  
const sectionController = require('../controllers/sectionController'); 
const monitoringController = require('../controllers/monitoringController'); 
const establishmentsController = require('../controllers/establishmentsController'); 

// Rotas de produtos
route.get('/products', productController.listAll);
route.get('/products/:code',productController.getById);
route.post('/products',productController.create);

// Rotas de Estabelecimentos
route.get('/establishments', establishmentsController.list);
route.get('/establishments/:code', establishmentsController.getById);
route.post('/establishments', establishmentsController.create);
route.put('/establishments/:code',establishmentsController.update);

//Rotas de Sessões
route.get('/sections', sectionController.list);
route.get('/sections/:code', sectionController.getById);
route.post('/sections',sectionController.create);

//Rotas de Monitoramento
route.post('/monitoring', monitoringController.createLog);
route.get('/monitoring', monitoringController.listLog);
route.get('/monitoring/:code', monitoringController.getById);

module.exports = route;