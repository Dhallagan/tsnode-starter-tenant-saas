"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var base_route_1 = require("./base-route");
var user_controller_1 = require("../controllers/user.controller");
var validation_1 = require("../util/validation");
var UserRoutes = /** @class */ (function (_super) {
    __extends(UserRoutes, _super);
    function UserRoutes() {
        var _this = _super.call(this) || this;
        _this.userController = new user_controller_1.UserController();
        _this.initRoutes();
        return _this;
    }
    UserRoutes.prototype.initRoutes = function () {
        var _this = this;
        this.router.post('/register', validation_1.Validation.forRegister, function (req, res, next) { return _this.userController.register(req, res).catch(next); });
        this.router.get('/verify/:token', function (req, res, next) { return _this.userController.verifyRegistration(req, res).catch(next); });
        this.router.post('/login', validation_1.Validation.forLogin, function (req, res, next) { return _this.userController.login(req, res).catch(next); });
        this.router.post('/recover', function (req, res, next) { return _this.userController.forgotPassword(req, res).catch(next); });
        this.router.post('/reset/:token', validation_1.Validation.forReset, function (req, res, next) { return _this.userController.resetPassword(req, res).catch(next); });
    };
    return UserRoutes;
}(base_route_1.BaseRoute));
exports.UserRoutes = UserRoutes;
