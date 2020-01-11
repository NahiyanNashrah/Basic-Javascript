// Hoisting

calcAge(2000);
function calcAge(birthYear){
    console.log(2020-birthYear);
}

console.log(age); //undefined
var age = 23;

function foo() {
    console.log(age); //undefined
    var age = 65;
    console.log(age);
}
foo();
console.log(age);

//Scoping


var a = 'hello!';
first();

function first(){
    var b = 'hi';
    second();

    function second(){
        var c = 'hey';
        console.log(a+' '+b+' '+c);
        console.log(this);
        third();
    }
    // third();
}

function third(){
    var d = 'john';
   // console.log(c);
    console.log(a+d);
}

//this


var mark = {
    name : 'Mark',
    birthYear : 2000,
    calculateAge : function(){
       console.log(2020 - this.birthYear);
       console.log(this);
/*
       function innerFunction(){
           console.log(this);
       }
       innerFunction();
       */
    }  
    
}
mark.calculateAge();

var mike = {
    name : 'Mike',
    birthYear : 1990
}

mike.calculateAge = mark.calculateAge;
mike.calculateAge();
//console.log(mike);