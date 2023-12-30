
// const express = require('express');
// const { query, validationResult } = require('express-validator');
// const app = express();
// app.use(express.json());
// app.get('/hello', query('person').notEmpty().withMessage('please fill the right details'), (req, res) => {
//   const result = validationResult(req);
//   console.log(result)
//   if (result.isEmpty()) {
//     return res.send(`Hello, ${req.query.person}!`);
//   }

//   res.send({ x: result.errors });
// });
// app.listen(3000);

// =============================================================================

const express = require('express');
const { body, validationResult } = require('express-validator');
const app = express();
app.use(express.json());
app.post('/login',
[
   body('username').isLength({min:3,max:8}).withMessage('plz fill username in the range of [3-8]'),
   body('email').isEmail().withMessage("plz fill the right email"),
   body('password').isLength({min:3,max:6}).withMessage("wrong password")
]
, (req, res) => {
  const result = validationResult(req);
  console.log(result)
  if (result.isEmpty()) {
    return res.json({
         msg:"your form is submitted successfully !"
    });
  }
  res.send({ x: result.errors });
});
app.listen(3000);