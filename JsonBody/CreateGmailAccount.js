let FirstName,LastName,DOB,Gender,Password,email,contactDetails
class GmailAccount{
    constructor(FirstName,LastName,DOB,Gender,Password,email,contactDetails){
        this.FirstName = FirstName
        this.LastName = LastName
        this.DOB = DOB
        this.Gender = Gender
        this.Password = Password
        this.email = email
        this.contactDetails = contactDetails 
    }
}

let qaPrayogshala = new GmailAccount('qa','Prayogshala','28/10/1991','Male','Test123',
                    {email1:'qa1Prayogshala1@gmail.com',email2:'qa2Prayogshala2@gmail.com'},
                    [{Home:'+281 12345'},{Mobile:'+91 0123456789'}])
console.log(qaPrayogshala);