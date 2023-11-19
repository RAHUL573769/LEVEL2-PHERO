var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(name, species, sound) {
        this.name = name;
        this.species = species;
        this.sound = sound;
    }
    Animal.prototype.makeSound = function () {
        console.log("".concat(this.name, " makes ").concat(this.sound));
    };
    return Animal;
}());
var dog = new Animal("Rahul", "German", "Bark");
dog.makeSound();
var ParentPeople = /** @class */ (function () {
    function ParentPeople(bodyColor, gender) {
        this.bodyColor = bodyColor;
        this.gender = gender;
    }
    return ParentPeople;
}());
var Rahul = /** @class */ (function (_super) {
    __extends(Rahul, _super);
    function Rahul(name, bodyColor, gender) {
        var _this = _super.call(this, bodyColor, gender) || this;
        _this.name = name;
        return _this;
    }
    Rahul.prototype.fullName = function () {
        console.log("".concat(this.name, " is ").concat(this.gender));
    };
    return Rahul;
}(ParentPeople));
var person1 = new Rahul("Ra", "white", "nale");
console.log(person1.fullName());
