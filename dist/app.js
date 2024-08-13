"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(cors_1.default);
// app.use('/api/v1/student', StudentRoutes)
app.get("/", (req, res) => {
    let a = 10;
    console.log('main part');
    res.send({ 'jahid': 'jahid' });
});
exports.default = app;
