//require('dotenv').config();
let express = require('express');
let app = express();

/*app.get('/',(req,res) => {
    res.send("Hello Express");
});*/

/*const absolutePath = __dirname + '/views/index.html';
const public       = __dirname + '/public';*/

app.use((req,res,next) =>{
    console.log(req.method + ' ' + req.path + ' ' + req.ip)
    next();
});


/*app.use('/public',express.static(public));

app.get('/',(req,res) => {
    res.sendFile(absolutePath);
});*/

/*app.get('/json',(req,res) =>{
    
    if(process.env.MESSAGE_STYLE === "uppercase"){

        res.send(
            {
                "message":"HELLO JSON"
            }
        )

    }else{

        res.send(
            {
                "message":"Hello json"
            }
        )

    }
    
});*/






































 module.exports = app;
