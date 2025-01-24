// console.log(10);
// console.log(20);
// // setTimeout(()=>{
// //     console.log(30);
// // } , 5000)
// setInterval(()=>{
//     // console.log("setInterval");
//     document.writeln("MRU");
// },1500)
// console.log(40);
// console.log(50);

//const { reject } = require("async");

//const { reject } = require("async");

//const { reject } = require("async");


//! Promise

// let p1 = new Promise((reslove, reject)=>{})
// console.log(p1);

// let p2 = new Promise((resolve , reject)=>{
//     reslove("Success")
// });

// p2.catch(err=>console.log(err))

// p2.finally(()=>console.log("final"))

// let p3 = new Promise((resolve , reject)=>{
//     reject("Failures");
// });

// p3
// .then(res=>console.log(res))
// .catch(err=>console.log(err))
// .finally(()=>console.log("final"))
// // consloe.log(p3);

// // ! API fetching

// function fetchUsers(){
//     let response=fetch("https://jsonplaceholder.typicode.com/users");
//     //console.log(response);
//     response.then(res=>{
//         //console.log(res)
//         //onsole.log(res.json());
//         return res.json().then(data=>{
//             console.log(data);
//         })
//     })
//     .catch(err=>console.log(err))
// }
// fetchUsers();

// ! async  & await
//   function demo()
// {
//     console.log("Start");
//     console.log(10);
//     console.log(20);
//     return;
//     console.log(30);
//     console.log("End");
// }
// demo();

//  let p = new Promise((resolve , reject)=>{
//      setTimeout(()=>{
//          resolve("success")
//      },4000);
//  });

//  async function demo(){
//     console.log("start");
//     let x =await p;
//     console.log(x);
//     console.log("end");
//  }
//  demo();

// async function fetchUser(){
//     let response =await fetch("https://api.github.com/users");
//     let data =await response.json();
//     console.log(data);
// }
// fetchUser()

