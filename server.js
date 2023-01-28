'use strict';


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
// app.use()
const PORT = process.env.PORT || 5005;
console.log('Hello from our SERVER PORT!!!!!', process.env.PORT);



// routes



// class


// errorhandling

// Listen for PORT to start and keep our server running
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
