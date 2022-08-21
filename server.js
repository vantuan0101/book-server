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
require("./config/pre-start");
require("express-async-errors");
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const compression_1 = __importDefault(require("compression"));
const xss_clean_1 = __importDefault(require("xss-clean"));
const hpp_1 = __importDefault(require("hpp"));
const helmet_1 = __importDefault(require("helmet"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const errors_1 = require("./shared/errors");
const http_status_codes_1 = require("http-status-codes");
const app = (0, express_1.default)();
app.enable("trust proxy"); // trust first proxy
dotenv_1.default.config({ path: "./config.env" });
// parse application/x-www-form-urlencoded
app.use(express_1.default.json({ limit: "10kb" }));
// parse application/json
app.use(express_1.default.urlencoded({ extended: true, limit: "10kb" }));
// Implement CORS
// eslint-disable-next-line prettier/prettier
app.use((0, cors_1.default)({ credentials: true, origin: true }));
app.use((0, cookie_parser_1.default)());
app.use((0, compression_1.default)({
    level: 6,
    // threshold : 10 * 1000
}));
// Set security HTTP headers
app.use((0, helmet_1.default)({ crossOriginResourcePolicy: false }));
// Data sanitization against XSS
app.use((0, xss_clean_1.default)());
// Prevent parameter pollution
app.use((0, hpp_1.default)({
    whitelist: [
        "duration",
        "ratingsQuantity",
        "ratingsAverage",
        "maxGroupSize",
        "difficulty",
        "price",
    ],
}));
// Error handling
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// Serving static files
const publicDir = path_1.default.join(__dirname, "./public");
app.use("/public", express_1.default.static(publicDir));
app.use("/api/v1/", routes_1.default);
app.use((err, _, res, __) => {
    console.log(err);
    const status = err instanceof errors_1.CustomError ? err.HttpStatus : http_status_codes_1.StatusCodes.BAD_REQUEST;
    return res.status(status).json({
        error: err.message,
    });
});
const port = process.env.PORT || 3000;
app.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`Server is running on port http://localhost:${port}`);
}));
