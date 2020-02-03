// function getRecipes(){
//     setTimeout( () => {
//         const recipeID = [143,523,150,177];
//         console.log(recipeID);
//         setTimeout(id => {
//             const recipe = {
//                 title: 'Fried rice',
//                 producer : 'john'
//             };
//             console.log(`${id}: ${recipe.title}`);

//             setTimeout(publisher => {
//                 const recipe2 = {
//                     title: 'Chicken Fry',
//                     producer : 'john'
//                 }
//                 console.log(recipe2);
//             }, 1500 ,recipe.producer);

//         }, 1500, recipeID[2]);

//     }, 1500);
// }s

// console.log(`before function is invoked `);
// getRecipes();
// console.log(`after function is invoked `);

//Promise
// const getId = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve([143,523,150]);
//     }, 1500);
// });
// const getRecipe = recID => {
//     return new Promise((resolve,reject) => {
//         setTimeout( ID => {
//             const recipe = {
//                 title:'Fried Rice',
//                 publisher : 'john'
//             };
//             resolve(`${ID} : ${recipe.title}`);
//         }, 1500, recID);
//     });
// };

// const getPublisher = publisher => {
//     return new Promise((resolve, reject) => {
//         setTimeout(name => {
//             const recipe = {
//                 title: 'Chicken Fry',
//                 publisher : 'john'
//             };
//             resolve(`${name}: ${recipe.title}`);
//         }, 1500 ,publisher);
//     });
// };

// getId
// .then(IDs => {
//     console.log(IDs);
//     return getRecipe(IDs[2]);
//  })
// .then(recipe => {
//     console.log(recipe);
//     return getPublisher('john');
// })
// .then(recipe=> {
//     console.log(recipe);
// })
// .catch(error => {
//     console.log(`error`);
// });


// let getInput = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         resolve([3,6]);
//     },1500);
// });
// getInput.then(sum);

// function sum(arr){
//     let total = 0;
//     arr.forEach(element => {
//         total += element;
//     });
//     console.log(total);
// }

// new Promise(function (resolve, reject) {
//     //setTimeout(() => {
//         throw new Error('Whoops!');
//        // reject(new Error('Error'));
//    // },1000);
// }).catch(alert);

//Async/await

// async function getRecipeAW(){
//     const IDs = await getId;
//     console.log(IDs);
//     const recipe = await getRecipe(IDs[1]);
//     console.log(recipe);
//     const related = await getPublisher('john');
//     console.log(related);
//     return recipe;
// }
//getRecipeAW();

// getRecipeAW().then( result => {
//     console.log(`${result} is the best`);
// })

//AJAX & API
function getWeather(id){
    fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${id}/`)
    .then(result => {
        //console.log(result);
        return result.json()})
    .then(data => {
        //console.log(data);
        const today = data.consolidated_weather[0];
        console.log(`Temperatures in ${data.title} stay between ${today.min_temp} & ${today.max_temp}`);
    })
    .catch(error => console.log(error));
}
getWeather(44418);
getWeather(2487956);