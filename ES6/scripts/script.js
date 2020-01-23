const years = [1990,2000];

var age5 = years.map(function (year) {
    return 2020 - year;
});
console.log(age5);

var age6 = years.map(year =>{
    return 2020 - year;
});
console.log(age6);

var persons = [
    {firstName:'john',lastName:'smith'},
    {firstName:'jane',lastName:'smith'},
    {firstName:'mike',lastName:'smith'},
]

var display = persons.map(function(item){
    console.log(`${item.firstName} ${item.lastName}`);
})

var box5 = {
    color : 'green',
    position : 1,
    clickOn : function(){
        let self = this;
        document.querySelector('.green').addEventListener('click',function(){
            console.log('The box color is '+self.color);
        });
    }
}
//box5.clickOn();

var box6 = {
    color : 'green',
    position : 1,
    clickOn : function(){
        // let self = this;
        document.querySelector('.green').addEventListener('click', ()=> {
            console.log('The box color is '+this.color);
        });
    }
}
box6.clickOn();

let userName = 'john';
function show(){
    userName = 'jane';
    console.log(`Name is ${userName}`);
}
console.log(userName);
show();
console.log(userName);

var obj = { // does not create a new scope
    i: 10,
    b: () => console.log(this.i, this),
    c: function() {
      console.log(this.i, this);
    }
  }
  
  obj.b(); // prints undefined, Window {...} (or the global object)
  obj.c(); 



// var nameArr = ['john','jane'];
// var objArr = [
//     {id: 1, name: 'mike'},
//     {id: 2, name: 'john'},
//     {id: 3, name: 'joe'},
//     {id: 4, name: 'jane'}
// ]

// function check(input,obj){
//     var res =[];
//     for (item in input){
//         var x = input[item];
//         //console.log(x);
//         for(el in obj){
//             var y = obj[el];
//             if(x === y.name){
//                 res[item] = y;
//             }
//         }
//     }
//     return res;
// }
// var display = check(nameArr,objArr);
// console.log(display);

// //array2.filter(status => array1.split(',').some(el => el === status.name));
// console.log(objArr.filter(item => nameArr.some(el => el === item.name)));

//Destructuring

//Array
const details = ['john','male','America','123456'];
//const [name,gender,city,phone] = details;
const [name, ...rest]=details;
console.log(name,rest);

//Object
current_customer = {
    name : 'jane',
    gender : 'female',
    purchases :[
        {
            item : 'apple',
            quantity : '1',
            amount : '4'

        },
        {
            item : 'mango',
            quantity : '1',
            amount : '6'
        },
        {
            item : 'grape',
            quantity : '1',
            amount : '9'
        }
    ]
};
const { purchases: [ first,second] } = current_customer;
console.log(first,second);

const { purchases: [ {item : firstItem,amount : firstAmount}, {item : secondItem,amount : secondAmount} ] } = current_customer;
console.log(firstItem,firstAmount);


//function
let caclAmount = ({purchases}) => {
    let total = 0;
    purchases.map(el => {
        let {amount,quantity} = el
        let newAmount = amount * quantity;
        total += newAmount;
    });
    return total;
}

let showI = caclAmount(current_customer);    
console.log(showI);

var john = {
    name : 'John',
    age : 28,
    job : 'teacher',
    presentation(style){
        if(style == 'formal'){
            console.log(`Hello I\'m ${this.name} and I\'m a ${this.job}`);
        }else if(style == 'friendly'){
            console.log(`Hello I\'m ${this.name} and I\'m a ${this.job}`);
        }
    }
};
john.presentation('formal');
var emily = {
    name : 'Emily',
    age : 30,
    job : 'designer'
};

//emily.presentation = john.presentation;
john.presentation.call(emily,'friendly');

console.log(emily);
//emily.presentation('friendly');

john.presentation.call(emily,'friendly');

function isFullAge(limit) {
    console.log(arguments);
    var arrArgs = Array.prototype.slice.call(arguments,1);
    //console.log(arrArgs);

    arrArgs.forEach(element => {
        console.log((2020 - element) >= limit);
    }) 
}
isFullAge(20,1990,2009,1995,2005);

function isFullAge6(limit,...years) {
    console.log(years);
    years.forEach(element => {
        console.log((2020 - element) >= limit);
    }) 
}

isFullAge6(21,2007,1998,2001,2005);

var ages = [10,7,18,20,8,25];
var full = ages.map(item => {
    return item >= 18;
});
console.log(full);
console.log(ages[full.indexOf(true)]);

console.log(ages.find(current => 
    current >= 18));

function sumInput(){
    let store = [];
    while(true){
    let userInput = prompt("enter a value");
    if(userInput === '' || userInput === null || !isFinite(userInput))
        break;    
    store.push(+userInput);
    
}
    var sum = 0;
    for (item of store){
        sum += item;
    }
    return sum;
}
//alert(sumInput());

let arr = [1,2,5];
arr.splice(-1,0,3,4);
console.log(arr);


//Classes
class Person6 {
    constructor(name,birthYear){
        this.name = name;
        this.birthYear = birthYear;
    }

    calculateAge() {
        let age = new Date().getFullYear() - this.birthYear;
        console.log(age);
    }
}

const jon = new Person6('John',2000);
console.log(jon);
jon.calculateAge();

class Athlete6 extends Person6 {
    constructor(name, birthYear, olympicGames, medals){
        super(name, birthYear);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }
    winMedals(){
        this.medals++;
        console.log(this.medals);
    }
}
 const jeny  = new Athlete6('Jeny',2001,2,8);
 jeny.winMedals();
 jeny.calculateAge();


 function makeAdder() {
    var counter = 0;
    return function() {
        console.log(counter);
        return counter++;
    };
  }
  
  var add5 = makeAdder();
  //var add10 = makeAdder(10);

  console.log(add5()); 
  console.log(add5());  
  console.log(add5());   
  //console.log(add10(2));

let user = {
    name:'jon',
    age:'20',
    sayHi(){
        alert(this.name);
    }
}
let admin = user;
//admin.sayHi();


let obj9, method;
obj9 = {
    go: function(){
        alert(this);
    }
};

//(method = obj9.go)();
//(obj.go || obj.stop)();

function makeUser(){
    return {
        name:'jane',
        ref:this.name
    };
};

let user0 = makeUser();
//alert(user0.ref);


let calculator = {
    a:0,
    b:0,
    read(){
        this.a = parseInt(prompt('enter first value'));
        this.b = parseInt(prompt('enter second value'));
    },
    sum(){
        return this.a + this.b;
    },
    mul(){
        return this.a * this.b;
    }   
}

calculator.read();
alert(calculator.sum());
alert(calculator.mul());