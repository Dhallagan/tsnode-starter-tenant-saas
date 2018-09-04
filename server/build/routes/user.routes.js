"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var base_route_1 = require("./base-route");
var user_controller_1 = require("../controllers/user.controller");
var validation_1 = require("../util/validation");
var authentication_1 = require("../core/middleware/authentication");
var multer_1 = __importDefault(require("multer"));
var upload = multer_1.default({ dest: './src/uploads/' });
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
        this.router.post('/verify', function (req, res, next) { return _this.userController.verifyRegistration(req, res).catch(next); });
        this.router.post('/login', validation_1.Validation.forLogin, function (req, res, next) { return _this.userController.login(req, res).catch(next); });
        this.router.post('/recover', function (req, res, next) { return _this.userController.recoverPassword(req, res).catch(next); });
        this.router.post('/reset/:token', validation_1.Validation.forReset, function (req, res, next) { return _this.userController.resetPassword(req, res).catch(next); });
        // this.router.put('/account/', Validation.forReset, (req, res, next) => this.userController.resetPassword(req, res).catch(next));
        this.router.put('/password/update', validation_1.Validation.forReset, function (req, res, next) { return _this.userController.updatePassword(req, res).catch(next); });
        this.router.get('/users', function (req, res, next) { return _this.userController.getUsers(req, res).catch(next); });
        this.router.get('/users/token', authentication_1.Authentication.isAuthenticated, function (req, res, next) { return _this.userController.getUserByToken(req, res).catch(next); });
        this.router.get('/users/:id', function (req, res, next) { return _this.userController.getUser(req, res).catch(next); });
        this.router.post('/users/:id', function (req, res, next) { return _this.userController.updateUser(req, res).catch(next); });
        this.router.post('/users/:id/avatar', function (req, res, next) { return _this.userController.updateAvatar(req, res).catch(next); });
        this.router.post('/upload', function (req, res, next) { return _this.userController.upload(req, res).catch(next); });
    };
    return UserRoutes;
}(base_route_1.BaseRoute));
exports.UserRoutes = UserRoutes;
