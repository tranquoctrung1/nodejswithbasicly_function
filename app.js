var emitter = require('./emiter');
var configeventEmitter = require("./configeventEmitter");

var Emitter = new emitter();

Emitter.on(configeventEmitter.Bad_Score,function()
{
    console.log("Diem ken Ok");
})

Emitter.on(configeventEmitter.Bad_Score, function()
{
    console.log("Diemn van kem Ok!!");
})

var scores = [10,3,2];

scores.forEach(elememt => {
    if(elememt < 5)
    {
        console.log("Hi!!!");
        Emitter.emit(configeventEmitter.Bad_Score);
    }
})

// Use to make the object.Create

var person = {
    fistName: "Trần Quốc   ",
    lastName: "Trung",
    fullName: () =>
    {
        return  this.fistName +  "  " + this.lastName;
    },

    get fullName1()
    {
        return this.fullName;
    }
}


console.log(person.fullName1());

// Create the object 

var myPerson = Object.create(person);

myPerson.fistName = "Tran Quoc ";
myPerson.lastName = "Trung";



console.log(myPerson.fullName1())

