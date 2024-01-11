"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashPasswords = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const hashPasswords = async (req, res, next) => {
    try {
        let { password } = req.body;
        const salt = await bcrypt_1.default.genSalt();
        req.body.password = await bcrypt_1.default.hash(password, salt);
        next();
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal Server Error!' });
    }
};
exports.hashPasswords = hashPasswords;
