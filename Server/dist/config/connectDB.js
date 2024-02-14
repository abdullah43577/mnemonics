"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = void 0;
require("dotenv/config");
const mongoose_1 = __importDefault(require("mongoose"));
const { DB_PASS } = process.env;
const connectDB = async function () {
    const dbURI = `mongodb+srv://officialayo540:${DB_PASS}@mnemonicscluster.x0keyqz.mongodb.net/mnemonics_user_db`;
    try {
        await mongoose_1.default.connect(dbURI);
        console.log('Connected to MongoDB');
    }
    catch (err) {
        console.log('mongodb not connected', err);
    }
};
exports.connectDB = connectDB;
