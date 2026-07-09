// Mixins
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
// NOTE:- typescript only supports single inheritance so to do multiple inheritance we use mixins 
// also a function can return a class
// let createClass=()=>{
//     return class{
//         id!:number;
//         displayId(){
//             console.log(this.id)
//         }
//     }
// }
// let kk = createClass();
// let d = new kk()
// d.id=100;
// d.displayId();
// let addMoney=(SuperClass:any)=>{
//     return class extends SuperClass{
//         constructor(public id:number,public name:string, public salary:number, public age:number){
//             super(id,name,salary,age)
//         }
//         addExtraMoney(){
//             this.salary+=1000;
//             console.log(this.salary+=1000)
//         }
//     }
// }
// let incentive=(SuperClass:any)=>{
//     return class extends SuperClass{
//         constructor(public id:number,public name:string, public salary:number, public age:number){
//             super(id,name,salary)
//             this.age=age;
//         }
//         addIncentive(){
//             this.salary+=1000;
//         }
//     }
// }
// class Employee{
//     constructor(public id:number,public name:string, public salary:number){}
//     addIncr(){
//         this.salary+=1000;
//         console.log(this.salary+1000)
//     }
// }
// class CTSEmployee extends addMoney(incentive(Employee)){
//     addBonus(){
//         this.salary+=1000;
//         console.log(this.salary+1000)
//     }
// }
// let e = new CTSEmployee(100,"abc",50000,25)
// e.addIncr();
// e.addBonus();
// e.addIncentive();
// e.addExtraMoney()
// console.log(e)
var mixin = function (SuperClass) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1(marks) {
            var _this = _super.call(this, marks) || this;
            _this.marks = marks;
            return _this;
        }
        class_1.prototype.artCraftPoint = function () {
            this.marks += 10;
            console.log("artCraftPoint added : ".concat(this.marks));
        };
        return class_1;
    }(SuperClass));
};
var School = /** @class */ (function () {
    function School(marks) {
        this.marks = marks;
        this.marks = marks;
    }
    School.prototype.displayMarks = function () {
        console.log(this.marks);
    };
    return School;
}());
var GovtSchool = /** @class */ (function (_super) {
    __extends(GovtSchool, _super);
    function GovtSchool() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // constructor(public marks:number){
    //     super(marks)
    // }
    GovtSchool.prototype.supwPoints = function () {
        this.marks += 10;
        console.log("supwPoints added : ".concat(this.marks));
    };
    return GovtSchool;
}(mixin(School)));
var s = new GovtSchool(10);
s.supwPoints();
s.artCraftPoint();
