//////////////////////////////
//     INVENTORY ROUTER     //
//////////////////////////////


// DEPENDENCIES
const express = require( 'express' );
const router = express.Router();



////////////////////
//     ROUTES     //
////////////////////


// INDEX
// Get

router.get( '/', ( req, res ) => {
    res.render( 'index.ejs', { 
        tabTitle: 'Home'
    });
});



module.exports = router;