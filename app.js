//This is my simple sample app in vanilla express and javascript
//Include the express framework
const express = require ('express');
//Create the express app ();
const app = express ();
//Create a server that will process the requests
app.listen(3000, function (){
  console.log('My app server is running on local host 3000')
})
//create a simple route to access the express
app.get ('/', function (request, response){
  console.log('This is my req object: ', request)
})
