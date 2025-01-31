// import x from"./child.js"
// console.log(x);

// !named import
import college ,{x , user , users , obj} from "./child.js";
console.log(college);
console.log(x);
console.log(user);

console.log(users);
users.map(user=>{
    console.log(user);
})

console.log(obj.company);