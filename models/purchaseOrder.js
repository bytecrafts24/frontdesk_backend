const mongoose = require('mongoose');

const purchaseOrderSchema = new mongoose.Schema({
    invoice_details: {
        order_number: { type: String, required: true },
        order_date: { type: Date, required: true },
        place_of_order: { type: String },
    },
    vendor_details: {
        name: { type: String, required: true },
        gstin: { type: String },
        address1: { type: String },
        street: { type: String },
        state: { type: String },
        country: { type: String },
        pincode: { type: String },
    },
    delivery_details: {
        name: { type: String, required: true },
        gstin: { type: String },
        address1: { type: String },
        street: { type: String },
        state: { type: String },
        country: { type: String },
        pincode: { type: String },
        instructions: { type: String },
    },
    items: [{
        name: { type: String, required: true },
        HSN: { type: String },
        quantity: { type: Number, required: true },
        rate: { type: Number, required: true },
        total_amount: { type: Number, required: true },
    }],
    total_bill_amount: { type: Number, required: true },
    SGST: { type: Number },
    CGST: { type: Number },
    IGST: { type: Number },
}, { timestamps: true });

module.exports = mongoose.model('PurchaseOrder', purchaseOrderSchema);
