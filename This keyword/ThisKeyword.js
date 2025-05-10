let student1 = {
    name:'Alex',
    marks:20,
    compare: function(other){
        if(this.marks > other.marks)
            console.log(`${this.name} marks is higher than ${other.name}`)
        else if(this.marks === other.marks)
            console.log(`${this.name} and ${other.name} has got equal marks.`) 
        else
            console.log(`${other.name} marks is greater than ${this.name}`)
    }
}


let student2 = {
    name:'Khyati',
    marks:19,
    }
student1.compare(student2);