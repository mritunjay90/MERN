/*
make express appllication
switch port to it
*/
import express from "express";
let app = express();

app.listen(7000,()=>{
    console.log("application is running on port 7000");
});

// database operations         (CRUD)
// create post
// read , get
// update,patch
// delete,delete
/*
localhost:7000 ,post =>"a"
localhost:7000 ,get =>"b"
localhost:7000 ,patch =>"c"
localhost:7000 ,delete =>"d"

*/
app.post("/", (req, res,next) => {
    console.log("a");
    res.send("a");
});

app.get("/", (req, res,next) => {
    console.log("b");
    res.send("b");
});
app.patch("/", (req, res,next) => {
    console.log("c");
    res.send("c");
});
app.delete("/", (req, res,next) => {
    console.log("d");
    res.send("d");
});
