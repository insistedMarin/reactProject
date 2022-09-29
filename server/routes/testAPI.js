var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
    res.send("copyright CY-Tech 2022");
});

router.get('/word',function(req,res){
    const guessword='vivante';
    let guess="";
    let word=req.query.guess
    console.log(req.query.guess)
    console.log(req.url);
    if(word.length==guessword.length)
    {
        if(word==guessword)
            res.send("correct!");
        else{
            for(let i=0;i<word.length;i++)
            {
                if(i>guessword.length)
                    break;
                if(word[i]==guessword[i])
                    guess=guess+guessword[i]+" "
                else{
                    let sign=1;
                    for(let j=0;j<guessword.length;j++)
                    {if(guessword[j]==word[i])
                    {sign=0;
                    break;}
                    }
                    if(sign==0)
                        guess=guess+"* ";
                    if(sign==1)
                        guess=guess+"# "
                }
            }
            res.send(guess)
        }

    }
    else
        res.send("length not good");
});

module.exports = router;