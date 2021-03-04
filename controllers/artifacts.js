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
router.get('/seed', async (req, res) => {
    try {
      const seedItems = await Artifact.create( newArtifacts );
      res.send( seedItems );
    } catch ( error ) {
      res.send( error.message );
    };
});


// INDEX
router.get( '/', ( req, res ) => {
    Artifact.find( {}, ( error, artifact ) => {
        res.render( 'artifacts/index.ejs', { 
            tabTitle: 'Artifacts',
            allArtifacts: artifact
        });
    });
});


// NEW
router.get( '/new', ( req, res) => {
    res.render( 'artifacts/new.ejs', {
        tabTitle: 'New Artifact',
    });
});


// CREATE
router.post( '/', ( req, res ) => {
    Artifact.create( req.body, ( error, artifact ) => {
        res.redirect( '/artifacts' );
    });
});


// SHOW
router.get( '/:idOfArtifact', ( req, res ) => {
    Artifact.findById( req.params.idOfArtifact, ( error, artifact ) => {
        res.render( 'artifacts/show.ejs', {
            tabTitle: 'Artifact Details',
            artifact: artifact
        });
    });
});


// EDIT
router.get( '/:idOfArtifact/edit', ( req, res ) => {
    Artifact.findById( req.params.idOfArtifact, ( error, artifact ) => {
        res.render( 'artifacts/edit.ejs', {
            tabTitle: 'Edit Artifact',
            artifact: artifact
        });
    });
});


// UPDATE
router.put( '/:idOfArtifact', ( req, res ) => {
    Artifact.findByIdAndUpdate( req.params.idOfArtifact, req.body, { new: true }, ( error, artifact ) =>{
        res.redirect( `/artifacts/${ req.params.idOfArtifact }` );
    });
});


// DELETE
router.delete( '/:idOfArtifact', ( req, res ) => {
    Artifact.findByIdAndRemove( req.params.idOfArtifact, ( error, artifact ) => {
        res.redirect( '/artifacts/' );
    });
});



module.exports = router;