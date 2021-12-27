"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const HelloUser = ({ username }) => {
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ "data-testid": 'hello-user' }, { children: (0, jsx_runtime_1.jsxs)("h1", { children: ["Hello ", username] }, void 0) }), void 0));
};
exports.default = HelloUser;
