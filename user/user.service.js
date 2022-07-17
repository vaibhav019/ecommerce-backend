var userModel = require('./user.model')

exports.adduser = function(data){
    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@",data,"=====================================")
    return new Promise(function(resolve,reject){
        console.log("i have to do some work", data)
        var userdata = new userModel(data)
        userdata.save().then(function(result){
            console.log("user added into the collection", result)
            if(result){
                resolve(result)
            }
            else{
                resolve()
            }
            // resolve(result)
        },function(error){
            console.log("error in adding to user to collection ", error)
            if (error.code==11000)
            reject("Duplicate")
        })
    })
   
}


exports.findUser = function(data){
    
    var query ={
        email:data.email,
        password:data.password,
        verified:true
    }

    return new Promise(function(resolve,reject){
        console.log("i have to do some work", data)
        console.log( new userModel(data))
        userModel.findOne(query).then(function(result){
            console.log("result os find user", result)
            resolve(result)
        },function(error){
            console.log("error in adding to user to collection ", error)
            
            reject()
        })
    })
   
}

exports.findAllUser = function(){
    
    

    return new Promise(function(resolve,reject){
        console.log("i have to do some work")
        //console.log( new restorantModel(data))
        userModel.find().then(function(result){
            console.log("result os find user", result)
            resolve(result)
        },function(error){
            console.log("error in adding to user to collection ", error)
            
            reject(error)
        })
    })
   
}

exports.verifyuser=function(email){
    //verify the token first from  the payload of the token we will extract email of
    //the user to which token was sign
    return new Promise(function(resolve,reject){
        var findQuery={
            email:email
        }
        var updateQuery={
            $set:{
                verified:true
            }
        }
        userModel.findOneAndUpdate(findQuery,updateQuery).then(function(result){
            console.log("result of verifying user in db is ",result)
            resolve(result)
        },function(error){
            console.log("error of verifying user in db is ", error)
            reject(error)
        })

    })    
}


exports.deleteuser= function(data){
    return new Promise(function(resolve,reject){
        var query={
            email:data.email
        }
     userModel.deleteOne(query).then(function(result){
console.log("result of removing user",result)
resolve()
     },function(error){
        console.log("error occured in removing user",error)
        reject()
     })

     
    })
}