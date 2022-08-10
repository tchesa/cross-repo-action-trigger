"use strict";
exports.__esModule = true;
exports.Animal = void 0;
var Animal;
(function (Animal) {
    Animal["DOG"] = "dog";
    Animal["CAT"] = "cat";
})(Animal = exports.Animal || (exports.Animal = {}));
var PetOwner = /** @class */ (function () {
    function PetOwner() {
        var pets = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            pets[_i] = arguments[_i];
        }
        var _this = this;
        this.getPets = function () { return _this.pets; };
        this.adopt = function () {
            var pets = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                pets[_i] = arguments[_i];
            }
            _this.pets = _this.pets.concat(pets);
        };
        this.pets = pets;
    }
    return PetOwner;
}());
exports["default"] = PetOwner;
//# sourceMappingURL=index.js.map