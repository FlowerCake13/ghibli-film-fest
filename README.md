# ghibli-film-fest

Create the ultimate ghibli fan page!

## Objective

Use **XML Http Requests**, **Keyboard Events**, and more to recreate the Pokemon wild!

## Prerequisites

To complete this project, students should have the following:
* Intermediate understanding of HTML structures (divs, attributes, images...etc.).
* Intermediate understanding of JavaScript and DOM (for loops, variables, event listeners...etc.)

## Concepts

XML | Description
---| -----------
XML | e **X** tensible **M** arkup **L** anguage
XMLHttpRequest | An object that can be used to request data from a web server. Resource: https://www.w3schools.com/xml/xml_http.asp

## Your Challenge

### Part I

To complete Part I, fulfill the following requirements:
1. Set up your project file structure through the command line.
2. Create the following:
* HTML file
* CSS file
* JS file
3. Link all of your files correctly.

---

### Part II HTML

To complete Part II, fulfill the following requirements:

1. Create a ```div``` with an ```id``` of "container".

### Part III CSS

To complete Part III, fulfill the following requirements:

1. Target the ```body``` element.
  * Set its ```margin``` to 0px.
2. Target the ```id``` of "container".
  * Activate flexbox.
  * Allow the wrapping of elements using flexbox.
  * Create even space around the elements using flexbox.
3. Target the ```class``` of "film".
  * Set the ```width``` to 300px.
  * Set the ```height``` to auto.
  * Activate flexbox.
  * Center the items horizontally and vertically using flexbox.
  * Set the direction of items to a column using flexbox.
  * Add some padding and margins to make the spacing more appealing.

### Part IV JS

To complete Part III, fulfill the following requirements:

1. Create a new ```XMLHttpRequest()``` and open a GET request to "https://ghibliapi.herokuapp.com/films/".
2. When the request is successfully processed, create and append elements to showcase the title, producer, rotten tomato score (rt_score), and description of each movie. Set a new class on each element so that it has a class of "film".
3. Add background images to the divs for each movie!

## Stretch Goals

Create hover effects, rank the movies by score, and create a section where you write out your own review of the movie. 
