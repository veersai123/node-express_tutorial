// const express=require('express')
// const mongoose = require('mongoose')
// const app=express()
// require("dotenv").config()
// async function xyz()
// {
//     await mongoose.connect('mongodb+srv://'+process.env.USER_NAME+':'+process.env.PASS+'@cluster0.mpfpdsd.mongodb.net/?retryWrites=true&w=majority')
// }
// xyz().then(()=>{
//  console.log("connected")
//  const Friends = mongoose.model('Friends', { name: String });
//  const myfriends = new Friends({ name: 'Veer sai' });
//  myfriends.save().then(() => console.log('yes maine ker liya'));
// }).catch(()=>{
//     console.log("err")
// })
// let port=process.env.PORT || 5000
// app.listen(port,()=>{
//     console.log("server is running on",port)
// })

const express=require('express')
const mongoose = require('mongoose')
const app=express()
app.use(express.json())
require("dotenv").config()
async function xyz()
{
    await mongoose.connect('mongodb+srv://'+process.env.USER_NAME+':'+process.env.PASS+'@cluster0.mpfpdsd.mongodb.net/?retryWrites=true&w=majority')
}
xyz().then(()=>{
    const Friends = mongoose.model('Friends', { name: String });
    app.post("/hello",(req,res)=>{
        console.log(req.body.name)
        res.json({
            msg:"ok"
        })
       const myfriends = new Friends({ name: req.body.name });
       myfriends.save().then(() => console.log('yes maine ker liya'));
    })

}).catch(()=>{
    console.log("err")
})
let port=process.env.PORT || 5000
app.listen(port,()=>{
    console.log("server is running on",port)
})