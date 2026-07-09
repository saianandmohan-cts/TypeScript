// Mixins

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


// let mixin = (SuperClass:any)=>{
//     return class extends SuperClass{
//         constructor(public marks:number){
//             super(marks)
//         }
//         artCraftPoint(){
//             this.marks+=10;
//             console.log(`artCraftPoint added : ${this.marks}`)
//         }
//     }
// }


// class School{
//     constructor(public marks:number){
//         this.marks=marks
//     }
//     displayMarks(){
//         console.log(this.marks)
//     }
// }


// class GovtSchool extends mixin(School){
//     // constructor(public marks:number){
//     //     super(marks)
//     // }
//     supwPoints(){
//         this.marks+=10;
//         console.log(`supwPoints added : ${this.marks}`)
//     }
// }

// let  s = new GovtSchool(10);
// s.supwPoints();
// s.artCraftPoint()




