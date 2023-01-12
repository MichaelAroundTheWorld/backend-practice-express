"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PORT = 5002;
const app = (0, express_1.default)();
// app.get('/', (req, res) => {
//   res.status(200).json('Get query is working');
// });
app.listen(PORT, () => {
    console.log('SEREVER IS WORKING ON PORT ', PORT);
});
