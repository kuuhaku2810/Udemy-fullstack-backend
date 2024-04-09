const express = require('express');
const {getHomePage, getABC, getTest, postCreateUser} = require('../controllers/homeController');
const router = express.Router();

//router.Method('/route', handler)

router.get('/', getHomePage);
router.get('/abc',  getABC);
router.get('/home', getTest)

router.post('/create_user', postCreateUser);

//router.get('/', (req, res) => {
    //res.render('sample.ejs')
//})

module.exports = router;