//1
function isEmpty(obj){
    let value = true;
    for (let item in obj){
        value = false;
    }
    return value;
}
let schedule = {};
console.log(isEmpty(schedule));

//2
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
function add(obj){
    let sum = 0;
    for(key in obj){
        sum += obj[key];
    }
    console.log(sum);
}
add(salaries);

//3
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(obj){
    for(key in obj){
       // if(typeof obj[key] === "number")
        if(isFinite( obj[key]))
        obj[key] *= 2;
    }
    console.log(menu);
}
multiplyNumeric(menu);
  
function makeUser() {
  return {
    name: "John",
    ref: this
  };
};

let user = makeUser();
console.log(user.ref.name);

//4
function Calculator()  {
    return {
        read () {
            this.a = prompt('Enter a value',0);
            this.b = prompt('Enter another value',0);
        },
        sum(){
            return (+this.a + +this.b);
        },
        mul(){
            return this.a * this.b;
        }
    }
}
let calculator = new Calculator();
calculator.read();
console.log( "Sum=" + calculator.sum() );
console.log( "Mul=" + calculator.mul() );

//5
let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function() { 
      console.log( this.step );
    }
  };
ladder.up().up().down().showStep();

//6
function Accumulator(number) {
    this.value = number;
    this.read = function() {
        this.value += +(prompt('Enter a value',0));
    }
}
let accumulator = new Accumulator(1); 
accumulator.read(); 
accumulator.read(); 
console.log(accumulator.value); 