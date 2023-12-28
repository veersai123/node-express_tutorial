const express=require("express")
const { m2 } = require("./middleware")
const app=express()

// 1.====================================================================
//app.get(routename,middlewaref1,f2,f3...,cbfn)

app.get('/',(req,res,next)=>{
    req.query.course='Node Js'
    req.query.name=req.query.name.toUpperCase()
next()
},(req,res)=>{
  res.send({
    msg:"hello guys !",
    data:req.query
  })
})

// 2.============================================================================
app.get('/hello',m2,(req,res)=>{
  res.send({
    msg:"hello guys !",
    data:req.query
  })
})

// 3.==========================================================================
const m3=(req,res,next)=>{
    req.query.name="New User"
   next()
}
app.use(m3)
app.get('/abc',(req,res)=>{
    res.send({
      msg:"hello ABC !",
      data:req.query
    })
  })
// =============================================================================
app.use(express.json())
app.post('/jsondata',(req,res)=>{
    res.json({
      msg:"hello ABC !",
      data:req.body
    })
  })
 
let port=4000
app.listen(port,()=>{
    console.log("the current server running on",port)
})

