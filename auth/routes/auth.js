var express = require('express');
var router = express.Router();

/* GET home page. */
const user_list=[{
    username:"wangyang",
    password:"123456"
}]
router.post('/login', function(req, res, next) {
   console.log(req.body)
    var user_name = req.body.username;
    var password = req.body.password;

    if(user_list.find((res)=>{return res.username===user_name}).password==password)
    {
        req.session.user=user_name
        console.log(req.session)
        callbackURI = "http://localhost:3000/callback"
        res.redirect(callbackURI+"/"+user_name)
        res.send(user_name)

    }
    else
    res.redirect("/#incorectLogin");
});

router.get('/login', function(req, res, next) {
    console.log(req.session)
    if(req.session.user_name!=undefined)
    res.send(true);
    else
    res.send(false);
  });

module.exports = router;