const jwt = require('jsonwebtoken');
// Error handle
const {handleAuthErrors,emailSend} = require("../utils/utilsFunctions");
const {secrectKey} = require("../config/jwtToken");

// Get Queries Functions
const {
    getUserDetail,
    createUser,
    loginUser
} = require("../queries/userQueries");

const maxAge = 3 * 24 * 60 * 60;
const createToken = (id)=>{
    return jwt.sign({id},secrectKey,{
        expiresIn:maxAge
    });
}

module.exports = {

    // Get user detail
    async detail(req,res) {
        try {
            let User = await getUserDetail(req);
            // Response Json Object
            res.status(201).json({
                success: true,
                data:User,
                message:'Success'
            });

        } catch (e) {
            // Response Json Object
            res.status(400).json({
                success: false,
                data:[],
                message:e
            });
        }
    },

    // Singup function
    async signUp(req,res) {

        const to = req.body.email;
        const sub = 'Ropstam test task account password';
        // const password = Math.floor(100000 + Math.random() * 900000);
        const password = 123456; //for testing only

        // await emailSend(to,sub,password); 

        req.body.password = password;


            try {
                
                const user = await createUser(req);
    
                // Send Response
                res.status(201).json({
                    success: true,
                    data:[user.email],
                    message:'success'
                });
                
            } catch (e) {
                
                const errors = handleAuthErrors(e); // get handled errors from utils function
                // Send Error response
                res.status(400).json({
                    success: false,
                    data:[],
                    message:errors
                });
    
            }


    },

    // Login function
    async login(req,res) {

        try {
            const user = await loginUser(req);

            const token = createToken(user._id);
    
            res.cookie('jwt', token,{
                origin: "https://localhost:3000",
                httpOnly: true,
                sameSite: 'Strict',
                Secure:true
            });

            res.cookie('userId',[user._id],{
                origin: "https://localhost:3000",
                httpOnly: false,
                sameSite: 'Strict',
                Secure:true
            });

            // Send Response
            res.status(201).json({
                success: true,
                data:[user._id],
                message:'success'
            });
            
        } catch (e) {

            const errors = handleAuthErrors(e); // get handled errors from utils function
            // Send Error response
            res.status(400).json({
                success: false,
                data:[],
                message:errors
            });

        }

    },
    

}