"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNewError = exports.setNewError = exports.NOT_FOUND_CONTENT = exports.NOT_FOUND = exports.Unauthorized = exports.BAD_REQUEST = exports.CREATE = exports.Ok = void 0;
exports.Ok = 200;
exports.CREATE = 201;
exports.BAD_REQUEST = 400;
exports.Unauthorized = 401;
exports.NOT_FOUND = 404;
exports.NOT_FOUND_CONTENT = 422;
const setNewError = (status, log) => {
    return JSON.stringify({ status, log });
};
exports.setNewError = setNewError;
const getNewError = (data) => {
    try {
        return JSON.parse(data);
    }
    catch (error) {
        return error;
    }
};
exports.getNewError = getNewError;
