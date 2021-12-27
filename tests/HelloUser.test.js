"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
// import react-testing methods
const test_utils_1 = require("./test-utils");
// add custom jest matchers from jest-dom
require("@testing-library/jest-dom");
const HelloUser_1 = __importDefault(require("../src/HelloUser"));
test('loads and displays greeting', () => __awaiter(void 0, void 0, void 0, function* () {
    (0, test_utils_1.render)((0, jsx_runtime_1.jsx)(HelloUser_1.default, { username: 'John' }, void 0));
    const div = yield test_utils_1.screen.findByTestId('hello-user');
    expect(div).toBeVisible();
    expect(div.firstChild).toHaveTextContent('Hello John');
}));
