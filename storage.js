const mongoose = require('mongoose');

const mongodb_url = process.env.MONGODB_URL || 'mongodb+srv://cinoy:informationsecurity@cluster0.m9mrb.mongodb.net/test';
mongoose.connect(mongodb_url);

const storage = {};

storage.Credentials = mongoose.model('Credential', new mongoose.Schema({
    id: {type: String, index: true},
    publicKeyJwk: Object,
    signCount: Number
}));

module.exports = storage;
