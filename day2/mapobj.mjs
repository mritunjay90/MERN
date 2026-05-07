//map object
let users=[
    {name:"shah",age:20},
    {name:"sara",age:30},
    {name:"ali",age:10},
    {name:"hassan",age:5}
];
let user=users.map((item,i)=>{
    return item.name;
});
console.log(user);
let user1=users.map((item,i)=>{
    return item.age;
});
console.log(user1);
