const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../db');
const bodyParser = require('body-parser');

const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const fileUpload = require('express-fileupload');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(fileUpload({
    useTempFiles: true
  }));


exports.createUser =  (req, res, next) => {
  const { username, email, password, } = req.body;
  bcrypt.hash(password, 10).then(hash => {
    db.query('INSERT INTO admin ( username, email, password) VALUES ($1, $2, $3) RETURNING uid',
      [  username, email, hash],
      (error, results) => {
        if (error) {
          res.status(400).json({
            status: 'error',
            error
          });
        }
        const token = jwt.sign({ userId: results.rows[0].uid }, 'RANDOM_TOKEN_SECRET', {
          expiresIn: '24h'
        });
        res.status(201).json({
          status: 'success',
          data: {
            token,
            message: 'User Created Successfully'
           
          }
        });
      }
    );
  });
  }


exports.getUser =   (request, res) => {
  const { email, password } = request.body;
 
  db.query('SELECT * FROM admin WHERE email = $1', [email], (error, results) => {
    if (results.rows.length < 1) {
      return res.status(401).json({ status: error, error: 'User with the email not found' });
    }
    const hash = results.rows[0].password;
    return bcrypt
      .compare(password, hash)
      .then(valid => {
        if (!valid) {
         res.status(401).json({ status: error, error: 'Incorrect password' });
        }
        const token = jwt.sign({ userId: results.rows[0].uid }, 'RANDOM_TOKEN_SECRET', {
          expiresIn: '24h'
        });
       res.status(200).json({
          status: 'success',
          userId: results.rows[0].uid,
          author: results.rows[0].username,
          url: results.rows[0].url,
          token
        });
      })
      .catch(err => {
        res.status(500).json({
          message: 'Cannot signin, do try again',
          err
        });
      });
  });
}


