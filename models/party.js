const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const partySchema = new Schema({
    title: {
        type: String
    },
    location: {
        type: String
    },
    time: {
        type: String
    },
    uploadPicture: {
        type: String
    },
    details: {
        type: String
    }
});

module.exports = mongoose.model('Party', partySchema)