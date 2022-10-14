var express = require('express');
var router = express.Router();
const { expressjwt } = require('express-jwt');
const jwt = require('jsonwebtoken');
const jwtKey = 'jwtadd'; // token生成的密匙，根据自己需求定义
/* GET home page. */
const createToken = (data) => {
    // token生成函数，有效时间为一个小时
    return jwt.sign(data, jwtKey, { expiresIn: 60 * 60 * 240 });
};

const jwtCheck = (req, res, next) => {
    // token验证函数
    const { token } = req.headers;
    jwt.verify(token, jwtKey, (err, data) => {
        if (err) {
            res.send({
                code: '400',
                msg: 'token无效',
            });
        } else {
            req.jwtInfo = data;
            next();
        }
    });
};

// 验证 token
const jwtAuth = expressjwt({
    secret: jwtKey,
    algorithms: ['HS256'],
    credentialsRequired: true, //  false：不校验
}).unless({
    path: ['http://localhost:3001/'], // 不需要校验的路径
});


const user_list=[{
    username:"wangyang",
    password:"123456"
},
{
    username:"dusan",
    password:"123456"
},
{
    username:"makavejev",
    password:"123456"
}]
const user_link=[]
router.post('/login', function(req, res, next) {
   
    var user_name = req.body.username;
    var password = req.body.password;

    if(user_list.find((res)=>{return res.username===user_name}).password==password)
    {
        const token = createToken({
            username: res.username,
        });
        callbackURI = "http://localhost:3000/callback"
        if(user_link.find((res)=>{ return res==user_name})===undefined)
        user_link.push(user_name);
        res.redirect(callbackURI+"/"+user_name)
        res.send({user_name,token})

    }
    else
    res.redirect("/#incorectLogin");
});

router.post('/recive',function(req,res){
    console.log("recive")
    var token = req.body.token;
    if(user_link.find((res)=>{ return res==token})===undefined)
         res.send(false)
         else
         res.send(true)
});


module.exports = router;
module.exports = { jwtCheck, jwtAuth };
module.exports = createToken;