"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Tenant_1 = require("./Tenant");
var User = /** @class */ (function () {
    function User() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], User.prototype, "Id", void 0);
    __decorate([
        typeorm_1.Column({ nullable: true }),
        __metadata("design:type", String)
    ], User.prototype, "FirstName", void 0);
    __decorate([
        typeorm_1.Column({ nullable: true }),
        __metadata("design:type", String)
    ], User.prototype, "LastName", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], User.prototype, "Email", void 0);
    __decorate([
        typeorm_1.Column({ default: false }),
        __metadata("design:type", Boolean)
    ], User.prototype, "EmailVerified", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], User.prototype, "PasswordHash", void 0);
    __decorate([
        typeorm_1.Column({ nullable: true }),
        __metadata("design:type", String)
    ], User.prototype, "PhoneNumber", void 0);
    __decorate([
        typeorm_1.Column({ default: false, nullable: true }),
        __metadata("design:type", Boolean)
    ], User.prototype, "PhoneNumberVerified", void 0);
    __decorate([
        typeorm_1.Column({ default: false }),
        __metadata("design:type", Boolean)
    ], User.prototype, "TwoFactorEnabled", void 0);
    __decorate([
        typeorm_1.Column({ default: null, nullable: true }),
        __metadata("design:type", String)
    ], User.prototype, "PasswordResetToken", void 0);
    __decorate([
        typeorm_1.Column({ default: null, nullable: true }),
        __metadata("design:type", Date)
    ], User.prototype, "PasswordResetExpires", void 0);
    __decorate([
        typeorm_1.Column({ default: null, nullable: true }),
        __metadata("design:type", String)
    ], User.prototype, "EmailVerifyToken", void 0);
    __decorate([
        typeorm_1.Column({ default: true, nullable: false }),
        __metadata("design:type", Boolean)
    ], User.prototype, "Active", void 0);
    __decorate([
        typeorm_1.Column({ default: null, nullable: true }),
        __metadata("design:type", String)
    ], User.prototype, "Avatar", void 0);
    __decorate([
        typeorm_1.Column({ default: 'User', nullable: false }),
        __metadata("design:type", String)
    ], User.prototype, "Role", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], User.prototype, "DateCreated", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Tenant_1.Tenant; }, function (tenant) { return tenant.Users; }),
        __metadata("design:type", Tenant_1.Tenant)
    ], User.prototype, "Tenant", void 0);
    User = __decorate([
        typeorm_1.Entity("user")
    ], User);
    return User;
}());
exports.User = User;
