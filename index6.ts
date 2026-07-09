//  npx tsc --init   we have created a tsconfig.json file to play with decorators in index6.ts


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

@scholarshipDeco({sports:true,ncc:true})
class School{
    rollno:number = 100;
    name:string="Satyam";
    marks:number;


    constructor(marks:number){
        this.marks=marks;
    }

    @schoolDeco("donbosco")
     schoolName:string;

    @resultDeco(this.marks)

    displayRes(){
        console.log(`Passed with marks: ${this.marks}`)
    }
    
}


function scholarshipDeco(loan:{sports,ncc}){
    return function<T extends {new(...args:any[]):{}}>
    (target:T,context:ClassDecoratorContext<T>){

        return class extends target{
            constructor(...args:any[]){
                super(...args);
                if(loan.sports==true || loan.ncc==true){
                    console.log(`Eligible for scholarship: ${this[`scholarships`]=10000}`)
                }else{
                    console.log(`ineligible for scholarship`)
                }
            }
        }
    }
}

function schoolDeco(value:string){  // factory function
    return function<T,S>(target:undefined,context:ClassFieldDecoratorContext<T,S>){
        return function(args:any){
            return value; 
        }
    }
}

function resultDeco(value:number){
    return function<T>(target:Function,context:ClassMethodDecoratorContext<T>){
        return function(this:any,...args:any){
             if (this.marks < 50) {
                console.log("You are ineligible. Extra marks added.");
                this.marks += 10;
            } else {
                console.log("You are eligible for loan.");
            }
            return target.apply(this, args);
        }
    }
}

let s = new School(34)
console.log(s)



 "Hi < name >, you have booked the <classSelection > class under the  <themeSelection > theme. Total amount: $ < amount>"