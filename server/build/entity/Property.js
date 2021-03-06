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
var TenantScope_1 = require("./TenantScope");
var PropertyImage_1 = require("./PropertyImage");
var PropertyFeatures_1 = require("./PropertyFeatures");
var Lease_1 = require("./Lease");
var Property = /** @class */ (function (_super) {
    __extends(Property, _super);
    function Property() {
        return _super !== null && _super.apply(this, arguments) || this;
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
        typeorm_1.OneToMany(function (type) { return Unit_1.Unit; }, function (unit) { return unit.Property; }),
        typeorm_1.JoinColumn({ name: "UnitId" }),
        __metadata("design:type", Array)
    ], Property.prototype, "Units", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Property.prototype, "Type", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return PropertyImage_1.PropertyImage; }, function (propertyImage) { return propertyImage.Property; }),
        __metadata("design:type", Array)
    ], Property.prototype, "PropertyImages", void 0);
    __decorate([
        typeorm_1.ManyToMany(function (type) { return PropertyFeatures_1.PropertyFeatures; }, function (propertyFeatures) { return propertyFeatures.Property; }),
        typeorm_1.JoinTable({ name: "property_property_features" }),
        __metadata("design:type", Array)
    ], Property.prototype, "PropertyFeatures", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return Lease_1.Lease; }, function (lease) { return lease.Property; }, {
            nullable: true
        }),
        __metadata("design:type", Lease_1.Lease)
    ], Property.prototype, "Lease", void 0);
    Property = __decorate([
        typeorm_1.Entity()
    ], Property);
    return Property;
}(TenantScope_1.TenantScope));
exports.Property = Property;
