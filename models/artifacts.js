
const mongoose = require( 'mongoose' );

const artifactSchema = new mongoose.Schema({
    set: { type: String, required: true },
    rarity: { type: String, required: true },
    level: { type: Number, required: true },
    type: { type: String, required: true },
    mainStat: {
        statType: { type: String, required: true },
        statNumber: { type: Number, required: true }
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