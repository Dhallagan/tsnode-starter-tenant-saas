"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var emailer_1 = require("../email/emailer");
var user_repository_1 = require("../repositories/user.repository");
var bcrypt_1 = __importDefault(require("bcrypt"));
var moment_1 = __importDefault(require("moment"));
var jwt = __importStar(require("jsonwebtoken"));
var uuid_1 = require("uuid");
var UserService = /** @class */ (function () {
    function UserService() {
        //super();
        this.userRepository = new user_repository_1.UserRepository();
    }
    UserService.prototype.generateToken = function (user) {
        var payload = {
            iss: "localhost",
            sub: user._id,
            iat: moment_1.default().unix(),
            exp: moment_1.default().add(14, 'days').unix()
        };
        return jwt.sign(payload, 'secretsecretsecret');
    };
    UserService.prototype.createUser = function (res, username, email, password) {
        return __awaiter(this, void 0, void 0, function () {
            var userExists, passwordHash, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        username = username.toLowerCase();
                        email = email.toLowerCase();
                        return [4 /*yield*/, this.userRepository.getUserByEmail(email)];
                    case 1:
                        userExists = _a.sent();
                        if (userExists) {
                            return [2 /*return*/, { 'errors': [{ 'msg': 'Account with that email address already exists.' }] }];
                        }
                        return [4 /*yield*/, bcrypt_1.default.hash(password, 10)];
                    case 2:
                        passwordHash = _a.sent();
                        return [4 /*yield*/, this.userRepository.createUser(res, username, email, passwordHash, uuid_1.v4())];
                    case 3:
                        user = _a.sent();
                        // Send email
                        emailer_1.Emailer.welcomeEmail(user.Email, user.Username, user.EmailVerifyToken);
                        return [2 /*return*/, user];
                }
            });
        });
    };
    UserService.prototype.verifyEmail = function (res, verifyEmailToken) {
        return __awaiter(this, void 0, void 0, function () {
            var verifiedUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userRepository.getUserByToken(verifyEmailToken)];
                    case 1:
                        verifiedUser = _a.sent();
                        if (!verifiedUser) {
                            return [2 /*return*/, { 'errors': [{ 'msg': 'Email verification token is invalid or expired.' }] }];
                        }
                        verifiedUser.EmailVerified = true;
                        verifiedUser.EmailVerifyToken = "";
                        return [4 /*yield*/, this.userRepository.saveUser(res, verifiedUser)];
                    case 2:
                        _a.sent();
                        // Send Registration complete email?
                        return [2 /*return*/, { 'msg': 'Your email has been successfully verified.' }];
                }
            });
        });
    };
    UserService.prototype.login = function (res, email, password) {
        return __awaiter(this, void 0, void 0, function () {
            var user, passwordMatch;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userRepository.getUserByEmail(email)];
                    case 1:
                        user = _a.sent();
                        if (!user) {
                            return [2 /*return*/, res.status(400).json({ 'errors': [{ 'msg': 'Email not found.' }] })];
                        }
                        return [4 /*yield*/, bcrypt_1.default.compare(password, user.PasswordHash)];
                    case 2:
                        passwordMatch = _a.sent();
                        if (!passwordMatch) {
                            return [2 /*return*/, res.status(400).json({ 'errors': [{ 'msg': 'Invalid password.' }] })];
                        }
                        else {
                            return [2 /*return*/, res.status(200).json({ token: this.generateToken(user), user: user })];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    UserService.prototype.forgotPassword = function (res, email) {
        return __awaiter(this, void 0, void 0, function () {
            var userExists, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        email = email.toLowerCase();
                        return [4 /*yield*/, this.userRepository.getUserByEmail(email)];
                    case 1:
                        userExists = _a.sent();
                        if (!userExists) {
                            return [2 /*return*/, { 'errors': [{ 'msg': 'Account with the email address ' + email + ' email address does not exist.' }] }];
                        }
                        return [4 /*yield*/, this.userRepository.forgotPassword(email, uuid_1.v4(), moment_1.default().add(1, 'days').toString())];
                    case 2:
                        user = _a.sent();
                        emailer_1.Emailer.forgotPasswordRequestEmail(user.Email, user.PasswordResetToken);
                        return [2 /*return*/, { 'msg': 'An email has been sent to ' + email + ' with further instruction.' }];
                }
            });
        });
    };
    UserService.prototype.resetPassword = function (res, token, password) {
        return __awaiter(this, void 0, void 0, function () {
            var user, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.userRepository.getUserByTokenAndExpiration(token)];
                    case 1:
                        user = _b.sent();
                        if (!user) {
                            return [2 /*return*/, { 'errors': [{ 'msg': 'Password reset token is invalid or expired.' }] }];
                        }
                        // NEED TO CLEAR PasswordRestExpirs date as well 
                        _a = user;
                        return [4 /*yield*/, bcrypt_1.default.hash(password, 10)];
                    case 2:
                        // NEED TO CLEAR PasswordRestExpirs date as well 
                        _a.PasswordHash = _b.sent();
                        user.PasswordResetToken = "";
                        return [4 /*yield*/, this.userRepository.saveUser(res, user)];
                    case 3:
                        _b.sent();
                        emailer_1.Emailer.passwordResetSuccessEmail(user.Email);
                        return [2 /*return*/, { 'msg': 'Your password has been saved successfully.' }];
                }
            });
        });
    };
    return UserService;
}());
exports.UserService = UserService;
