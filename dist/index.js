"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
var SteinhartHart = /** @class */ (function () {
    function SteinhartHart(resistances, temperaturesK) {
        this.resistances = __spreadArray([], resistances);
        this.temperaturesK = __spreadArray([], temperaturesK);
        this.coefficients = this.calculateCoefficients();
    }
    SteinhartHart.prototype.getCoefficients = function () {
        return this.coefficients;
    };
    SteinhartHart.prototype.getKTemperatureAtResistance = function (resistance) {
        var _a = this.coefficients, a = _a.a, b = _a.b, c = _a.c;
        return Number((1 / (a + (b * Math.log(resistance)) + (c * (Math.pow(Math.log(resistance), 3))))).toFixed(3));
    };
    SteinhartHart.prototype.calculateCoefficients = function () {
        var _a = this.resistances, rA = _a[0], rB = _a[1], rC = _a[2];
        var _b = this.temperaturesK, tA = _b[0], tB = _b[1], tC = _b[2];
        var l1 = Math.log(rA);
        var l2 = Math.log(rB);
        var l3 = Math.log(rC);
        var y1 = 1 / tA;
        var y2 = 1 / tB;
        var y3 = 1 / tC;
        var u2 = (y2 - y1) / (l2 - l1);
        var u3 = (y3 - y1) / (l3 - l1);
        var c = ((u3 - u2) / (l3 - l2)) * Math.pow(l1 + l2 + l3, -1);
        var b = u2 - c * (Math.pow(l1, 2) + l1 * l2 + Math.pow(l2, 2));
        var a = y1 - (b + Math.pow(l1, 2) * c) * l1;
        return { a: a, b: b, c: c };
    };
    return SteinhartHart;
}());
exports.default = SteinhartHart;
