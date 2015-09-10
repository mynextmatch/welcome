/**
 * SubscribeController
 *
 * @description :: Server-side logic for managing Subscribes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */


module.exports = {

  subscribe: function(req, res){

    var email = req.body.email;

    Subscribe.create({email: email}).then(function(result){

      res.json({status: "success", msg: "Thank you, we will get in touch."});

    }).catch(function(error){
      res.json({status: "success",  msg: "Thank you, we will get in touch."});
    });
  }

};

