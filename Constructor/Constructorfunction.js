function Employee(name,empCode,empDesignation){
    this.name = name;
    this.empCode = empCode;
    this.empDesignation = empDesignation;
}

let employee1 = new Employee('Krunal',001,'QA');
console.log(employee1);

for(let key in employee1)
    console.log(key+" :"+employee1[key]);