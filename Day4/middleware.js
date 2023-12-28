let m2=(req,res,next)=>{
    req.query.course='DSA'
    next()
}

module.exports={m2}