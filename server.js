'use strict';

// console.log('Hello from our SERVER PORT!!!!!', process.env.PORT);

// REQUIRE
// In our server, we have to use 'require' instead of import'
// Here we will list the requirement for a server
// npm i express
// USE
// Once I have required something, we have to use it
// this is where we assign the required file a variable name
// React does this in one step with 'import',
// it says we must use it and it assign it to a variable
// Express takes 2 steps: 'require' and 'use'
// This is just how Express works.
// 1.
const express = require('express');
require('dotenv').config();
// 2.
const app = express();


const PORT = process.env.PORT || 5005;


// routes
//Routes we will use to access our end point
/**
 * .get() is an express method
 * it correlates to axios.get
 * the first parameter is a URL in quote
 * the second is a callback function
 */
// our root of our site pass callback () two params
app.get('/',(request, response)=>{
  //then we need to send something back
  response.send('Hello from our server HOME route / !!');
});


app.get('/hello', (request, response) => {
  //localhost:3003/hello?name=bob&lastname=trapper
  console.log('request object', request.query.name, request.query.lastname);
  
  response.status(200).send('hello');
});




// class


// errorhandling

// Listen for PORT to start and keep our server running
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
