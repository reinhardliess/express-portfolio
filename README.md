# JavaScript Techdegree Project #6: Static Node.js and Express Site

A live version of this project can be found [here](https://rard3954-fsjs-proj6.herokuapp.com/). Please note that the app is in hibernation mode and may take a couple of seconds to load.

The goal of this project was to create a portfolio site to showcase the projects I've built.
The site contains a modern landing page, an about page with contact info, info about myself, and a series of project pages to show off and detail the first five projects from the Techdegree.

## Installation

* Download or clone from Github
* run `npm install`
* run `npm start` to start the server. The website can then be accessed locally by pointing the web browser to `localhost:3000`

## Basic Project requirements

* Create a JSON file to store all the data about the projects you've created.
* Use Pug to complete provided templates that utilize the JSON to generate the markup that is ultimately displayed in the browser.
* Use Node.js and Express to:
  * Import the required dependencies
  * Link the JSON with the Pug templates
  * Set up routes to handle requests
  * Set up the middleware to utilize static files like CSS
  * Handle errors
  * Set up a server to serve the project

## Exceeds Grade Project Requirements

* Set up your package.json file so that running npm start will run the app.
* Use error handling middleware to render a Pug template
* Customize the style
* Change or add at least three of the following to make this project your own:
  * color
  * background color
  * font
  * box or text shadows
  * transitions or animations
  * add a logo

## Some Additional remarks

### Localization in English and German

* The language of the site can be switched at any time by using one of two flag icons in the upper right corner of the page
* The data.json file doesn't only store information about all projects but also all other assets that are needed to be localized
* The core language functionality is provided by [express-request-language](https://github.com/tinganho/express-request-language) middleware. The set language is retrieved from a cookie, or if not available from the _Accept-Language_ HTTP header

### Error Handling

* If the user changes the browser's url to a wrong project-id (e.g. /projects/22) for the project route, the app will redirect to the root route and log a message on the server
* If the app is directed to a non-existant route(404) a detailed error message is displayed on the page (error message, HTTP status code, stack trace) using the error.pug template. Other errors than 404 are handled the same way.

### Design Changes and Additions

* Two language icons to switch between English and German at any time
* Transition hover effects added to all icons/buttons using brand colors for Github and Twitter icons
* Font changes to skills section (about page), technologies section (project pages) and error message to display text as monospace
* FadeIn animation added to big blocks of text (using [animate.css](https://github.com/daneden/animate.css))
* Change of background color for about/project pages
