//spreadoperator
let ar1=[9,10,11,12];
let ar2=[11,12];

let ar3=[8,...ar1,...ar2];
console.log(ar3);
let ar4=[...ar1,...ar2,13,14];
console.log(ar4);
//object
let info1={name:"mrs",age:21};
let info2={weight:50,ismarried:false};
let info3={...info1,...info2};
console.log(info3);