//////////////////////////////
//     ARTIFACTS ROUTER     //
//////////////////////////////


// DEPENDENCIES
const express = require( 'express' );
const router = express.Router();


//DATA MODELS



////////////////////
//     ROUTES     //
////////////////////


// INDEX
// Get

router.get( '/', ( req, res ) => {
    res.render( 'artifacts.ejs', { 

    });
});



module.exports = router;