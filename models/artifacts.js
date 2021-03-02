
const mongoose = require( 'mongoose' );

const artifactSchema = new mongoose.Schema({
    set: String,
    quality: String,
    level: Number,
    type: String,
    mainStat: {
        statType: String,
        statNumber: Number
    },
    subStat1: {
        statType: String,
        statNumber: Number 
    },
    subStat2: {
        statType: String,
        statNumber: Number 
    },
    subStat3: {
        statType: String,
        statNumber: Number 
    },
    subStat4: {
        statType: String,
        statNumber: Number 
    },
    equippedTo: String
}, { timestamps: true } );

const Artifact = mongoose.model( 'Artifact', artifactSchema );

module.exports = Artifact;