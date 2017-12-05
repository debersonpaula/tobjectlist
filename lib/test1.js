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
exports.__esModule = true;
var DebugMode = true;
function DebugLog(msg, color) {
    color = color || "36";
    if (DebugMode) {
        console.log("\x1b[" + color + "m", msg, "\x1b[0m");
    }
}
var main_1 = require("./main");
var TObj1 = /** @class */ (function (_super) {
    __extends(TObj1, _super);
    function TObj1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TObj1.prototype.Create = function (fn) {
        DebugLog('TObj1/Create', '35');
        _super.prototype.Create.call(this, fn);
    };
    return TObj1;
}(main_1.TObject));
var TObj2 = /** @class */ (function (_super) {
    __extends(TObj2, _super);
    function TObj2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TObj2.prototype.Create = function (fn) {
        var _this = this;
        DebugLog('TObj2/Create', '35');
        //simulated async event
        setTimeout(function () {
            _super.prototype.Create.call(_this, fn);
        }, 1500);
    };
    return TObj2;
}(main_1.TObject));
var TObj3 = /** @class */ (function (_super) {
    __extends(TObj3, _super);
    function TObj3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TObj3.prototype.Create = function (fn) {
        var _this = this;
        DebugLog('TObj3/Create', '35');
        //simulated async event
        setTimeout(function () {
            _super.prototype.Create.call(_this, fn);
        }, 700);
    };
    return TObj3;
}(main_1.TObject));
var TObj4 = /** @class */ (function (_super) {
    __extends(TObj4, _super);
    function TObj4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TObj4.prototype.Create = function (fn) {
        var _this = this;
        DebugLog('TObj4/Create', '35');
        //simulated async event
        setTimeout(function () {
            _super.prototype.Create.call(_this, fn);
        }, 3000);
    };
    return TObj4;
}(main_1.TObject));
/*---------------------------------------*/
DebugLog('--- create objects ------------');
var list = new main_1.TObjectList;
var obj1 = new TObj1;
var obj2 = new TObj2;
var obj3 = new TObj3;
var obj4 = new TObj4;
/*---------------------------------------*/
DebugLog('--- add objs to list ----------');
list.AddObject(obj1);
list.AddObject(obj2);
list.AddObject(obj3);
list.AddObject(obj4);
/*---------------------------------------*/
DebugLog('--- create all ----------------');
list.Create(function () {
    DebugLog('Creation Finalized', '32');
    DebugLog('\nStarting Destroy\n');
    list.Destroy(function () {
        DebugLog('Destruction Finalized', '32');
    });
});
