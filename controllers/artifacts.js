//////////////////////////////
//     ARTIFACTS ROUTER     //
//////////////////////////////


// DEPENDENCIES
const express = require( 'express' );
const router = express.Router();


//DATA MODELS
const Artifact = require( '../models/artifacts.js' );
const newArtifacts = require( '../models/seed.js' );



////////////////////
//     ROUTES     //
////////////////////


// SEED ARTIFACT DATA
// Get

router.get('/seed', async (req, res) => {
    try {
      const seedItems = await Artifact.create( newArtifacts );
      res.send( seedItems );
    } catch ( error ) {
      res.send( error.message );
    };
});


// INDEX
// Get

router.get( '/', ( req, res ) => {
    Artifact.find( {}, ( error, artifact ) => {
        res.render( 'artifacts.ejs', { 
            tabTitle: 'Artifacts',
            allArtifacts: artifact
        });
    });
});


// SHOW
// Get

router.get( '/:idOfArtifact', ( req, res ) => {
    Artifact.findById( req.params.idOfArtifact, ( error, artifact ) => {
        res.render( 'show.ejs', {
            tabTitle: 'Artifact Details',
            artifact: artifact
        });
    });
}); 



module.exports = router;