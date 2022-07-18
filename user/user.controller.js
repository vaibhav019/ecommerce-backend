const userService = require('./user.service')
const authService=require('../auth.service')

const mailService=require('../mail.service')

exports.register = function(req,res){
    console.log("data received",req.body)
    userService.adduser(req.body).then(function(data,error){
        console.log("============================================")
        console.log("data received",req.body)
        
        authService.createToken({email:req.body.email},function(error,token){
            console.log("=================================================================================")
            if(error){
                //remove te user from the  database and send internal server error
                userService.deleteuser(req.body.email)
                res.status(500).send()
            }else{
                //create the url
                //const url=req.protocol+"://"+req.hostname+"user/verify?token="+tokenq
                const hardcodedurl="http://localhost:9000/user/verify?token="+token
                console.log("url",hardcodedurl);
                console.log("token created",token)
                console.log("data",data)
                res.send({data:data,url:hardcodedurl});
                // mailService.sendVerificationMail(req.body.email,hardcodedurl).then(function(){
                //     console.log("check your mail")
                // //   res.send({
                // //       message:"restorant registerd please check your mail for veification"
                      
                // //   })
                // }).catch(function(err){
                //     userService.deleteuser(req.body)
                //     console.log(err,"++++++")
                //     res.status(500).send()
                // })

                
            }
        })
        // res.send({
        //     message:"user Registered"
        // })
    },function(error){
        if(error == "Duplicate"){
            res.status(409).send({
                error:"User with Email Already Exists"
            })
        }
        else
        res.status(500).send({
        })
    })
    
}


exports.login = function(req,res){
    console.log("data received",req.body)
    userService.findUser(req.body).then(function(result){
        console.log("===============================")
        console.log(result)
        var payload={
            email:result.email,
            role:result.role
            
                    }
        if(result){
            authService.createToken(payload,function(error,token){
                res.set("authtoken",token)
                
                console.log("authtoken",token)
                res.send({
                        message:"Login Successful",
                        authtoken:token
                     })
                // res.cookie('authtoken',token,{
                //     expires:new Date(Date.now()+25892000000),
                //     secure:false,//set true if use http
                //     httpOnly:true
                // })
                // res.send({
                //     message:"Login Successful"
                // })
                //res.redirect('/item/additempage')
            })
            
        }
        else{
            res.send({
                message:"Invalid Credentials"
            })
        }
       
    },function(error){
        res.status(500).send({error
        })
    })
}


exports.alluser = function(req,res){
    console.log("*************allrestorant controller call huaa hai ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
    userService.findAllUser().then(function(result){
        console.log("*************allrestorant service call huaa hai ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
        if(result){
            console.log(" restorant data  aa rha hai")
            res.send({
                message:result
            })
        }
        else{
            console.log(" restorant data   nhi aa rha hai")
            res.send({
                message:"Invalid Credentials"
            })

        }
       
    },function(error){
        res.status(500).send({error
        })
    })
    
 }
exports.verify= function(req,res){
    var token=req.query.token
    console.log('#######################################')

    authService.verifyToken(token,function(error,payload){
        if(error){
            res.status(500).send(error)
        }else{
            userService.verifyuser(payload.email).then(function(result){
            res.send({"message":"user verified","data":result})
            
            }).catch(function(){
             res.status(500).send()
            })
        }
    })

   
}
