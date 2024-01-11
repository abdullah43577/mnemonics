"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkAuthToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const UserModel_1 = __importDefault(require("../model/UserModel"));
// implement a middleware that checks the validity of the token-cookie stored in the browser
const checkAuthToken = async (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).json({ error: 'Authorization token required' });
    }
    const token = authorization.split(' ')[1];
    try {
        const { id } = jsonwebtoken_1.default.verify(token, 'movie_database_secret');
        req.user = (await UserModel_1.default.findById(id)) ?? undefined; // find user with corresponding ID
        next();
    }
    catch (err) {
        console.log(err);
        res.status(401).json({ error: 'Request not Authorized' });
    }
};
exports.checkAuthToken = checkAuthToken;
