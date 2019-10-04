'use strict';

/******************************************
  Treehouse Techdegree:
  FSJS project 6 - Static Node.js and Express Site
  Reinhard Liess, 2019
******************************************/

// main script file

// require necessary modules
const path = require('path');
const	express	=	require('express');
const cookieParser = require('cookie-parser');
const requestLanguage = require('express-request-language');
const { assets, projects } = require('./data.json');

const {port = 3000} = process.env;
const	app	=	express();

// Register required middleware
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use(requestLanguage({
  languages: ['de', 'en'],
  cookie: {
    name: 'language',
    options: { maxAge: 365.25*24*3600*1000 },
    url: '/languages/{language}'
  }
}));

// Set defaults
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// root route
app.get('/',	(req,	res)	=>	{
  const { language } = req;
  res.render('index', { assets, projects, language });
});

// about route
app.get('/about',	(req,	res)	=>	{
  const { language } = req;
  res.render('about', { assets, language });
});

// projects route
app.get('/projects/:id',	(req,	res)	=>	{
  const { language } = req;
  const { id } = parseInt(req.params);
  // redirects to root, if project id is not within range
  if (id >= 0 && id <= projects.length - 1) {
    res.render('project', { assets, projects, language, id });
  } else {
    console.error(`Attempt to access non-existant resource: /projects/${id}.`)
    res.redirect('/')
  }
});

// handles 404 (not found) errors
app.use((req, res, next) => {
  const errMsg = assets[req.language]['error-handling']['404']
    .replace('$1', req.path)
    .replace('$2', req.hostname);

  const error = new Error(errMsg);
  error.status = 404;
  console.error(errMsg);
  next(error);
});

// main error handler
app.use((error, req, res, next) => {
  const { language } = req;
  error.status = error.status ? error.status : 500;
  res.status(error.status);
  res.render('error', { language, assets, projects, error });
});

const	server	=	app.listen(port,	()	=>	{
  console.log('Listening on port %s',	server.address().port);
});

