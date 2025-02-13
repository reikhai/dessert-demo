"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
// reducer.js
var initialState = {
    count: 0,
};
var counterReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case 'INCREMENT':
            return __assign(__assign({}, state), { count: state.count + 1 });
        case 'DECREMENT':
            return __assign(__assign({}, state), { count: state.count - 1 });
        default:
            return state;
    }
};
exports.default = counterReducer;
