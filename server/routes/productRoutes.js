import express from 'express';
import Product from '../models/productModel.js';
const router = express.Router();
import asyncHandler from 'express-async-handler';

// fetch all products 
router.get('/', asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
}));

// fetch the product with the selected id 
router.get('/:id', asyncHandler(async (req, res) => {

    const product = await Product.findById(req.params.id);

    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: "Product not found !" });
    }
}));


export default router;