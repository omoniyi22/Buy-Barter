"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PORT = exports.APP_SECRET = exports.MONGO_URI = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
let { MONGO_URI, APP_SECRET, PORT } = process.env;
exports.MONGO_URI = MONGO_URI;
exports.APP_SECRET = APP_SECRET;
exports.PORT = PORT;
//# sourceMappingURL=keys.js.map