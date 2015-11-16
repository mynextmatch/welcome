/**
 * SubscribeController
 *
 * @description :: Server-side logic for managing Subscribes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var Mandrill = require('machinepack-mandrill');

module.exports = {

  subscribe: function(req, res){

    var email = req.body.email;


    Subscribe.create({email: email}).then(function(result){

        Mandrill.sendPlaintextEmail({
            apiKey: 'EXv6kVZPlOFoXyYm2',
            toEmail: 'admin@mynextmatch.com',
            toName: 'Mynextmatch Cooming soon',
            subject: 'New subscriber for next releases',
            message: 'a new subscriber with email: ' + result.email + ' want receive release information' ,
            fromEmail: 'admin@mynextmatch.com',
            fromName: 'Mynextmatch cooming soon',
        }).exec({

            error: function (err){

            },

            success: function (){

            },
        });


      res.json({status: "success", msg: "Thank you, we will get in touch."});

    }).catch(function(error){
      res.json({status: "success",  msg: "Thank you, we will get in touch."});
    });
  }

};

