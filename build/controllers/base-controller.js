"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BaseController = /** @class */ (function () {
    function BaseController() {
    }
    BaseController.prototype.returnError = function (response, error) {
        response.status(error.status || 500).json(error.error);
    };
    return BaseController;
}());
exports.BaseController = BaseController;
