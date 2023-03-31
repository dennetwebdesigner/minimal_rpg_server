"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
const PORT = 3333;
server_1.server.listen(PORT, () => console.log(`server runner in http://localhost:3333`));
