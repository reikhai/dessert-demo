"use strict";
// actions.js
// export const increment = () => ({
//     type: 'INCREMENT',
//   });
Object.defineProperty(exports, "__esModule", { value: true });
exports.decrement = exports.increment = void 0;
// Action creators
var increment = function () { return ({
    type: 'INCREMENT',
}); };
exports.increment = increment;
var decrement = function () { return ({
    type: 'DECREMENT',
}); };
exports.decrement = decrement;
