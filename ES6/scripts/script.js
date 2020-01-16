// const years = [1990,2000];

// var age5 = years.map(function (year) {
//     return 2020 - year;
// });
// console.log(age5);

// var age6 = years.map(year =>{
//     return 2020 - year;
// });
// console.log(age6);

// var persons = [
//     {firstName:'john',lastName:'smith'},
//     {firstName:'jane',lastName:'smith'},
//     {firstName:'mike',lastName:'smith'},
// ]

// var display = persons.map(function(item){
//     console.log(`${item.firstName} ${item.lastName}`);
// })

// var box5 = {
//     color : 'green',
//     position : 1,
//     clickOn : function(){
//         let self = this;
//         document.querySelector('.green').addEventListener('click',function(){
//             console.log('The box color is '+self.color);
//         });
//     }
// }
// //box5.clickOn();

// var box6 = {
//     color : 'green',
//     position : 1,
//     clickOn : function(){
//         // let self = this;
//         document.querySelector('.green').addEventListener('click', ()=> {
//             console.log('The box color is '+this.color);
//         });
//     }
// }
// box6.clickOn();

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


