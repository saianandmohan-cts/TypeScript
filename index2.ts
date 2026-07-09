// class Employee{
//     public id:number;
//     public name: string;
//     public salary:number;
//     private age!:number;
//     protected  desg!:string;

//  //   let mm =2000; we can do this here because these are instance variable and we can't use local variable here

//     constructor(id:number,name:string,salary:number,age:number,desg:string){
//         this.id = id;
//         this.name = name;
//         this.salary = salary;
//         this.age = age;
//         this. desg = desg;
//     }

//     set _age(a:number){
//         this.age = a;
//     }

//     get _age(){
//         return this.age;
//     }

//     set _desg(d:string){
//         this.desg = d
//     }

//     get _desg(){
//         return this.desg;
//     }

//     displayAge(){
//         let k = 100; // we can use local variable here
//         console.log(`age: ${this.age}`)
//     }
// }



// class Employee{

//     constructor(public id:number, public name:string, public salary:number, private age:number,protected desg:string){
//         this.id = id;
//         this.name = name;
//         this.salary = salary;
//         this.age = age;
//         this. desg = desg;
//     }

//     set _age(a:number){
//         this.age = a;
//     }

//     get _age(){
//         return this.age;
//     }

//     set _desg(d:string){
//         this.desg = d
//     }

//     get _desg(){
//         return this.desg;
//     }

//     displayAge(){
//         let k = 100; // we can use local variable here
//         console.log(`age: ${this.age}`)
//     }
// }



// class CtsEmployee extends Employee{

//     public incentive: number;

//     constructor(id:number,name:string,salary:number,age:number,desg:string,incentive:number){
//         super(id,name,salary,age,desg);
//         this.incentive = incentive;
//     }

    
//     display(){
//         console.log(this.id);
//         console.log(this.name);
//         console.log(this.salary);
//         // console.log(this.age) // private 
//         console.log(this.desg);
//         console.log(this.incentive)
//     }
// }





// let e = new Employee(100,"abc",50000,20,"prg")

// e.id=200;
// e.name="def";
// e.salary=70000
// e._age = 30

// console.log(e)
// e.displayAge()



// let c = new CtsEmployee(100,"abc",80000,20,"prg",10000)
// c._age = 30;
// c._desg = "PAT"

// console.log(c)


// class Insurance{

//     constructor(public policyNumber:number, public policyName:string, private sumInsured:number){
//         this.policyNumber = policyNumber;
//         this.policyName = policyName;
//         this.sumInsured = sumInsured;
//     }

//     set _sumInsured(s:number){
//         this.sumInsured = s;
//     }

//     get _sumInsured(){
//         return this.sumInsured;
//     }
// }

// class LifeInsurance extends Insurance{
//     constructor(policyNumber:number, policyName:string, sumInsured:number, private policyType: 'life' | 'term',){
//         super(policyNumber,policyName,sumInsured)
//         this.policyType = policyType
//     }

//     display(){
        
//         console.log(`number: ${this.policyNumber}, name: ${this.policyName}, sum: ${this._sumInsured}, policy type: ${this.policyType}`)
//     }
// }

// class GeneralInsurance extends Insurance{
//     constructor(policyNumber:number, policyName:string, sumInsured:number, private vehicleType:'2 wheeler' | '4 Wheeler', private riderType: 'flood' | 'cablecut'){
//         super(policyNumber,policyName,sumInsured)
//         this.vehicleType = vehicleType;

//     }
//     set _riderType(r: 'flood' | 'cablecut'){
//             this.riderType = r;
//         }

//         get _riderType(){
//             return this.riderType;
//         }


//         showRider(){
//             console.log(`number: ${this.policyNumber}, name: ${this.policyName}, sum: ${this._sumInsured}, policy type: ${this.vehicleType}, rider type: ${this._riderType}`)
//         }
// }


// let l = new LifeInsurance(248127,"abc",30000,'life')
// console.log(l)
// l.display()

// let g = new GeneralInsurance(248127,"abc",30000,'2 wheeler','flood')
// console.log(g)
// g.showRider()


// read instanceof use in ts


// /<--------------------------------Interface-------------------->


// interface Employee{
//     id:number;
//     name:string;
//     salary:number;
//     desg?:string;
//     // readonly company:string;
// }
// let emp:Employee={
//     id:100,
//     name:"abc",
//     salary:50000,
//     // company:"CTS"
// };

// emp.id=500;
// emp.name="update abc"

// console.log(emp)


// class EmployeeImpl implements Employee{
//     constructor(public id:number, public name:string, public salary:number){}
// }

// let em = new EmployeeImpl(100,"abcd",20000)
// console.log(em)



// interface Human{
//     age:number;
// }

// interface Employee extends Human{
//     id:number;
//     name:string;
//     salary:number
// }

// let emp:Employee={
//     id:100,
//     name:"abc",
//     salary:50000,
//     age:23
// }\


// interface Employee{
//     id:number;
//     name:string;
//     salary:number
// }

// class Employee1 implements Employee{
//     // id!:number;
//     // name!:string;
//     // salary!:number

//     constructor(public id:number, public name:string, public salary:number){
//         this.id = id,
//         this.name = name;
//         this.salary = salary;
//     }

//     show(): void{
//         console.log(`id: ${this.id}, name: ${this.name}, salary: ${this.salary}`)
//     }
// }

// let e1 = new Employee1(101,"bcd",200000)
// e1.show()




// interface Rbi{
//     loan(): void
// }

// interface IBank extends Rbi{
//     withdraw(amount:number) :void;
//     deposit(amount:number): void;
//     balance:number;
// }

// interface IBank{
//     creditCard():void
//     calculateInterest():void;
// }

// class Hdfc implements IBank{

//     public balance = 30000;

//     constructor(public accountNo:number, public name:string){
//     }
    

//     withdraw(amount: number): void {

//         if(this.balance<amount){
//             console.log(`Insufficient balance : ${this.balance}`)
//         }else{
//         this.balance = this.balance - amount
//         console.log(`Your balance after withdrawl of amount ${amount} is ${this.balance}`)
//         }
//     }

//     deposit(amount: number): void {
//         this.balance = this.balance + amount
//         console.log(`Your balance after deposit of amount ${amount} is ${this.balance}`)
//     }

//     calculateInterest(){
//         console.log(`Your previous balance is ${this.balance} and after adding interest of 5% your current balance is ${this.balance+=this.balance*0.05}`)
//     }

//     creditCard(): void {}

//     loan(){}
// }


// class Icici implements IBank{

//     public balance = 50000;

//     constructor(public accountNo:number, public name:string){
//     }
    

//     withdraw(amount: number): void {
//         if(this.balance<amount){
//             console.log(`Insufficient balance : ${this.balance}`)
//         }else{
//             this.balance = this.balance - amount
//         console.log(`Your balance after withdrawl of amount ${amount} is ${this.balance}`)
//         }
        
//     }

//     deposit(amount: number): void {
//         this.balance = this.balance + amount
//         console.log(`Your balance after deposit of amount ${amount} is ${this.balance}`)
//     }

//     loan(){}

//     creditCard():void{
//         console.log(`your balance is ${this.balance} and you are eligible for a credit limit of ${this.balance*2}`)
//     }

//     calculateInterest(){
//         console.log(`Your previous balance is ${this.balance} and after adding interest of 7% your current balance is ${this.balance+=this.balance*0.07}`)
//     }
// }

// let h1 = new Hdfc(248175,"abc");
// let h1 = new Icici(234576,"def")

// if(h1 instanceof Icici){
//     h1.creditCard();
//     h1.calculateInterest()
// }

// let h1 = new Hdfc(248175,"abc");
// let i1 = new Icici(234576,"def")

// let doBanking = (bank:IBank)=>{
//     bank.withdraw(5000)
//     bank.deposit(3000);
//     bank.calculateInterest()
//     bank.creditCard()
// }

// doBanking(i1)


// interface Ishape{
//     findArea(n:number):void
// }

// class Square implements Ishape{
//     findArea(n: number): void {
//      console.log(`Area is ${n*n}`)
//     }
// }

// class Circle implements Ishape{
//     findArea(n: number): void {
//         console.log(`Area is ${3.14*n*n}`)
//     }
// }


// let s1 = new Square()
// let c1 = new Circle()

// s1.findArea(5);
// c1.findArea(3)

