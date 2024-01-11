"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const PORT = process.env.PORT;
const { DB_PASS } = process.env;
const routes_1 = __importDefault(require("./routes/routes"));
const app = (0, express_1.default)();
// Middlewares
app.use((0, morgan_1.default)('dev'));
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
const dbURI = `mongodb+srv://officialayo540:${DB_PASS}@mnemonicscluster.x0keyqz.mongodb.net/mnemonics_user_db`;
(async function () {
    try {
        await mongoose_1.default.connect(dbURI);
        app.listen(PORT, () => console.log(`server started on http://localhost:${PORT}`));
    }
    catch (err) {
        console.log('mongodb not connected', err);
    }
})();
// routes
app.use(routes_1.default);
