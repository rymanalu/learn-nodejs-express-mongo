const express = require('express');
const Route = express.Router();

const AuthorController = require('./controllers/AuthorController');
const CategoryController = require('./controllers/CategoryController');

Route.get('/authors', AuthorController.index);
Route.post('/authors', AuthorController.store);
Route.get('/authors/:id', AuthorController.show);
Route.put('/authors/:id', AuthorController.update);
Route.delete('/authors/:id', AuthorController.destroy);

Route.get('/categories', CategoryController.index);
Route.post('/categories', CategoryController.store);
Route.get('/categories/:id', CategoryController.show);
Route.put('/categories/:id', CategoryController.update);
Route.delete('/categories/:id', CategoryController.destroy);

module.exports = Route;
