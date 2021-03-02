//////////////////////////////
//     ARTIFACTS ROUTER     //
//////////////////////////////


// DEPENDENCIES
const express = require( 'express' );
const router = express.Router();


//DATA MODELS
const Artifact = require( '../models/artifacts.js' );


////////////////////
//     ROUTES     //
////////////////////


// INDEX
// Get

router.get( '/', ( req, res ) => {
    res.render( 'artifacts.ejs', { 
        tabTitle: 'Artifacts'
    });
});



module.exports = router;