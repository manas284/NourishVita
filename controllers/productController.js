const Product = require('../models/product');

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().lean();
    products.map(product => {
      product.id = product._id;
      delete product._id;
    });

    
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    const newProduct = product.toObject();
    newProduct.id = newProduct._id;
    delete newProduct._id;
    res.json(newProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createProduct = async (req, res) => {
  const { name, description, price, tags, images, rating } = req.body;
  const product = new Product({
    name,
    description,
    price,
    tags,
    images,
    rating,
  });
  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
};