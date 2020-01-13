 var Person = function(name,birtYear,gender){
     this.name = name;
     this.birtYear = birtYear;
     this.gender = gender;
 }

 Person.prototype.calcAge = function (){
     console.log(2020 - this.birtYear);
 };

 var john = new Person('John',2000,'male');
 var jane = new Person('Jane',2001,'female');

 john.calcAge();
 jane.calcAge();

//  let animal = {
//      eats : true
//  };

//  let rabbit = {
//      jumps : true
//  };

// rabbit.__proto__ = animal;
// console.log(rabbit.eats);
// console.log(rabbit);
// console.log(john instanceof Person);
// console.log(john);

let animal = {
    eat() {
      this.full = true;
    }
  };
  
  let rabbit = {
    __proto__: animal
  };
  
  console.log(rabbit.eat());

  let hamster = {
    stomach: [],
  
    eat(food) {
      // assign to this.stomach instead of this.stomach.push
      this.stomach = [food];
    }
  };
  
  let speedy = {
     __proto__: hamster
  };
  
  let lazy = {
    __proto__: hamster
  };


  
  // Speedy one found the food
  speedy.eat("apple");
  console.log( speedy.stomach ); // apple
  
  // Lazy one's stomach is empty
  console.log( lazy.stomach ); // <nothing>
  console.log(hamster.stomach);
  console.log(speedy);

function interviewQuestion(job){
    if(job === 'designer'){
        return function(name){
            console.log(name + ' is a designer');
        }
    }else if(job === 'teacher'){
        return function(name){
            console.log(name + ' is a teacher');
        }
    }else{
        return function(name){
            console.log(name + ' ,what do you do?');
        }
    }
}

var designerQuestion = interviewQuestion('dessigner');
designerQuestion('john');
