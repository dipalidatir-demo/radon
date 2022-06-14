const express = require('express');


const router = express.Router();

router.get('/test-me', function (req, res, next) {
    res.send('My first ever api!')
    next()
});

router.get('/middleware', function (req, res, next){
    res.send("this is middleware")
    next()
})


module.exports = router;

// adding this comment for no reason
© 2022 GitHub, Inc.
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
