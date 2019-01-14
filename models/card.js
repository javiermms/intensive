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
    sex: {
        type: String
    },
    race: {
        type: String
    },
    hairColor: {
        type: String
    },
    eyeColor: {
        type: String
    },
    height: {
        type: String
    },
    weight: {
        type: String
    },
    details: {
        type: String
    }
});

module.exports = mongoose.model('Card', cardSchema)