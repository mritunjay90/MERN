/* 
makae function named canVote
pass one input
*/

let canvote=(i1)=>{
    if(i1>=18){
        return "can vote"
    }else{
        return "cannot vote"
    }
};
let _canvote=canvote(19);
console.log(_canvote);