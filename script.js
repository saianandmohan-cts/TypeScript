function getVal(){
    let select = document.querySelectorAll('#myForm input[type="checkbox"]')

let gen = [];

for(let i = 0;i<select.length;i++){
    if(select[i].checked){
        gen.push(select[i].value)
    }
}

console.log(gen);
alert("tour selectd values are : "+gen);
}