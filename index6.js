//  npx tsc --init   we have created a tsconfig.json file to play with decorators in index6.ts
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
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
var _this = this;
// let student = {
//     rollno:100,
//     name:"abc",
//     marks:75
// }
// for(let s in student){
//     console.log(student[s])
// }
// @placeDeco({city:"Bangalore",state:"kar"})
// class Employee{
//     @nameDeco("abc")
//     name:string;
//     place:string;
//     salary:number;
//     constructor(salary:number){
//         console.log("constructor executed")
//         this.salary=salary;
//     }
//     @salaryDeco(2000)
//     sumSalary(){
//         this.salary-=10000
//         console.log(this.salary)
//     }
//     addSalary(){
//         this.salary+=1000;
//         console.log(this.salary);
//     }
// }
// function placeDeco(location:{city,state}){
//     return function<T extends {new(...args:any[]):{}}>
//     (target:T,context:ClassDecoratorContext<T>){
//         return class extends target{
//             constructor(...args:any[]){
//                 super(...args);
//                 if(location.city=="Bangalore" && location.state=='kar'){
//                     this['place']="Manyata tech park";
//                 }else{
//                     this['place']="place not found"
//                 }
//             }
//         }
//     }
// }
// function salaryDeco(value:number){
//     return function<T>(target:Function,context:ClassMethodDecoratorContext<T>){
//         return function(this:any,...args:any){ // this:any is the current object
//             this.salary+=value;
//             console.log(this)
//             target.apply(this)
//         }
//     }
// }
// function nameDeco(value:string){  // factory function
//     return function<T,S>(target:undefined,context:ClassFieldDecoratorContext<T,S>){ //decorators
//         return function(args:any){ // setting value
//             console.log("inside decorators");
//             console.log(args)  //  name:string;  if we provide any value then it will print the value  name:string="def" and if it is not it will print undefined;
//             console.log(context);
//             return value; 
//         }
//     }
// }
// let e = new Employee(50000);
// console.log(e);
// // e.addSalary()
// // e.sumSalary();
// class Employee{
//     constructor(public name:string){}
// }
// type A = new(name:string)=>{name}
// let b:A=Employee;
// console.log(typeof b)
// console.log(b)
// let c = new b("abc")
// console.log(c)
var School = function () {
    var _outerThis = _this;
    var _classDecorators = [scholarshipDeco({ sports: true, ncc: true })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _schoolName_decorators;
    var _schoolName_initializers = [];
    var _schoolName_extraInitializers = [];
    var _displayRes_decorators;
    var School = _classThis = /** @class */ (function () {
        function School_1(marks) {
            this.rollno = (__runInitializers(this, _instanceExtraInitializers), 100);
            this.name = "Satyam";
            this.schoolName = __runInitializers(this, _schoolName_initializers, void 0);
            __runInitializers(this, _schoolName_extraInitializers);
            this.marks = marks;
        }
        School_1.prototype.displayRes = function () {
            console.log("Passed with marks: ".concat(this.marks));
        };
        return School_1;
    }());
    __setFunctionName(_classThis, "School");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _schoolName_decorators = [schoolDeco("donbosco")];
        _displayRes_decorators = [resultDeco(_outerThis.marks)];
        __esDecorate(_classThis, null, _displayRes_decorators, { kind: "method", name: "displayRes", static: false, private: false, access: { has: function (obj) { return "displayRes" in obj; }, get: function (obj) { return obj.displayRes; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, null, _schoolName_decorators, { kind: "field", name: "schoolName", static: false, private: false, access: { has: function (obj) { return "schoolName" in obj; }, get: function (obj) { return obj.schoolName; }, set: function (obj, value) { obj.schoolName = value; } }, metadata: _metadata }, _schoolName_initializers, _schoolName_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        School = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return School = _classThis;
}();
function scholarshipDeco(loan) {
    return function (target, context) {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var _this = _super.apply(this, args) || this;
                if (loan.sports == true || loan.ncc == true) {
                    console.log("Eligible for scholarship: ".concat(_this["scholarships"] = 10000));
                }
                else {
                    console.log("ineligible for scholarship");
                }
                return _this;
            }
            return class_1;
        }(target));
    };
}
function schoolDeco(value) {
    return function (target, context) {
        return function (args) {
            return value;
        };
    };
}
function resultDeco(value) {
    return function (target, context) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (this.marks < 50) {
                console.log("You are ineligible. Extra marks added.");
                this.marks += 10;
            }
            else {
                console.log("You are eligible for loan.");
            }
            return target.apply(this, args);
        };
    };
}
var s = new School(34);
console.log(s);
