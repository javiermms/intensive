const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cardSchema = new Schema({
    name: {
        type: String
    },
    missingFrom: {
        type: String
    },
    missingSince: {
        type: String
    },
    dateOfBirth: {
        type: String
    },
    race: {
        type: String
    },
    gender: {
        type: String
    },
    height: {
        type: String
    },
    weight: {
        type: String
    },
    hairColor: {
        type: String
    },
    eyeColor: {
        type: String
    },
    uploadPicture: {
        type: String
    },
    details: {
        type: String
    }
});

module.exports = mongoose.model('Card', cardSchema)