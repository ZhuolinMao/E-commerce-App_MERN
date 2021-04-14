import express from 'express'
import Product from '../models/productModel.js'
import asyncHandler from 'express-async-handler'

const router = express.Router();

// @desc    Fetch all the products
// @route   GET  /api/products
// @access  Public
router.get('/', asyncHandler(async (req, res) => {
    const products = await Product.find({});
    // res.status(401)
    // throw new Error('Not Authorized')
    res.json(products);
}))

// @desc    Fetch single product
// @route   GET  /api/products/:id
// @access  Public
router.get('/:id', asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
        res.json(product);
    }
    else {
        res.status(404);//optional, set status if want, otherwise will be 500 by default
        throw new Error('Product not found!');
    }

    res.json(product);
}));

export default router