
const mongoose = require( 'mongoose' );

const artifactSchema = new mongoose.Schema({
    set: String,
    quality: String,
    level: Number,
    type: String,
    mainStat: {
        type: String,
        stat: Number
    },
    subStat1: {
        type: String,
        stat: Number 
    },
    subStat2: {
        type: String,
        stat: Number 
    },
    subStat3: {
        type: String,
        stat: Number 
    },
    subStat4: {
        type: String,
        stat: Number 
    }
}, { timestamps: true } );

const Artifact = mongoose.model( 'Artifact', artifactSchema );

module.exports = Artifact;