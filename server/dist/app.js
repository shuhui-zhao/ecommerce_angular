"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = require("mongoose");
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = 5000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Connect to MongoDB
const MONGO_URL = (_a = process.env.MONGO_URL) !== null && _a !== void 0 ? _a : '';
if (MONGO_URL === '') {
    process.exit();
}
(0, mongoose_1.connect)(MONGO_URL)
    .then(() => console.log('MongoDB Connected'))
    .catch((err) => console.error(err));
// Start server
app.get('/', (req, res) => {
    res.send('Get request received');
});
app.listen(port, () => {
    return console.log(`Express is listening at http:localhost:${port}`);
});
exports.default = app;
