// class Employee{
//     id:number;
//     name:string;
//     salary:number;
//     constructor(id:number,name:string,salary:number){
//         this.id=id;
//         this.name=name;
//         this.salary=salary;
//     }
// }
// let test10 = (empAr:Employee[]):Employee[] =>{
//     // let ans:Employee[] =[];
//     // for(let i=0;i<empAr.length;i++){
//     //    let obj = new Employee(empAr[i].id, empAr[i].name.toUpperCase(), empAr[i].salary +10000 );
//     //    ans.push(obj);
//     // }
//     // return ans;
//     // return empAr.map(e=>{
//     //     e.name = e.name.toUpperCase();
//     //     e.salary = e.salary+10000;
//     //     return e;
//     // });
//     return empAr.filter(e=>{
//         if(e.salary <50000) {
//             return e;
//         }
//         }).map(e=>{
//             e.name = e.name.toUpperCase();
//             e.salary = e.salary+10000;
//             return e;
//         })
// }
// let test10ans:Employee[] = test10([new Employee(1,"Sahil",80000),new Employee(2,"Sujal",30000),new Employee(3,"Sai",35000),]);
// //console.log(test10ans);
var Student = /** @class */ (function () {
    function Student(rollNo, name, marks) {
        this.rollNo = rollNo;
        this.name = name;
        this.marks = marks;
    }
    return Student;
}());
var test11 = function (stuArr) {
    if (stuArr.length == 0)
        return "no student available";
    return stuArr.filter(function (e) { return e.marks > 50; }).map(function (e) {
        e.name = e.name.charAt(0).toUpperCase() + e.name.substring(1);
        return e;
    });
};
var ans11 = test11([new Student(101, "sfwfe", 214)]);
console.log(ans11);
console.log("Hello Buddy...");
// //FEATURES OF TYPESCRIPT
// //static type checking (give the thpe of data)
// //type infering if type is not given it will automatically get assgined the type , let a = SA , then a could not assgined other type than string
// //type aliasing
// //access specifier
// // optional
// // readonly
// // interface
// //functional interface**** XXX
// //type***XXX
// //tuple (kind of an array)
// //decorator ***XXX
// //mixins
// //
// let a:number=10;
// let b:string="Sahil";
// // b=10; b cant take 10 value #type infering , coz i has type of string declared
// let c:boolean=true;
// let d:Function =() =>{
//     let mn=100;
//     console.log("From function D")
// }
// let e:{id:number,name:string,salary:number} = {id:10,name:"sahil",salary:111}
// let f:number[]=[1,2,3];
// //it could take any value
// let g:any=10;
// g="sahil";
// let h:string|number ="sahil";
// h=10;
// let i:[number,string,boolean] =[10,"Sahil",true];
// //TYPE ALIASING
// type j=number|string;
// let k:j=10;
// k="type aliasing";
// //can't work with test(a,b)
// //:void defines it return type.
// function test(a:number,b:number):void{
//     console.log(a+b);
// }
// function test2(a:number|string,b:number|string):any{
//     //console.log(a+b); this gives error + dont appply to type string
//     if(typeof(a) == 'number' && typeof(b) =='number'){
//         return a+b;
//     }
//     else if(typeof(a) == 'string' && typeof(b) =='string'){
//          return (a.concat(b));
//     }
//     return "Invalid"
// }
// // console.log(test2(2,"sa"))
// function test3(a:number):never{
//    throw new Error("Invalid line 73");
//     // else {
//     //     console.log("All ok")
//     // }
// }
// // try{
// //     test3(1)
// // }
// // catch (e) {
// //     console.log(e);
// // }
// function test4(arr:number[]):number[]{
//     let ans:number[] = [];
//     arr.forEach(e=>{
//         if(e%2==0) ans.push(e);
//     })
//     //console.log(ans)
//     return ans;
// }
// //console.log(test4([1,2,3,4,5]))
// function test5(arr:string[]):string[]{
//     let ans:string[] =[];
//     arr.forEach(e=> {
//         if(e.length > 5) ans.push(e);
//     })
//     return ans;
// }
// //console.log(test5(["sahilll","luckyyy","buddyyy","sai"]));
// let test6=(arr:string[]):string[] =>{
//     return [];
// }
// let test7 =(n:any[]):any[] => {
//     let ans:any[] =[];
//     if(typeof n[0] == 'number'){
//         n.forEach(e=>{
//             if(e%2==0) ans.push(e);
//         })
//     }
//     else if (typeof n[0] == 'string'){
//         n.forEach(e=>{
//             if(e.length>4) ans.push(e);
//         })
//     }
//     else{
//         return n;
//     }
//     return ans;
// }
// let arr7:any[]=[1,2,3,"sahdh","hsfbsbfhs"];
// //console.log(test7(arr7));
// let test8 = (emp:{id:number,name:string,salary:number}): {id:number,name:string,salary:number} =>{
//     let newSalary:number=0;
//     if(emp.salary > 50000){
//         newSalary = emp.salary*1.25;
//     }
//     else if(emp.salary <=50000 && emp.salary >30000){
//         newSalary = emp.salary*1.15;
//     }
//     else {
//         newSalary = emp.salary*1.05;
//     }
//     return {id:emp.id,name:emp.name,salary:newSalary}
// }
// let emp:object = {
//     id:23,
//     name:"sahil",
//     salary:45000,
// }
// console.log(test8({id:23,name:"sahil",salary:45000}));
