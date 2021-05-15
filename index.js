const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;
const i18n = require('./i18n');

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .use(i18n.init)
  .get('/', (req, res) => res.render('pages/index'))
  .get('/privacy', (req, res) => res.render('pages/privacy'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));