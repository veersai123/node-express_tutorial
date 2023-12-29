const express=require("express")
const app=express()

//app.get(routename,middlewaref1,f2,f3,cbfn)
// ======================================== 1. Application-level middleware  ===============================================
// app.use((req,res,next)=>{
//     console.log(req.method)
//     if(req.method==='GET')
//     {
//         res.send("bhiya shi req bhejo !")
//     }
//     else{
//       next()
//     } }
// )  
// app.get('/',(req,res)=>{
//   res.send("hello guys")
// })
// app.post('/post',(req,res)=>{
//     res.send("ye lo aapki pdf")
//   })

// ========================================  2.  Router-level middleware  ===============================================
// const route = express.Router()
// const m=(req,res,next)=>{
//    req.query.name=req.query.name.toUpperCase()
//    next()
// }
// route.use(m)
// route.get('/',(req,res)=>{
//   res.send({
//     data:req.query
//   })
// })
// route.get('/hello',(req,res)=>{
//     res.send({
//         data:req.query
//     })
//   })
// app.get('/dello',(req,res)=>{
//     res.send({
//         data:req.query
//     })
//   })
// app.use('/',route)
// let port=3000
// app.listen(port,()=>{
//     console.log("server is running on",port)
// })



// ======================================== 3. Built-in middleware  ===============================================

// app.get('/',(req,res)=>{
//     res.send("hello ,kaise ho aap log !")
//   })
// app.use(express.static('./public'))
// let port=3000
// app.listen(port,()=>{
//     console.log("server is running on",port)
// })

// ======================================== 5. Third-party middleware  ===============================================

const cookieParser = require('cookie-parser')

app.use(cookieParser())
app.get('/',(req,res)=>{
    res.cookie("name","deepak")
    res.send("hello ,kaise ho aap log !")
  })
let port=3000
app.listen(port,()=>{
    console.log("server is running on",port)
})
