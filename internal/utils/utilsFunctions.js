const nodeoutlook = require('nodejs-nodemailer-outlook')

/* Auth Error Handle Function*/
const handleAuthErrors = (err)=>{
    // Errors object
    let errors = { email: '', password: ''};

    //incorect email
    if(err.message === 'incorrect email'){
        errors.email = "That email is not registered";
    }

    //incorect password
    if(err.message === 'incorrect password'){
        errors.password = "That password is incorrect";
    }


    // duplicate error code
    if(err.code === 11000){
        errors.email = "that email is already registered"
    }
    // Errors validations
    if(err.message.includes('User validation failed')){
        Object.values(err.errors).forEach(({properties})=>{
            errors[properties.path] = properties.message;
        });
    }

    return errors;
}

const emailSend = (to,sub,text) => {

    nodeoutlook.sendEmail({
        service: '"Outlook365"', 
        auth:{
            user: 'developer0012@outlook.com',
            pass: 'DeveloperPassword'
        },
        debug: true,
        logger:true,
        from: 'developer0012@outlook.com',
        to: to,
        subject: sub,
        html: `<b>Your password is ${text}</b>`,
        onError: (e) => console.log(e),
        onSuccess: (i) => console.log(i)
    });

}




module.exports = {
    handleAuthErrors,
    emailSend
}