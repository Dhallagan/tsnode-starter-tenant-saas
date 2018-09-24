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
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var stripe_1 = require("./stripe");
var entity_1 = require("../entity");
var Seeds = /** @class */ (function () {
    function Seeds() {
    }
    Seeds.seedUsers = function () {
        return __awaiter(this, void 0, void 0, function () {
            var userRepository, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userRepository = typeorm_1.getRepository(entity_1.User);
                        user = { Username: "test", Email: "test@test.com", EmailConfirmed: false, PhoneNumber: "5555555555", PhoneNumberConfirmed: false, TwoFactorEnabled: false };
                        return [4 /*yield*/, userRepository.save(user)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Seeds.seedPropertyTypes = function () {
        return __awaiter(this, void 0, void 0, function () {
            var propertyTypeRepository, propertyTypes, existPropertyTypes, _i, propertyTypes_1, type;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        propertyTypeRepository = typeorm_1.getRepository(entity_1.PropertyType);
                        propertyTypes = [
                            { Type: "Condo/Townhome" },
                            { Type: "Multi-Family" },
                            { Type: "Single-Fmaily" },
                            { Type: "Industrial" },
                            { Type: "Office" },
                            { Type: "Shopping Center" },
                            { Type: "Retail" },
                            { Type: "Storage" },
                            { Type: "Parking" }
                        ];
                        return [4 /*yield*/, propertyTypeRepository.find()];
                    case 1:
                        existPropertyTypes = _a.sent();
                        if (existPropertyTypes.length)
                            return [2 /*return*/];
                        _i = 0, propertyTypes_1 = propertyTypes;
                        _a.label = 2;
                    case 2:
                        if (!(_i < propertyTypes_1.length)) return [3 /*break*/, 5];
                        type = propertyTypes_1[_i];
                        return [4 /*yield*/, propertyTypeRepository.save(type)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 2];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Seeds.seedProduct = function () {
        return __awaiter(this, void 0, void 0, function () {
            var productRepository, products, product;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        productRepository = typeorm_1.getRepository(entity_1.Product);
                        return [4 /*yield*/, productRepository.find()];
                    case 1:
                        products = _a.sent();
                        if (products.length)
                            return [2 /*return*/, null];
                        return [4 /*yield*/, stripe_1.Stripe.createProduct()];
                    case 2:
                        product = _a.sent();
                        return [4 /*yield*/, productRepository.save({ StripeId: product.id })];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Seeds.seedPlans = function () {
        return __awaiter(this, void 0, void 0, function () {
            var planRepository, plans, product, existPlan, _i, plans_1, plan, _plan;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        planRepository = typeorm_1.getRepository(entity_1.Plan);
                        plans = [
                            {
                                Name: "Trial",
                                Amount: 0,
                                Interval: "",
                                Pricing: []
                            },
                            {
                                Name: "Basic",
                                Amount: 5,
                                Interval: "Every 1 month",
                                Pricing: ['1 users included', '2 GB of storage', 'Email support', 'Help center access']
                            },
                            {
                                Name: "Standard",
                                Amount: 15,
                                Interval: "Every 1 month",
                                Pricing: ['5 users included', '15 GB of storage', 'Priority email support', 'Help center access']
                            },
                            {
                                Name: "Premium",
                                Amount: 29,
                                Interval: "Every 1 month",
                                Pricing: ['30 users included', '30 GB of storage', 'Phone and email support', 'Help center access']
                            }
                        ];
                        return [4 /*yield*/, this.seedProduct()];
                    case 1:
                        product = _a.sent();
                        return [4 /*yield*/, planRepository.find()];
                    case 2:
                        existPlan = _a.sent();
                        if (!product || existPlan.length)
                            return [2 /*return*/];
                        _i = 0, plans_1 = plans;
                        _a.label = 3;
                    case 3:
                        if (!(_i < plans_1.length)) return [3 /*break*/, 8];
                        plan = plans_1[_i];
                        if (!(plan.Name !== 'Trial')) return [3 /*break*/, 5];
                        return [4 /*yield*/, stripe_1.Stripe.createPlan(product.StripeId, plan)];
                    case 4:
                        _plan = _a.sent();
                        plan['StripeId'] = _plan.id;
                        _a.label = 5;
                    case 5: return [4 /*yield*/, planRepository.save(plan)];
                    case 6:
                        _a.sent();
                        _a.label = 7;
                    case 7:
                        _i++;
                        return [3 /*break*/, 3];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    return Seeds;
}());
exports.Seeds = Seeds;
