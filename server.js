//////////////////////////////////////
//     GENSHIN IMPACT INVENTORY     //
//////////////////////////////////////


// DEPENDENCIES
const express = require( 'express' );
const mongoose = require( 'mongoose' );
const methodOverride = require( 'method-override' );


// CONFIGURATION
const app = express();
const port = 3000;



//////////////////////////////
//     DB CONFIGURATION     //
//////////////////////////////


const mongoURI = 'mongodb://localhost:27017/genshinImpactInventory';

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


app.use( express.urlencoded( { extended: true } ));
app.use( methodOverride( '_method' ) );



//////////////////////
//     LISTENER     //
//////////////////////


app.listen( port, () => {
    console.log( `Listening on localhost:${port}` );
});

