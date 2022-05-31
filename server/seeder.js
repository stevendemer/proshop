import mongoose from "mongoose";
import dotenv from 'dotenv';
import colors from 'colors';
import userSample from './data/users.js';
import products from "./data/products.js";
import User from './models/userModel.js';
import Product from './models/productModel.js';
import Order from './models/orderModel.js';
import connDB from "./config/db.js";

dotenv.config();

connDB();

const importData = async () => {
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        const createdUsers = await User.insertMany(userSample);

        const adminUser = createdUsers[0]._id;

        const sampleProducts = products.map(product => {
            return {
                ...product,
                user: adminUser
            }
        })

        await Product.insertMany(sampleProducts);

        console.log('Data imported !'.green.inverse);
    } catch (error) {
        console.error(`${error}`.red.inverse);
        process.exit(1);
    }
}

const destroyData = async () => {

    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        console.log('Data destroyed !'.red.inverse);
        process.exit();

    } catch (error) {
        console.error(`${error}`.red.inverse);
        process.exit(1);
    }
}

if (process.env[2] === '-d') {
    destroyData();
} else {
    importData();
}




