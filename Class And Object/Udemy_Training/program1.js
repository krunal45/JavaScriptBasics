class user {
    constructor(id,name) {
        this.id = id;
        this.name = name;
    };

    getUserId() {
        return this.id;
    }

    getUserName(){
        return this.name;
    }
};

const ajay = new user(1,'Ajay');
const id = ajay.getUserId();
const name = ajay.getUserName();
console.log('Name: ',name);
console.log('id: ',id);