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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var AWS = __importStar(require("aws-sdk"));
var multer_1 = __importDefault(require("multer"));
var multer_s3_1 = __importDefault(require("multer-s3"));
var crypto_1 = __importDefault(require("crypto"));
var util_1 = __importDefault(require("util"));
var Storage = /** @class */ (function () {
    function Storage() {
        this.bucket = process.env.AWS_BUCKET + '';
        console.log(process.env.AWS_SECRET_ACCESS_KEY);
        AWS.config.update({
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
        });
        this.s3 = new AWS.S3();
        this.upload = multer_1.default({
            storage: multer_s3_1.default({
                s3: this.s3,
                bucket: this.bucket,
                // Set public read permissions
                acl: 'public-read',
                // Auto detect contet type
                contentType: multer_s3_1.default.AUTO_CONTENT_TYPE,
                // Set key/ filename as original uploaded name
                key: function (req, file, cb) {
                    crypto_1.default.pseudoRandomBytes(16, function (err, raw) {
                        cb(null, raw.toString('hex') + Date.now() + '.' + file.originalname);
                    });
                }
            })
        });
    }
    Storage.prototype.deleteImage = function (key) {
        return __awaiter(this, void 0, void 0, function () {
            var e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.s3.deleteObject({ Bucket: this.bucket, Key: key })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, true];
                    case 2:
                        e_1 = _a.sent();
                        throw e_1;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Storage.prototype.uploadSingle = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var filename, upload, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        upload = util_1.default.promisify(this.upload.any());
                        return [4 /*yield*/, upload(req, res)];
                    case 1:
                        _a.sent();
                        filename = req.files[0].location;
                        console.log('req', req.files[0]);
                        return [3 /*break*/, 3];
                    case 2:
                        e_2 = _a.sent();
                        console.log(e_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/, filename];
                }
            });
        });
    };
    Storage.prototype.uploadMultiple = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var fileNames, upload, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fileNames = [];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        upload = util_1.default.promisify(this.upload.any());
                        return [4 /*yield*/, upload(req, res)];
                    case 2:
                        _a.sent();
                        req.files.forEach(function (file) {
                            var Url = file.location, Key = file.key;
                            fileNames.push({ Url: Url, Key: Key });
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        e_3 = _a.sent();
                        console.log(e_3);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/, fileNames];
                }
            });
        });
    };
    return Storage;
}());
exports.Storage = Storage;
