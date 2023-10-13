class Mobile{

    constructor(name,model,price,network){
        this.name = name;
        this.model = model;
        this.price = price;
        this.network = network;
    }

    printPhoneName(){
        console.log('Hello : '+this.name);
    }
}

let phone1 = new Mobile('iphone','i7',50000,'4G');
console.log(phone1.name);
console.log(phone1.model);
console.log(phone1.price);
console.log(phone1.network);
phone1.printPhoneName();

let phone2 = new Mobile('Samsung','galaxy',10000,'5G');
console.log(phone2.name);
console.log(phone2.model);
console.log(phone2.price);
console.log(phone2.network);
phone2.printPhoneName();