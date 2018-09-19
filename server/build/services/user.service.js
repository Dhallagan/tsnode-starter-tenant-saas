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
var generate_password_1 = require("generate-password");
var emailer_1 = require("../email/emailer");
var repositories_1 = require("../repositories");
var bcrypt_1 = __importDefault(require("bcrypt"));
var moment_1 = __importDefault(require("moment"));
var jwt = __importStar(require("jsonwebtoken"));
var uuid_1 = require("uuid");
var storage_1 = require("../core/storage");
var tenant_service_1 = require("./tenant.service");
var stripe_1 = require("../core/stripe");
var UserService = /** @class */ (function () {
    function UserService() {
        //super();
        this.userRepository = new repositories_1.UserRepository();
        this.companyRepository = new repositories_1.CompanyRepository();
        this.tenantService = new tenant_service_1.TenantService();
        this.stripe = new stripe_1.Stripe();
    }
    UserService.prototype.generateToken = function (user) {
        var payload = {
            iss: "localhost",
            sub: user.Id,
            iat: moment_1.default().unix(),
            exp: moment_1.default().add(14, 'days').unix()
        };
        return jwt.sign(payload, 'secretsecretsecret');
    };
    UserService.prototype.createUser = function (res, firstname, lastname, email, password, domain) {
        return __awaiter(this, void 0, void 0, function () {
            var userExists, tenant, passwordHash, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        firstname = firstname.toLowerCase();
                        lastname = lastname.toLowerCase();
                        email = email.toLowerCase();
                        return [4 /*yield*/, this.userRepository.getUserByEmail(email)];
                    case 1:
                        userExists = _a.sent();
                        if (userExists) {
                            return [2 /*return*/, res.status(422).json({ 'errors': [{ 'msg': 'Account with that email address already exists.' }] })];
                        }
                        return [4 /*yield*/, this.tenantService.createTenant(domain)];
                    case 2:
                        tenant = _a.sent();
                        return [4 /*yield*/, this.companyRepository.createCompany('', '', '', '', '', '', '', '', '', '', '', tenant)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, bcrypt_1.default.hash(password, 10)];
                    case 4:
                        passwordHash = _a.sent();
                        return [4 /*yield*/, this.userRepository.createUser(res, firstname, lastname, email, passwordHash, uuid_1.v4(), tenant)];
                    case 5:
                        user = _a.sent();
                        console.log(user);
                        // Send email
                        emailer_1.Emailer.welcomeEmail(user.Email, user.FirstName + " " + user.LastName, user.EmailVerifyToken);
                        return [2 /*return*/, res.status(200).json({ 'msg': 'Registration success! An email has been sent to ' + email + '.  Check your email to complete the registration process.' })];
                }
            });
        });
    };
    UserService.prototype.createUserNoVerification = function (res, firstname, lastname, email, password, domain) {
        return __awaiter(this, void 0, void 0, function () {
            var userExists, tenant, passwordHash, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        email = email.toLowerCase();
                        return [4 /*yield*/, this.userRepository.getUserByEmail(email)];
                    case 1:
                        userExists = _a.sent();
                        if (userExists) {
                            return [2 /*return*/, res.status(422).json({ 'errors': [{ 'msg': 'Account with that email address already exists.' }] })];
                        }
                        return [4 /*yield*/, this.tenantService.createTenant(domain)];
                    case 2:
                        tenant = _a.sent();
                        return [4 /*yield*/, this.companyRepository.createCompany('', '', '', '', '', '', '', '', '', '', '', tenant)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, bcrypt_1.default.hash(password, 10)];
                    case 4:
                        passwordHash = _a.sent();
                        return [4 /*yield*/, this.userRepository.createUser(res, firstname, lastname, email, passwordHash, uuid_1.v4(), tenant)];
                    case 5:
                        user = _a.sent();
                        // Send email
                        //Emailer.welcomeEmail(user.Email, user.FirstName + " " + user.LastName, user.EmailVerifyToken);
                        console.log(user);
                        return [2 /*return*/, res.status(200).json({ 'msg': 'Registration success! An email has been sent to ' + email + '.  Check your email to complete the registration process.', 'token': this.generateToken(user), 'user': user })];
                }
            });
        });
    };
    UserService.prototype.createInviteUser = function (res, firstname, lastname, email, role, invitedFrom) {
        return __awaiter(this, void 0, void 0, function () {
            var userExists, userInviteSent, tenant, password, passwordHash, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        firstname = firstname.toLowerCase();
                        lastname = lastname.toLowerCase();
                        email = email.toLowerCase();
                        return [4 /*yield*/, this.userRepository.getUserByEmail(email)];
                    case 1:
                        userExists = _a.sent();
                        if (userExists) {
                            return [2 /*return*/, res.status(422).json({ 'errors': [{ 'msg': 'Account with that email address already exists.' }] })];
                        }
                        return [4 /*yield*/, this.userRepository.getUserByIdWithRelations(invitedFrom)];
                    case 2:
                        userInviteSent = _a.sent();
                        if (!userInviteSent) return [3 /*break*/, 5];
                        tenant = userInviteSent.Tenant;
                        password = generate_password_1.generate({ length: 10, numbers: true });
                        return [4 /*yield*/, bcrypt_1.default.hash(password, 10)];
                    case 3:
                        passwordHash = _a.sent();
                        return [4 /*yield*/, this.userRepository.createUser(res, firstname, lastname, email, passwordHash, uuid_1.v4(), tenant, role)];
                    case 4:
                        user = _a.sent();
                        console.log(user);
                        emailer_1.Emailer.inviteEmail(email, user.FirstName + " " + user.LastName, userInviteSent.FirstName + " " + userInviteSent.LastName, user.EmailVerifyToken, password);
                        return [2 /*return*/, res.status(200).json({ 'msg': 'Invite sent!' })];
                    case 5: return [2 /*return*/];
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
                            return [2 /*return*/, res.status(422).json({ 'errors': [{ 'msg': 'Email verification token is invalid or expired.' }] })];
                        }
                        verifiedUser.EmailVerified = true;
                        verifiedUser.EmailVerifyToken = "";
                        return [4 /*yield*/, this.userRepository.saveUser(verifiedUser)];
                    case 2:
                        _a.sent();
                        // Send Registration complete email?
                        return [2 /*return*/, res.status(200).json({ 'msg': 'Your email has been successfully verified.' })];
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
                            return [2 /*return*/, res.status(422).json({ 'errors': [{ 'msg': 'The email you’ve entered doesn’t match any account.' }] })];
                        }
                        console.log('User logged in:', user);
                        if (user.Active === false) {
                            return [2 /*return*/, res.status(422).json({ 'errors': [{ 'msg': 'The account is not active. Contact your administrator.' }] })];
                        }
                        return [4 /*yield*/, bcrypt_1.default.compare(password, user.PasswordHash)];
                    case 2:
                        passwordMatch = _a.sent();
                        if (!passwordMatch) {
                            return [2 /*return*/, res.status(422).json({ 'errors': [{ 'msg': 'The password you’ve entered is incorrect.' }] })];
                        }
                        else {
                            return [2 /*return*/, res.status(200).json({ token: this.generateToken(user), user: user })];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    UserService.prototype.recoverPassword = function (res, email) {
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
                            return [2 /*return*/, res.status(422).json({ 'errors': [{ 'msg': 'Account with the email address ' + email + ' email address does not exist.' }] })];
                        }
                        userExists.PasswordResetToken = uuid_1.v4();
                        userExists.PasswordResetExpires = moment_1.default().add(1, 'days').toDate();
                        return [4 /*yield*/, this.userRepository.forgotPassword(userExists)];
                    case 2:
                        user = _a.sent();
                        emailer_1.Emailer.forgotPasswordRequestEmail(user.Email, user.PasswordResetToken);
                        return [2 /*return*/, res.status(200).json({ 'msg': 'An email has been sent to ' + email + ' with further instruction.' })];
                }
            });
        });
    };
    UserService.prototype.resetPassword = function (res, token, password) {
        return __awaiter(this, void 0, void 0, function () {
            var user, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.log(token, password);
                        return [4 /*yield*/, this.userRepository.getUserByTokenAndExpiration(token)];
                    case 1:
                        user = _b.sent();
                        if (!user) {
                            return [2 /*return*/, res.status(422).json({ 'errors': [{ 'msg': 'Password reset token is invalid or expired.' }] })];
                        }
                        // NEED TO CLEAR PasswordRestExpirs date as well 
                        _a = user;
                        return [4 /*yield*/, bcrypt_1.default.hash(password, 10)];
                    case 2:
                        // NEED TO CLEAR PasswordRestExpirs date as well 
                        _a.PasswordHash = _b.sent();
                        user.PasswordResetToken = "";
                        return [4 /*yield*/, this.userRepository.saveUser(user)];
                    case 3:
                        _b.sent();
                        emailer_1.Emailer.passwordResetSuccessEmail(user.Email);
                        return [2 /*return*/, res.status(200).json({ 'msg': 'Your password has been saved successfully.' })];
                }
            });
        });
    };
    UserService.prototype.updatePassword = function (res, userId, password, confirmPassword) {
        return __awaiter(this, void 0, void 0, function () {
            var user, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.userRepository.getUserById(userId)];
                    case 1:
                        user = _b.sent();
                        if (!user) {
                            return [2 /*return*/, res.status(422).json({ 'errors': [{ 'msg': 'User Id is invalid.' }] })];
                        }
                        // NEED TO CLEAR PasswordRestExpirs date as well 
                        _a = user;
                        return [4 /*yield*/, bcrypt_1.default.hash(password, 10)];
                    case 2:
                        // NEED TO CLEAR PasswordRestExpirs date as well 
                        _a.PasswordHash = _b.sent();
                        return [4 /*yield*/, this.userRepository.saveUser(user)];
                    case 3:
                        _b.sent();
                        // Emailer.passwordResetSuccessEmail(user.Email)
                        return [2 /*return*/, res.status(200).json({ 'msg': 'Your password has been saved successfully.' })];
                }
            });
        });
    };
    UserService.prototype.getUsers = function (res) {
        return __awaiter(this, void 0, void 0, function () {
            var users;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userRepository.getUsers()];
                    case 1:
                        users = _a.sent();
                        return [2 /*return*/, res.status(200).json(users)];
                }
            });
        });
    };
    UserService.prototype.getUser = function (res, userId) {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userRepository.getUserById(userId)];
                    case 1:
                        user = _a.sent();
                        return [2 /*return*/, res.status(200).json(user)];
                }
            });
        });
    };
    UserService.prototype.getPlan = function (res, userId) {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userRepository.getUserByIdWithRelations(userId)];
                    case 1:
                        user = _a.sent();
                        console.log(user);
                        if (user)
                            return [2 /*return*/, res.status(200).json(user.Tenant.Plan)];
                        return [2 /*return*/];
                }
            });
        });
    };
    UserService.prototype.updateUser = function (res, id, firstName, lastName, role, active) {
        return __awaiter(this, void 0, void 0, function () {
            var user, updatedUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userRepository.getUserById(id)];
                    case 1:
                        user = _a.sent();
                        if (!user) {
                            return [2 /*return*/, res.status(422).json({ 'errors': [{ 'msg': 'User Id is invalid.' }] })];
                        }
                        user.FirstName = firstName;
                        user.LastName = lastName;
                        user.PhoneNumber = "";
                        user.Role = role;
                        user.Active = active;
                        return [4 /*yield*/, this.userRepository.updateUser(id, user)];
                    case 2:
                        updatedUser = _a.sent();
                        return [2 /*return*/, res.status(200).json(updatedUser)];
                }
            });
        });
    };
    UserService.prototype.upload = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var s3, fileName;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        s3 = new storage_1.Storage();
                        return [4 /*yield*/, s3.uploadSingle(req, res)];
                    case 1:
                        fileName = _a.sent();
                        return [2 /*return*/, res.status(200).json({ 'filename': fileName })];
                }
            });
        });
    };
    UserService.prototype.updateAvatar = function (res, id, avatar) {
        return __awaiter(this, void 0, void 0, function () {
            var user, updatedUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userRepository.getUserById(id)];
                    case 1:
                        user = _a.sent();
                        if (!user) {
                            return [2 /*return*/, res.status(422).json({ 'errors': [{ 'msg': 'User Id is invalid.' }] })];
                        }
                        user.Avatar = avatar;
                        return [4 /*yield*/, this.userRepository.updateUser(id, user)];
                    case 2:
                        updatedUser = _a.sent();
                        return [2 /*return*/, res.status(200).json(updatedUser)];
                }
            });
        });
    };
    UserService.prototype.createCustomer = function (res, id, viewModel) {
        return __awaiter(this, void 0, void 0, function () {
            var user, customer, newPlan, subscription, updatedUser, tenant;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userRepository.getUserByIdWithRelations(id)];
                    case 1:
                        user = _a.sent();
                        if (!user) {
                            return [2 /*return*/, res.status(422).json({ 'errors': [{ 'msg': 'User Id is invalid.' }] })];
                        }
                        return [4 /*yield*/, this.stripe.createCustomer(viewModel.token.id, user.Email)];
                    case 2:
                        customer = _a.sent();
                        user.StripeCustomerId = customer.id;
                        newPlan = viewModel.plan;
                        return [4 /*yield*/, this.stripe.planSubscribe(newPlan.StripeId, user.StripeCustomerId)];
                    case 3:
                        subscription = _a.sent();
                        user.StripeSubscriptionId = subscription.id;
                        return [4 /*yield*/, this.userRepository.saveUser(user)];
                    case 4:
                        updatedUser = _a.sent();
                        tenant = updatedUser.Tenant;
                        tenant.Plan = newPlan;
                        return [4 /*yield*/, this.tenantService.saveTenant(res, tenant)];
                    case 5:
                        _a.sent();
                        return [2 /*return*/, res.status(200).json({ 'msg': 'Your subscription successfully created.' })];
                }
            });
        });
    };
    UserService.prototype.updatePlan = function (res, id, viewModel) {
        return __awaiter(this, void 0, void 0, function () {
            var user, tenant;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userRepository.getUserByIdWithRelations(id)];
                    case 1:
                        user = _a.sent();
                        if (!user) {
                            return [2 /*return*/, res.status(422).json({ 'errors': [{ 'msg': 'User Id is invalid.' }] })];
                        }
                        return [4 /*yield*/, this.stripe.planChange(user.StripeSubscriptionId, viewModel.StripeId)];
                    case 2:
                        _a.sent();
                        tenant = user.Tenant;
                        tenant.Plan = viewModel;
                        return [4 /*yield*/, this.tenantService.saveTenant(res, tenant)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, res.status(200).json({ 'msg': 'Plan updated.' })];
                }
            });
        });
    };
    return UserService;
}());
exports.UserService = UserService;
