// abstract class Bank{
var Employees1 = /** @class */ (function () {
    function Employees1(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    return Employees1;
}());
// class Students{
//     constructor(public rollno:number, public name:string, public marks:number){}
// }
var empArrays = [
    new Employees1(101, "Ram", 10000),
    new Employees1(102, "Sam", 20000),
    new Employees1(103, "Dam", 30000)
];
var empArrays2 = [
    new Employees1(101, "Ram", 10000),
    new Employees1(102, "mno", 20000),
    new Employees1(103, "pqr", 30000)
];
// let studentArrays=[
//     new Student1(11,"Jhon",54),
//     new Student1(21,"Doe",67),
//     new Student1(31,"Mike",75)
// ]
// let studentArrays2=[
//     new Student1(11,"Jhon",54),
//     new Student1(21,"dcv",67),
//     new Student1(31,"nbv",75)
// ]
var empfunc = function (value, value2) {
    // let k = [...value,...value2]
    // return 
    return value.filter(function (e) {
        return value2.some(function (e1) { return e1.id === e.id && e1.name === e.name && e1.salary === e.salary; });
    });
};
console.log(empfunc(empArrays, empArrays2));
