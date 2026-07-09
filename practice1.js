// class Employee{
//   id:number;
//   name:string;
//   salary:number
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
//   constructor(id:number,name:string,salary:number){
//     this.id = id;
//     this.name = name;
//     this.salary = salary;
//   }
// }
// let func = (empAr:Employee[])=>{
//     let res:Employee[]=[]
//     for(let i=0;i<empAr.length;i++){
//         let obj = new Employee(empAr[i].id,empAr[i].name,empAr[i].salary)
//         res.push(obj);
//     }
//     return res;
// }
// console.log(func([new Employee(101,"abc",80800), new Employee(102,"def",232432)]))
// class Student{
//   constructor(public roll:number, public name:string, public marks:number){}
// }
// let func = (stuAr:Student[]):Student[]|string => {
//   let res:Student[]=[]
//   for(let i =0;i<stuAr.length;i++){
//     let obj = new Student(stuAr[i].roll,stuAr[i].name,stuAr[i].marks)
//     res.push(obj)
// }
//     return res
// }
// console.log(func([new Student(10,'ssfaf',123)]))
//  class bank{
//   constructor(public c_name:string, private balance:number){}
//   get _balance(){
//     return this.balance
//   }
//   set _balance(n:number){
//     this._balance=n
//   }
// }
//  class icic extends bank{
//   display(){
//     console.log()
//   }
//  }
//  let o = new bank('lknf',2322)
// console.log(o._balance)
// class Insurance{
//   constructor(public policyNumber:number, public policyName, private sumInsured:number){}
//   set _sumInsured(n:number){
//     this.sumInsured=n;
//   }
//   get _sumInsured(){
//     return this.sumInsured
//   }
// }
// class LifeInsurance extends Insurance{
//   constructor(policyNumber:number, policyName:string, sumInsured:number, private policyType: 'life' | 'term',){
//         super(policyNumber,policyName,sumInsured)
//     }
//     display(){
//         console.log(`number: ${this.policyNumber}, name: ${this.policyName}, sum: ${this._sumInsured}, policy type: ${this.policyType}`)
//     }
// }
// let o = new LifeInsurance(2142434,'sdgd',30000,'life')
// interface Human{
//   age:number,
//   gender:string
//   speak():void
// }
// interface Employee extends Human{
//   id:number,
//   name:string,
//   salary:number
// }
// interface Student extends Human{
//   roll:number,
//   name:string,
//   marks:number
// }
// class Sai implements Employee{
//    id=23
//    name='sai'
//    age=34
//    salary=33243
//    gender='male'
//   speak(): void {
//     console.log("this is me")
//   }
// }
// let s1 = new Sai()
// console.log(s1)
// interface sumofArr{
//   (arr:number[]):number
// }
// let test:sumofArr = (arr:number[])=>{
//   let sum=0
//   for(let val of arr){
//     sum+=val;
//   }
//   return sum
// }
// console.log(test([3,4,5,676,67]))
// class Student{
//   constructor(public roll:number, public name:string, public marks:number){}
// }
// class Status{
//     constructor(public roll:number, public result:string){}
// }
// let student: Student[] = [
//     { roll:11, name: "Alice", marks: 50 }, 
//     { roll:21, name: "Bob", marks: 70 }, 
//     { roll:31, name: "Charlie", marks: 40 },
// ]
// interface MarklistFn{
//   (stuAr:Student[]):Status[]
// }
// let func:MarklistFn = (stuAr:Student[]):Status[]=>{
//   let res:Status[]=[]
//   for(let i =0;i<stuAr.length;i++){
//     if(stuAr[i].marks<50){
//       res.push(new Status(stuAr[i].roll,"failed"))
//     }else{
//       res.push(new Status(stuAr[i].roll,"passed"))
//     }
//   }
//   return res;
// }
// func(student)
// let SumOfArr:(a:number[])=>number=(a:number[])=>{
//     let sum=0;
//     for(let val of a){
//         sum+=val;
//     }
//     return sum
// }
// console.log(SumOfArr([1,2,3,4,5]))
// enum Directrion{
//   North,
//   South,
//   East,
//   West
// }
// type Employee={
//   name:string,
//   salary:number
// }
// type CTSEmployee= Employee & {
//   id:string|number
//   direction:Directrion
// }
// let emp:CTSEmployee={
//   name:"abc",
//   salary:435646,
//   id:"CTS2435",
//   direction:Directrion.South
// }
// console.log(emp)
// abstract class Bank{
//   balance:number=10000;
//   deposit(credit:number){
//     this.balance+=credit
//   }
//   withdraw(debit:number){
//     this.balance-=debit
//   }
//   abstract calcInterest():void
// }
// class Hdfc extends Bank{
//   override calcInterest() {
//     console.log("your interest amount is : ",this.balance*0.05)
//   }
// }
// let e = new Hdfc()
// e.deposit(40000)
// console.log(e)
// e.withdraw(3400)
// console.log(e)
// e.calcInterest()
// class Employe<T,T1>{
//     id!:T;
//     name!:T1;
//     salary:number = 0;
//     clacSalary<M,N>(value:M, value1:N):M{
//         if(typeof value == "number" && typeof value1 =="number"){
//             this.salary+=value+value1;
//         }
//         return this.salary as M;
//     }
// }
// let e1 = new Employe<number,string>();
// console.log(e1.clacSalary<number,number>(10,20))
// interface Calculate<T>{
//   (m:T,n:T):T
// }
// interface GenericArray<T>{
//   (empAr:T[]):number
// }
// class Employe{
//     constructor(public id:number, public name: string, public salary:number){}
// }
// class Student1{
//     constructor(public rollno:number, public name:string, public marks:number){}
// }
// let empArray = [
// new Employe(101,"Ram",10000),
// new Employe(102,"Sam",20000),
// new Employe(103,"Dam",30000)
// ]
// let stuArr=[
//     new Student1(11,"Jhon",54),
//     new Student1(21,"Doe",67),
//     new Student1(31,"Mike",75)
// ]
// let func : GenericArray<Student1>=(value:Student1[]):number=>{
//   let sum =0;
//   stuArr.forEach(e=>sum+=e.marks)
//   return sum;
// }
// interface CommonData<M>{
//   (value1:M[],value2:M[]):M[]
// }
// class Employees1{
//     constructor(public id:number, public name: string, public salary:number){}
// }
// let empAr1 = [
// new Employees1(101,"Ram",10000),
// new Employees1(102,"Sam",20000),
// new Employees1(103,"Dam",30000)
// ]
// let empAr2 = [
// new Employees1(101,"Ram",10000),
// new Employees1(102,"mno",20000),
// new Employees1(103,"pqr",30000)
// ]
// let func :CommonData<Employees1>=(value1:Employees1[],value2:Employees1[]):Employees1[]=>{
//   return value1.filter(e=>
//      value2.some(e=>e1 => e1.id === e.id && e1.name === e.name && e1.salary === e.salary))
// }
// console.log(func(empAr1,empAr2))
// type Employee<T>={
//     id:number,
//     name:T
// }
// type ep = Employee<string> & {
//     salary:number
// }
// let e:ep={
// id:24,
// name:"dsg",
// salary:25334
// }
// console.log(e)
// let createClass=()=>{
//   return class Abc{
//     constructor(public id:number, public name:string){}
//   }
// }
// let k = createClass();
// let j = new k(213,'sdff')
// console.log(j)
var addMoney = function (SuperClass) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1(id, name, salary, age) {
            var _this = _super.call(this, id, name, salary) || this;
            _this.id = id;
            _this.name = name;
            _this.salary = salary;
            _this.age = age;
            return _this;
        }
        return class_1;
    }(SuperClass));
};
var Employee = /** @class */ (function () {
    function Employee(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    return Employee;
}());
var Cts = /** @class */ (function (_super) {
    __extends(Cts, _super);
    function Cts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Cts;
}(addMoney(Employee)));
var e = new Cts(23, 'sdf', 1221, 22);
console.log(e);
