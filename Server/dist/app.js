"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const { PORT } = process.env;
const routes_1 = __importDefault(require("./routes/routes"));
const connectDB_1 = require("./config/connectDB");
const app = (0, express_1.default)();
// Middlewares
app.use((0, morgan_1.default)('dev'));
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
(0, connectDB_1.connectDB)();
app.listen(PORT, () => console.log(`server started on http://localhost:${PORT}`));
// routes
app.use(routes_1.default);
