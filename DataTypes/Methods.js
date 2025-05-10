let student = {
    name:'Krunal',
    age:32,
    designation: 'QA',
    propertyPrint: function() {
                            console.log("name : "+this.name);
                            console.log('age  : '+this.age);
                            console.log('designation :'+this.designation);
                            }
}
student.propertyPrint();