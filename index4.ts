// abstract class Bank{

//     balance:number=0;

//     withdraw(debit:number){
//         this.balance -= debit
//     }

//     deposit(credit:number){
//         this.balance += credit
//     }

//     abstract clacInterest():void;
// }


// class Icici extends Bank{
//     clacInterest(): void {
//         console.log(`Your current balance after adding 5% of interest is ${this.balance+this.balance*0.05}`)
//     }
// }

// let i = new Icici();
// i.deposit(5000);
// i.clacInterest()


// abstract class PassportHeadOffice{
//     abstract verify():void;

//     issuePassport(){
//         console.log(`Passport issued`)
//     }
// }

// class BangalorePassportOffice extends PassportHeadOffice{
//     override verify(): void {
//         console.log(`Verification is done by using driving liscence`)
//     }
// }


// class ChennaiPassportOffice extends PassportHeadOffice{
//     override verify(): void {
//         console.log(`Verification is done by using aadhar card`)
//     }
// }

// let b = new BangalorePassportOffice()
// b.verify();
// b.issuePassport();

// let c =new ChennaiPassportOffice()
// c.verify()
// c.issuePassport()


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

// let e1 = new Employee2<number,string>();
// console.log(e.clacSalary<number,number>(10,20))


// function test<T>(m:T,n:T){
//     if(typeof m === "string" && typeof n=== "string"){
//         return m.concat(n);
//     }else if(typeof m === "number" && typeof n=== "number"){
//         return m+n;
//     }
// }


// console.log(test<number>(5,3))
// console.log(test<string>("CTS"," Employee"))



// interface Calculate<T>{
//     (m:T,n:T):T;
// }

// interface GenricArray<T>{
//     (value:T[]):number
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

// let empAr:GenricArray<Employe>=(value:Employe[]):number=>{
//     let sum =0;
//    value.forEach(val=>{
//         sum+=val.salary
//    })
//    return sum;
// }

// let stAr:GenricArray<Student1>=(value:Student1[]):number=>{
//     let sum =0;
//    value.forEach(val=>{
//         sum+=val.marks
//    })
//    return sum;
// }

// console.log(empAr(empArray))
// console.log(stAr(stuArr))


// interface commonData<T>{
//     (value:T[], value2:T[]):T[];
// }


// class Employees1{
//     constructor(public id:number, public name: string, public salary:number){}
// }

// // class Students{
// //     constructor(public rollno:number, public name:string, public marks:number){}
// // }

// let empArrays = [
// new Employees1(101,"Ram",10000),
// new Employees1(102,"Sam",20000),
// new Employees1(103,"Dam",30000)
// ]

// let empArrays2 = [
// new Employees1(101,"Ram",10000),
// new Employees1(102,"mno",20000),
// new Employees1(103,"pqr",30000)
// ]

// // let studentArrays=[
// //     new Student1(11,"Jhon",54),
// //     new Student1(21,"Doe",67),
// //     new Student1(31,"Mike",75)
// // ]


// // let studentArrays2=[
// //     new Student1(11,"Jhon",54),
// //     new Student1(21,"dcv",67),
// //     new Student1(31,"nbv",75)
// // ]

// let empfunc:commonData<Employees1>=(value:Employees1[],value2:Employees1[]):Employees1[]=>{
    
//     // let k = [...value,...value2]
//     // return 

//     return value.filter(e => 
//         value2.some(e1 => e1.id === e.id && e1.name === e.name && e1.salary === e.salary)
//     );

// }


// console.log(empfunc(empArrays,empArrays2))