// interface CalculateFn{
//     (a: number, b:number): number
// }
// let add: CalculateFn = (a:number, b:number):number=>{
//     return a+b;
// }
// console.log(add(10,20))
// let substract: CalculateFn = (a:number, b:number): number=>{
//     return a-b;
// }
// console.log(substract(20,10))
// let product: CalculateFn = (a:number, b:number): number=>{
//     return a*b;
// }
// console.log(product(10,4))
// let divide: CalculateFn = (a:number, b:number): number=>{
//     return a/b;
// }
// console.log(divide(20,5))
// interface SumOfArray{
//      (arr : number[]):number
// }
// let num: SumOfArray = (arr:number[]):number=>{
//     let sum =0;
//     for(let val of arr){
//         sum+=val;
//     }
//     return sum;
// }
// console.log(num([1,2,3,4,5]))
// interface EvenSumOfArray{
//      (arr : number[], arr1: number[]):number[]
// }
// let func : EvenSumOfArray= (arr:number[],arr1:number[]):number[]=>{
//     let a =(arr.filter(e=>e%2==0))
//     let b=(arr1.filter(e=>e%2==0))
//     return [...a,...b];
// }
// console.log(func([1,2,3,4],[5,6,7,8]))
// interface UpperCase{
//     (a:string, b:string):string
// }
// let func : UpperCase = (a:string):string=>{
//     return a.toUpperCase()
// }
// console.log(func("cognizant"))
// interface ConcatString{
//     (a:string, b:string):string
// }
// let func: ConcatString=(a:string, b:string):string=>{
//     return a.concat(b)
// }
// console.log(func("cognizant"," technology"))
// interface ConcatString{
//     (a:string, b:string):string | null
// }
// let func: ConcatString=(a:string, b:string):string | null=>{
//     if(a.length>5 && b.length>5)
//         return a.concat(b)
//     return null;
// }
// console.log(func("cognizant"," technology"))
// class Employee{
//     constructor(public name: string,public salary: number){
//         this.name= name;
//         this.salary = salary
//     }
// }
// let employee: Employee[] = [
//     { name: "Alice", salary: 5000 }, 
//     { name: "Bob", salary: 7000 }, 
//     { name: "Charlie", salary: 7000 },
// ]
// interface HighestSalary{
//     (empAr:Employee[]):Employee[]|null
// }
// let func: HighestSalary = (empAr:Employee[])=>{
//     if(empAr.length == 0){
//         return null;
//     }
//     return empAr.reduce((m,n)=>m['salary']>n['salary'])
// }
// interface IStudent{
//     rollno:number,
//     name:string,
//     marks:number,
// } 
// class Student implements IStudent{
//     constructor(public rollno:number, public name:string, public marks:number){
//         this.rollno =rollno;
//         this.name=name;
//         this.marks=marks;
//     }
// }
// class HighSchoolStudent{
//     constructor(public rollno:number, public name:string, public marks:number){
//         this.rollno =rollno;
//         this.name=name;
//         this.marks=marks;
//     }
// }
// class Status{
//     constructor(public rollno:number, public result:string){
//         this.rollno=rollno;
//         this.result=result
//     }
// }
// let student: Student[] = [
//     { rollno:11, name: "Alice", marks: 50 }, 
//     { rollno:21, name: "Bob", marks: 70 }, 
//     { rollno:31, name: "Charlie", marks: 40 },
// ]
// interface MarklistFn{
//     (stAr:IStudent[]):Status[];
// }
// let func: MarklistFn=(stAr:IStudent[]):Status[]=>{
//     let status: Status[]=[]
//     for(let i=0;i<student.length;i++){
//         if(student[i].marks<50){
//             status.push(new Status(student[i].rollno,"failed"))
//         }else{
//             status.push(new Status(student[i].rollno,"Passed"))
//         }
//     }
//     return status;
// }   
// console.log(func(student))
// let SumOfArr:(a:number[])=>number=(a:number[]):number=>{
//     let sum=0;
//     for(let val of a){
//         sum+=val;
//     }
//     return sum
// }
// console.log(SumOfArr([1,2,3,4,5]))
// let SumOfEvenArr:(a:number[],b:number[])=>number=(a:number[],b:number[]):number=>{
//     let sum = a.filter(e=>e%2==0).reduce((m,n)=>m+n)
//     let sum1 = b.filter(e=>e%2==0).reduce((m,n)=>m+n)
//     return sum+sum1
// }
// console.log(SumOfEvenArr([1,2,3,4],[5,6,7,8]))
// interface AreaFn{
//     (value:number):number
// }
// let areaSquare:AreaFn=(value:number):number=>{
//     return value*value;
// }
// let areaCircle:(vlaue:number)=>number=(value:number):number=>{
//     return 3.14*value*value;
// }
// console.log(areaSquare(5))
// console.log(areaCircle(5))
// type Employee1={
//     id:number,
//     name:string,
// }
// type CTSEmployee = Employee1 | {  // we can use & also in place of |
//     salary:number;
// }
// let k : CTSEmployee={
//     id:100,
//     name:"abc",
//     salary:40000
// }
// console.log(k)
var Verticls;
(function (Verticls) {
    Verticls["hospitality"] = "H";
    Verticls["banking"] = "B";
    Verticls["FMCG"] = "F";
    Verticls["insurance"] = "I";
    Verticls["travel"] = "T";
})(Verticls || (Verticls = {}));
var Employee = /** @class */ (function () {
    function Employee(id, name, vertical) {
        this.id = id;
        this.name = name;
        this.vertical = vertical;
        this.id = id;
        this.name = name;
        this.vertical = vertical;
    }
    return Employee;
}());
var emp = new Employee(100, 'ram', Verticls.FMCG);
console.log(emp);
