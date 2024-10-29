const mongoose = require('mongoose');

const entityTypeSchema = new mongoose.Schema({
    type: { type: String, required: true },
    alias: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('EntityType', entityTypeSchema);
