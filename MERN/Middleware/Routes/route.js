const express = require('express');
const router = express.Router();

const auth = function (req, res, next) {
    console.log("Auth middleware called");


// req.user ={userID:1,role:"student"};
req.user ={userID:1,role:"admin"};


if(req.user){
    next();
}

else {
    res.json({
        success:false,
        message:"Unauthorised",
    })
}

};

const isstudent= function(req, res, next){
    console.log("isstudent middleware called");
    if(req.user.role=="student"){
        next();
    }

    else {
        res.json({
            success:false,
            message:"Not a student",
        })
    }
}

const isadmin = function (req, res, next) {
    console.log("Admin middleware called");

    if(req.user.role=="admin"){
        next();
    }

    else {
        res.json({
            success:false,
            message:"Not an admin, only for admin",
        })
    }
};

router.get('/student', auth, isstudent, (req, res) => {
    console.log("Route handler")
    res.send("Welcome student");
});

router.get('/admin', auth, isadmin, (req, res) => {
    console.log("Route handler")
    res.send("Welcome admin");
});


module.exports = router;