//Type Coercion: converting data types to string automatically 

var firstName = 'Mim';
var age = 20;

console.log(firstName + ' ' + age);



/*1st coding challenge
Comparing BMI using boolean variable
*/

var massOfMark, heightOfMark, massOfJohn, heightOfJohn,markBMI, johnBMI;
massOfMark = 60;
massOfJohn = 70;
heightOfMark = 1.69;
heightOfJohn = 1.95;

markBMI = massOfMark /(heightOfMark * heightOfMark);
johnBMI = massOfJohn /(heightOfJohn * heightOfJohn);
console.log(markBMI , johnBMI);


var compare = markBMI > johnBMI;
console.log('Is mark\'s BMI higher than john\'s? '+compare);


//falsy values: undefined, null, '', NaN(not a number), 0

var height;
height = 0; 
if(height || height === 0){
    console.log('Varibale is defined');
    }
else{
        console.log('Variable has not been defined');
    }


//Equality Operator
height = 20;
if(height == '20'){
    console.log('The == operator does type coercion');
    // checks if the values are same or not and type cast values
}

var weight = 65;
if(weight === '65'){
    console.log('Not executed');
}
else{
    console.log('no type coercion');
}



//Coding chellenge 2

var averageOfJohn, averageOfMike, averageOfMary;
averageOfJohn = ((89+ 120 +103)/3);
averageOfMike = ((116 + 94 + 123)/3);

if(averageOfJohn === averageOfMike){
    console.log('Draw');
}
else if(averageOfJohn > averageOfMike){
    console.log('John\'s team is winner & score is '+ averageOfJohn);
}
else{
    console.log('Mike\'s team is winner & score is '+ averageOfMike);

}

averageOfMary = ((97 + 134 + 104))/3;
if(averageOfJohn === averageOfMike && averageOfMike === averageOfMary){
    console.log('Draw');
}
else if(averageOfJohn > averageOfMike && averageOfJohn >averageOfMary){
    console.log('John\'s team is winner & score is '+ averageOfJohn);
}
else if(averageOfJohn < averageOfMike && averageOfMike >averageOfMary){
    console.log('Mike\'s team is winner & score is '+ averageOfMike);
}
else{
    console.log('Mary\'s team is winner & score is '+ averageOfMary);
}

//Array

var arr = ['Mim',20,true];
arr.push('student');
console.log(arr);
arr.pop();
console.log(arr);
arr.shift();
console.log(arr);
arr.unshift('Mim');
console.log(arr);

//Coding challenge 3

function calculateTip(bill){
    var tip;
    if(bill < 50){
        tip = bill * (20/100);
    }
    else if(bill >= 50 && bill <= 200){
        tip = bill * (15 / 100);
    }
    else
     tip = bill * (10 / 100);

     return tip;
} 

var tips = [calculateTip(124), calculateTip(48), calculateTip(268)];
var bills = [124 + tips[0], 48 + tips[1], 268 + tips[2]];

console.log(tips, bills);


//Objects & properties
var mim = {
    name : 'Mim',
    birthYear : 2000,
    family : ['Bob','Tuli'],
    isStudent : true,
    calcAge : function(){
        this.age = 2020 - this.birthYear;
        return this.age;
    } 
};
console.log(mim.birthYear);
console.log(mim['name']);
mim.calcAge();
console.log(mim.age);
console.log(mim);

//Coding Challenge 4 
var john = {
    name : 'John',
    mass : 60,
    height : 1.69,
    calcBMI : function(){
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    }
}

var mike = {
    name : 'Mike',
    mass : 70,
    height : 1.95,
    calcBMI : function(){
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    }
}

if(john.calcBMI() > mike.calcBMI()){
    console.log(john.name + ' has higher BMI of '+john.BMI);
}else if(john.BMI < mike.BMI){
    console.log(mike.name + ' has higher BMI of '+mike.BMI);
}else{
    console.log('They both have same BMI of '+john.BMI);
}


//Coding Challenge 5

var obj = {
    bill : [124,48,268,180,42],
    tip : [],
    final : [],
    tipCalculate : function(){
        for (item in this.bill){
            if(this.bill[item] < 50){
                this.tip[item] = this.bill[item] * 0.2;
            }else if(this.bill[item] >= 50 && this.bill[item] < 200){
                this.tip[item] = this.bill[item] * 0.15;
            }
            else{
                this.tip[item] = this.bill[item] * 0.1; 
            }

            this.final[item] = this.bill[item] + this.tip[item];
        }
    }
}

obj.tipCalculate();
console.log(obj.bill , obj.tip , obj.final);

