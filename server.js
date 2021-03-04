//////////////////////////////////////
//     GENSHIN IMPACT INVENTORY     //
//////////////////////////////////////


// DEPENDENCIES
const express = require( 'express' );
const mongoose = require( 'mongoose' );
const methodOverride = require( 'method-override' );
require('dotenv').config();


// CONFIGURATION
const app = express();
const port = process.env.PORT || 3000;


// CONTROLLERS 
const artifactsController = require( './controllers/artifacts.js' );
const inventoryController = require( './controllers/inventory.js' );



//////////////////////////////
//     DB CONFIGURATION     //
//////////////////////////////


const mongoURI = process.env.mongoURI || 'mongoURI=mongodb://localhost:27017/genshinImpactInventory';

mongoose.connect( mongoURI , { 
    useNewUrlParser: true,
    useUnifiedTopology: true, 
    useFindAndModify: false  
});

mongoose.connection.once( 'open', () => {
  console.log( `Connected to mongo at: ${ mongoURI }` );
});



////////////////////////
//     MIDDLEWARE     //
////////////////////////


app.use( express.json() );
app.use( express.urlencoded( { extended: true } ));
app.use( express.static( 'public' ) );
app.use( methodOverride( '_method' ) );
app.use( '/', inventoryController );
app.use( '/artifacts', artifactsController );



//////////////////////
//     LISTENER     //
//////////////////////


app.listen( port, () => {
    console.log( `Listening on localhost:${port}` );
});

