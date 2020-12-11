const express = require('express');
const path = require('path');
const pages = require('./pages.js')

const server = express();
server
  //Utilizar body do req
  .use(express.urlencoded({ extended: true }))

  //
  .use(express.static('public'))

  //Template engine
  .set('views', path.join(__dirname, "views"))
  .set('view engine', 'hbs')

  //Rotas
  .get('/', pages.index)
  .get('/orphanage', pages.orphanage)
  .get('/orphanages', pages.orphanages)
  .get('/create-orphanage', pages.createOrphanage)
  .post('/save-orphanage', pages.saveOrphanage)

server.listen(5500);
