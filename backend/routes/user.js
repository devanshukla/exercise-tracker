const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req,res)=> {
    User.find().then(users => res.json(users)).catch(err => res.status(400).json('ERR: '+ err));
});

router.route('/add').post((req,res)=>{
    const username = req.body.username;
    const newuser = new User({username});
    newuser.save()
    .then(()=>res.json("!User added hurrah"))
    .catch(err=>res.status(400).json("err: "+err));
});
module.exports=router;