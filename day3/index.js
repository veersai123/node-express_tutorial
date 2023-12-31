const express = require('express')
const app = express()
app.use(express.json());

app.get('/', function (req, res) {
  res.send('Hello World')
})
//1 .=================================================================================
app.get('/hello', function (req, res) {
  console.log(req.query)
  res.send({
    msg:"your from is submitted successfully",
    data:req.query
  })
})

// 2. =================================================================================
app.post('/jsondata', function (req, res) {
  console.log(req.body)
  res.json({
    msg:"your from is submitted successfully",
    data:req.body
  })
})

//3. ====================================================================================

app.get('/url/:var', function (req, res) {
  console.log(req.params.var)
  res.json({
    msg:"your from is submitted successfully",
    data:req.params
  })
})
let port=3000
app.listen(port,()=>{
  console.log("the current server running on", port)
})
