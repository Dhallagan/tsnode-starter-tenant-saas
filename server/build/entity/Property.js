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
var Unit_1 = require("./Unit");
var Property = /** @class */ (function () {
    function Property() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Property.prototype, "Id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Property.prototype, "Street", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Property.prototype, "ApartmentSuite", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Property.prototype, "City", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Property.prototype, "State", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Property.prototype, "Zipcode", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return Unit_1.Unit; }, function (unit) { return unit.Property; }, {
            eager: true,
            cascade: true
        }),
        typeorm_1.JoinColumn({ name: "UnitId" }),
        __metadata("design:type", Array)
    ], Property.prototype, "Units", void 0);
    Property = __decorate([
        typeorm_1.Entity()
    ], Property);
    return Property;
}());
exports.Property = Property;
