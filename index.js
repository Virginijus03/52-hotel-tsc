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
var Hotel = (function () {
    function Hotel(name, address, stars) {
        this.rooms = [];
        this.name = name;
        this.address = address;
        this.stars = stars;
    }
    Hotel.prototype.addRoom = function (room) {
        this.rooms.push(room);
    };
    Hotel.prototype.printRooms = function (minComfort) {
        for (var _i = 0, _a = this.rooms; _i < _a.length; _i++) {
            var room = _a[_i];
            if (room.comfort() > minComfort || minComfort === undefined) {
                room.printData();
            }
        }
    };
    Hotel.prototype.printData = function (onlyComfort) {
        console.log(this.name);
        console.log(this.address);
        console.log(this.stars);
        console.log('========');
        if (onlyComfort) {
            this.printRooms(15);
        }
        else {
            this.printRooms();
        }
    };
    return Hotel;
}());
var Room = (function () {
    function Room(size, capacity) {
        this.size = size;
        this.capacity = capacity;
    }
    Room.prototype.comfort = function () {
        var erdve = this.size / this.capacity;
        return erdve;
    };
    Room.prototype.printData = function () {
        console.log("Dydis:" + this.size);
        console.log("Kiekis:" + this.capacity);
        console.log("Komforto lygis:" + this.comfort());
        console.log('-----');
    };
    return Room;
}());
var Spa = (function (_super) {
    __extends(Spa, _super);
    function Spa(size, capacity, poolSize, poolTemerature) {
        var _this = _super.call(this, size, capacity) || this;
        _this.poolSize = poolSize;
        _this.poolTemperature = poolTemerature;
        return _this;
    }
    Spa.prototype.comfort = function () {
        var erdveComfort = (this.size - this.poolSize) / this.capacity;
        return erdveComfort;
    };
    Spa.prototype.printData = function () {
        _super.prototype.printData.call(this);
        console.log("Baseino dydis: " + this.poolSize);
        console.log("Vandens siluma: " + this.poolTemperature);
    };
    return Spa;
}(Room));
var room101 = new Room(50, 2);
var room102 = new Room(45, 4);
var room201 = new Spa(120, 2, 15, 30);
var hotel = new Hotel('Nuostabusis', 'Skraiduoliug.g-15', 8);
hotel.addRoom(room101);
hotel.addRoom(room102);
hotel.addRoom(room201);
hotel.printData(true);
