"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User = /** @class */ (function () {
    function User(pin, balance) {
        this.pin = pin;
        this.balance = balance;
    }
    User.prototype.validatePin = function (inputPin) {
        return this.pin == inputPin;
    };
    User.prototype.getBalance = function () {
        return this.balance;
    };
    // withdrawing money
    User.prototype.withdraw = function (amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance - +amount;
            return true;
        }
        return false;
    };
    // depositing money
    User.prototype.deposit = function (amount) {
        if (amount > 0) {
            this.balance += amount;
        }
    };
    return User;
}());
exports.User = User;
