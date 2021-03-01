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
    console.log('Hello');
    res.render( 'inventory.ejs', { 
        tabTitle: 'Home'
    });
});



module.exports = router;