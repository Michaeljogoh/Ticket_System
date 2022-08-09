const express = require('express');
const app = express();
const router = express.Router();
const {userRegister} = require('../controller/authController');


router.post("/users/new"  , userRegister);



module.exports = router