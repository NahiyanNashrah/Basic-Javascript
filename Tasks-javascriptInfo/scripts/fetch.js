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
