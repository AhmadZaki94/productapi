const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        id: {type: Number, required: true, unique: true},
        name: { type: String, required: true},
        type: { type: String, required: true},
        price: {type: Number, required: true},
        image: {type: String, required: true},
        rating: {type: Number, required: true},
        description: {type: String},
    },
    {
        versionKey: false,
        timestamps: true
    }
);

const Product = mongoose.model('product', productSchema);

module.exports = Product;