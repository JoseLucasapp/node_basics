const express = require('express');
const {body, validationResult} = require('express-validator');
const bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.json());

app.post('/user',[
    body('user').notEmpty(),
    body('password').isLength({min: 3})
],(req, res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    res.json({msg:'True'});
});

app.listen(3000);