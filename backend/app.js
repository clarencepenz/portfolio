const express = require('express');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload')
const cors = require('cors');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/auth');
const MessageRoutes = require('./routes/message');
const projectRoutes = require('./routes/project');
const userRoutes = require('./routes/user');
const path = require('path');


const app = express();
app.use(cors());
app.use(cookieParser());




// app.use((req, res, next) => {
//   let err = new Error("Not Found");
//   err.status = 404;
//   next(err);
// });

// if (app.get("env") === "development") {
//   app.use(function(err, req, res, next) {
//     res.status(err.status || 500);
//     res.send({
//       message: err.message,
//       error: err
//     });
//   });
// }


    
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
}); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
 
app.use(fileUpload({
  useTempFiles: true
})); 

app.use('/api/v1', express.static('public'));


app.use('/api/v1/checkAuth',  authRoutes);
app.use('/api/v1/auth',  userRoutes); 
app.use('/api/v1/project', projectRoutes);
app.use('/api/v1/message', MessageRoutes);






module.exports = app;