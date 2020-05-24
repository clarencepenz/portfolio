const db = require('../db');
const cloudinary = require('cloudinary').v2;
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

  cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});


exports.getProjects =  async (req, res, next) => {
    try {
        const results = await db.query("SELECT * FROM projects  ORDER BY pid DESC")
        return res.json(results.rows)
      } catch (err) {
        return next(err);
      } 
      
  }



  exports.deleteProject =  async (req, res, next) => {
    try {
        const result = await db.query("DELETE FROM projects WHERE pid=$1", [req.params.pid])
            return res.json({msg: "deleted"})
          } catch (err) {
            return next(err);
          }
      
  }

  exports.createProject =  (req, res, next) => {
    const file = req.files.url;
    console.log(file)
     cloudinary.uploader.upload(file.tempFilePath, async (err, result) =>{
      const data = result.url
      console.log(data)
      try{               
        const r = await db.query("INSERT INTO projects(url, name, technologies, description, web, repo, date) VALUES ($1, $2, $3, $4, $5, $6, NOW()) RETURNING *", 
                 [data, req.body.name,  req.body.technologies, req.body.description, req.body.web, req.body.repo]);
                 return res.json(r.rows) 
      }catch (err) { 
            return next(err)
       };
     });
   
  } 


//   exports.updateProject =  (req, res, next) => {
//     const file = req.files.url;
//      cloudinary.uploader.upload(file.tempFilePath, async (err, result) =>{
//       const data = result.url
//       try{               
//         const r = await db.query("INSERT INTO projects(avatar, name, technologies, description, web, repo, date) VALUES ($1, $2, $3, $4, $5, $6, NOW()) RETURNING *", 
//                  [data, req.body.name,  req.body.technologies, req.body.description, req.body.web, req.body.repo]);
//                  return res.json(r.rows) 
//       }catch (err) { 
//             return next(err)
//        };
//      });
   
//   } 





