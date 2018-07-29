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
var WelcomeRoutes = /** @class */ (function (_super) {
    __extends(WelcomeRoutes, _super);
    function WelcomeRoutes() {
        var _this = _super.call(this) || this;
        _this.userController = new user_controller_1.UserController();
        _this.initRoutes();
        return _this;
    }
    WelcomeRoutes.prototype.initRoutes = function () {
        var _this = this;
        this.router.get('/user', function (req, res, next) { return _this.userController.getAllUsers(req, res).catch(next); });
        this.router.get('/user/:name', function (req, res, next) { return _this.userController.getUser(req, res).catch(next); });
    };
    return WelcomeRoutes;
}(base_route_1.BaseRoute));
exports.WelcomeRoutes = WelcomeRoutes;
