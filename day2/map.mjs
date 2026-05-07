// // map loop
// let ar1= [10,20,30,40,50];
// let ar=ar1.map((item, i)=>{
//     return item*i;
// });
// console.log(ar);


// let ar2=[10,20,30];
// let ar3=ar2.map((item, i)=>{
//     return item*2;
// });
// console.log(ar3);

let ar4=[20,30,10,5];
let ar5=ar4.map((item, i)=>{
    if(item>18){
        return item*2;
    } else {
        return item*0;
    }
});
console.log(ar5);
