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

const	app	=	express()

// Register required middleware
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use(requestLanguage({
  languages: ['de', 'en'],
  cookie: {
    name: 'language',
    options: { maxAge: 24*3600*1000 },
    url: '/languages/{language}'
  }
}));

// Set defaults
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));


app.get('/',	(req,	res)	=>	{
  // console.log(req.header('Accept-Language'));
  // console.log(req.language)
  const { language } = req;
  console.log({language});
  console.log(assets[language]['name']);
  res.render('index', { assets, language });
})

const	server	=	app.listen(port,	()	=>	{
  console.log('Listening on port %s',	server.address().port);
})

