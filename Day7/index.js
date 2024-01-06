const express=require("express")
const app=express()
const mongoose = require('mongoose');

async function main() {
  await mongoose.connect('mongodb+srv://gyi89052:<Password>@cluster0.robevoy.mongodb.net/?retryWrites=true&w=majority');
}
main().then(()=>{
    console.log("Connected")
}).catch(err => console.log(err));
let port=3000
app.listen(port,()=>{
    console.log("our server is running on ",port)
})



// PORT=3000
// MONGO_PASS=zorO4KtfhWZMn0Iv
// MONGO_USER=gyi89052