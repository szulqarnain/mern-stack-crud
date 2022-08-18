const jwt = require('jsonwebtoken');
const {secrectKey} = require("../config/jwtToken");

const requireAuth = (req,res,next)=>{

    const token = req.cookies.jwt;

    if(token){

        jwt.verify(token,secrectKey,(err, decodedToken)=>{
            if(err){
                console.log(err.message);
                // Response Json Object
                res.status(403).json({

                    success: false,
                    data:[],
                    message: err.message

                });

            } else {
                console.log(decodedToken);
                next()
            }

        });

    }else{
            // Response Json Object
            res.status(403).json({
                success: false,
                data:[],
                message:'Access Denied'
            });

    }
}

module.exports = { requireAuth };