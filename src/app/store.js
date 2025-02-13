"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var reducer_1 = __importDefault(require("./reducer"));
// Configure the store with the reducer and type it correctly
exports.store = (0, toolkit_1.configureStore)({
    reducer: {
        counter: reducer_1.default, // Use the typed counterReducer
    },
});
