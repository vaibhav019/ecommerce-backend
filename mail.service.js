const nodemailer = require('nodemailer');
const usercredentials=require('./user.credentials');
exports.sendVerificationMail= function (email,url)
{
  return new Promise(async function(resolve,reject){ 

    var transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
          user: `${usercredentials.email}`,
          pass: `${usercredentials.password}`
      }
 });
 var mail = `click here ${url}`;
    //  const from_email = usercredentials.email;
    //  const to_email = email;
     var mailOptions = {
         from: usercredentials.email,
         to: email,
         subject: 'verification link',
         text: mail
     };
 transporter.sendMail(mailOptions, function (error, info) {
 if (error) {
     console.log(error);
     reject()
 } else {
     console.log('Email sent: ' + info.response);
     resolve();
     
 }
 });
  })
    
    



}





// exports.sendVerificationMail= function (email,url){
//     return new Promise(async function(resolve,reject){
//       console.log('Email :::   ', email)
//       console.log('URL   :::',url)
//             // create reusable transporter object using the default SMTP transport
//             let transporter = nodemailer.createTransport({
//             //  host: "smtp.ethereal.email",
//               service:"gmail",
//               port: 587,
//               secure: false, // true for 465, false for other ports
//               auth: {
//                 user: usercredentials.email, // generated ethereal user
//                 pass: usercredentials.password, // generated ethereal password
//               },
//             });
//             console.log("Admin mail "+ usercredentials.email + " password "+usercredentials.password)
//             // send mail with defined transport object
//             try{
//                 let info = await transporter.sendMail({
//                     from: '"No REply ??"', // sender address
//                     to: email, // list of receivers
//                     subject : "Verification Account !!", // Subject line
//                     text:url,
//                     html: `Click here to <a href='${url}'>Verify</a>`, // html body
//                   });                  
//                   if(info.messageId){
                      
//                       console.log("Message sent: %s", info.messageId);
//                       console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
//                       resolve()
//                   }
//                   else{
//                     console.log('.......Error in mail sending$$ :: '+info+'............')
//                       reject()
//                   }

//             }catch(error){
//                 console.log('.....Error in mail sending%% :: '+error+'............')
//                reject() 
//             }
            
            

//     })
// } 

// exports.sendVerificationMail= function (email,url){
//        return new Promise(async function(resolve,reject){
//         let mailTransporter = nodemailer.createTransport({
//           service: 'gmail',
//           auth: {
//             user: 'vaibhavsengarnetid@gmail.com',
//             pass: 'Vaibhav@1234'
//           }
//         }); 
//         let mailDetails = {
//           from: 'vaibhavsengarnetid@gmail.com',
//           to: email,
//           subject: "Verification Account !!",
//           text: url,
//           html: `Click here to <a href='${url}'>Verify</a>`,
//         };
//         mailTransporter.sendMail(mailDetails, function(err, data) {
//           if(err) {
//             console.log('Error Occurs',err);
//             reject(err);
//           } else {
//             console.log('Email sent successfully');
//             resolve(data);
//           }
//         });    
//        })
// }

// const nodemailer=require('nodemailer')
// const usercredentials=require('./user.credentials');

// exports.sendVerificationMail= function (email,url){
//     return new Promise(async function(resolve,reject){
          
//             let transporter = nodemailer.createTransport({
            
//               service:"gmail",
//               port: 587,
//               secure: false, // true for 465, false for other ports
//               auth: {
//                 user: usercredentials.email, 
//                 pass: usercredentials.password, 
//               },
//             });
          
            
//             try{
                // let info = await transporter.sendMail({
                //     from: '"No REply ??"', // sender address
                //     to: email, // list of receivers
                //     subject : "Verification Account !!", // Subject line
                //     text:url,
                //     html: `Click here to <a href='${url}'>Verify</a>`, // html body
                //   });
                
                  
//                   if(info.messageId){
//                       console.log("Message sent: %s", info.messageId);
//                       console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
//                       resolve()
//                   }
//                   else{
//                     console.log('.....Error in mail sending :: '+info+'............')
//                       reject()
//                   }

//             }catch(error){
//                 console.log('.....Error in mail sending :: '+error+'............')
//                 reject()
//             }
            
           

//     })
//} 