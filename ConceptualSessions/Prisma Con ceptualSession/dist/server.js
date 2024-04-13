"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __importDefault(require("."));
const port = 3000;
let server;
function main() {
    try {
        server = _1.default.listen(port, () => {
            console.log(`Example app listening on port ${port}`);
        });
    }
    catch (error) {
        console.log(error);
    }
}
main();
