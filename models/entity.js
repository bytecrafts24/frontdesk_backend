const mongoose = require('mongoose');

const entitySchema = new mongoose.Schema({
    name: { type: String, required: true },
    logo: { type: String },
    email: { type: String, required: true },
    phone: { type: String },
    address1: { type: String },
    street: { type: String },
    city: { type: String },
    state: { type: String },
    country: { type: String },
    entity_type_id: { type: mongoose.Schema.Types.ObjectId, ref: 'EntityType' },
    pan_id: { type: String },
    gstin: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Entity', entitySchema);
