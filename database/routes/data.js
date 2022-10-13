const { Client } = require("pg")
// const dotenv = require("dotenv")
// dotenv.config()
var express = require("express");
var router = express.Router();
const connectDb = async () => {
    try {
        const client = new Client({
            user: 'postgres',
            host: 'localhost',
            database: 'guessword',
            password: 'postgrespw',
            port: 5432
        })
 
        await client.connect()
        const res = await client.query('SELECT * FROM score')
        console.log(res)
        await client.end()
        return res  
    } catch (error) {
        return null;
    }
}
router.get("/", function(req, res, next) {
    connectDb().then(data=>{
        if(data!=null)
        console.log(data.rows)
        res.send(data.rows);
    })
});

module.exports = router;

