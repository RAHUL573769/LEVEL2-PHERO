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
const app_1 = __importDefault(require("./app"));
const config_1 = __importDefault(require("./config"));
const port = 3000;
const mongoose = require("mongoose");
require("dotenv").config();
function server() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield mongoose.connect(config_1.default.DB_URL);
            console.log("Db Connected");
        }
        catch (error) {
            console.log("Db Not Connected");
        }
    });
}
server().catch((err) => console.log(err));
app_1.default.listen(config_1.default.PORT, () => {
    console.log(`Example app listening on port ${config_1.default.PORT}`);
});