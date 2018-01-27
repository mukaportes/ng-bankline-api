module.exports = function(user, dest, value){

    var nodemailer = require('nodemailer');

    var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'nglinebanking@gmail.com',
        pass: 'ABC123456'
    }
    });
    var mailOptions = {
    from: 'nglinebanking@gmail.com',
    to: user.email,
    subject:"Nova transferencia" ,
    text:'Você transferiu '+ value + " para " + dest.name
    };

    transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
    });
    var nodemailer = require('nodemailer');

    var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'nglinebanking@gmail.com',
        pass: 'ABC123456'
    }
    });
    var mailOptions = {
    from: 'nglinebanking@gmail.com',
    to: dest.email,
    subject:"Nova transferencia" ,
    text:'Você recebeu '+ value + " de " + user.name
    };

    transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
    });


   
}



