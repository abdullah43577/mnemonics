"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = void 0;
const openaiController_1 = require("./openaiController");
const test = (req, res) => {
    res.status(200).json({ message: 'Hello from the server side!', app: 'Natours' });
};
const getMnemonics = async (req, res) => {
    try {
        const mnemonics = await (0, openaiController_1.generateMnemonics)('abate');
        res.status(200).json({ message: mnemonics });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Something went wrong!' });
    }
};
exports.authController = { test, getMnemonics };
