const { json } = require('express');
const connection = require('../config/database');
const { use } = require('../routes/web');

const getHomePage = (req,res) =>{
    return res.render('home.ejs')
}

const getABC = (req, res)=>{
    res.send('Check abc')
}

const getTest = (req,res)=>{
    res.render('sample.ejs')
}

const postCreateUser = (req, res) => {

    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;

    console.log(">>>>Email = ", email, 'name =', name, 'city = ', city)

    //console.log(">>>> req.body", req.body)

    connection.query(
        `INSERT INTO Person (email, name, city) VALUE (?, ?, ?)`,
        [email, name, city],
        function(err, results){
            console.log(results);

            res.send('Create user succed !')
        }
    );
}

module.exports = {
    getHomePage, getABC, getTest,
    postCreateUser
}