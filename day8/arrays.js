//let user1="Mahesh";

let users=["Mahesh","Sandy","Pranav","Sanyu paul","Rajiumer","Akhilendra"];
console.log(users[0]);
console.log(users[1]);
console.log(users[2]);
console.log(users[3]);
console.log(users[4]);
console.log(users[5]);

for(let i=0;i<users.length;i++){
    console.log(users[i]);
}

users.map((user,i)=>{
    console.log(user)
})

users.forEach((user,i)=>{
    console.log(user)
})

let userdetails={
    name: "Sam",
    age:23,
    city:"Hyderabad"
}
console.log(userdetails)
console.log(userdetails.name)
console.log(userdetails.city)

let userdetails2={
    name: "Mahesh",
    age:23,
    address:{
        city:"Hyderabad",
        area:"Bahadurpally",
        StreetNo:123,
        pincode:{
            pin1:123456,
            pin2:567889
        }
    }
};
console.log(userdetails2.name)
console.log(userdetails2.address.pincode)
console.log(userdetails2.address.pincode.pin1)


