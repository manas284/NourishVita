const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  id: String,
  name: {
    type: String,
    required: true
  },
  description: String,
  price: {
    type: Number,
    required: true
  },
  tags: [String],
  image: String,
  badges: [String],
  isSubscribable: Boolean,
  
  rating: Number,
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;