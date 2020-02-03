// async function getUsers(names){
//     let url = await fetch(`https://api.github.com/users/${names}`);
//     if(url.status == 200){
//         let response = await url.json();
//         console.log(response);
//     }
// }

// getUsers('NahiyanNashrah');
// getUsers('MYTE');
// getUsers('bdafahim');

async function getUsers(names) {
    let jobs = [];
  
    for(let name of names) {
      let job = fetch(`https://api.github.com/users/${name}`).then(
        successResponse => {
          if (successResponse.status != 200) {
            return null;
          } else {
            return successResponse.json();
          }
        },
        failResponse => {
          return null;
        }
      );
      jobs.push(job);
    }
  
    let results = await Promise.all(jobs);
  
    return results;
  }
let nameArr = ['NahiyanNashrah','NahianNashrah','bdafahim'];
// console.log(getUsers(nameArr));
let data;
getUsers(nameArr).then(result => {
    data = result;
    console.log(data);
})

// let nameArr = ['NahiyanNashrah','bdafahim'];
// async function getUsers(users){
//     let names = [];
//     for (user in users){
//         let url = await fetch(`https://api.github.com/users/${user}`);
//         if(url.status == 200){
//             let response = await url.json();
//             names.push(response);
//         }
//     }
//     console.log(names);
// }

// getUsers(nameArr);
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain
let f = function () {
  this.a = 1;
  this.b = 2;
}
let o = new f();
f.prototype.b = 3;
f.prototype.c = 4;
console.log(o.a);
console.log(o.b); 
console.log(o.c); 
console.log(o.d); 

function foo(){
  this.a = 2;
}
var bar = Object.create(foo);
// var bar = new foo();
bar.b = 'hello';
console.log(bar.b);
console.log(bar.a);

function Dog(){
  this.pupper = 'Pupper';
}
Dog.prototype.pupperino = 'Pups.';
var maddie = new Dog();
var buddy = Object.create(Dog.prototype);

//Using Object.create()
console.log(buddy.pupper); //Output is undefined
console.log(buddy.pupperino); //Output is Pups.

//Using New Keyword
console.log(maddie.pupper); //Output is Pupper
console.log(maddie.pupperino); //Output is Pups.

var original = { 
  'property' : 'original' 
}

console.log(original.property); // 'original'

var clone = original;
clone.property = 'clone';

console.log(original.property); 