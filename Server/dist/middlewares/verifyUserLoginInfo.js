"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyUserLoginInfo = void 0;
const UserModel_1 = __importDefault(require("../model/UserModel"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const verifyUserLoginInfo = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel_1.default.findOne({ email });
        if (user) {
            // compare passwords
            const passwordMatch = await bcrypt_1.default.compare(password, user.password);
            if (passwordMatch)
                next();
            return;
        }
        return res.status(400).json({ message: 'User credentials not found!' });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal Server Error!', Error: err });
    }
};
exports.verifyUserLoginInfo = verifyUserLoginInfo;
