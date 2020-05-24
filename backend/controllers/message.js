const db = require('../db');


exports.createMessage =  async (req, res, next) => {
    try {
        const result = await db.query("INSERT INTO messages(name, email, subject, message, date) VALUES ($1, $2, $3, $4, NOW()) RETURNING *",
         [req.body.name, req.body.email, req.body.subject, req.body.message]);
            return res.json(result.rows)
          } catch (err) {
            return next(err)
          }
      
  }

  exports.getMessages =  async (req, res, next) => {
    try {
        const results = await db.query("SELECT * FROM messages ORDER BY mid DESC")
        return res.json(results.rows)
      } catch (err) {
        return next(err);
      } 
      
  }


  exports.deleteMessage =  async (req, res, next) => {
    try {
        const result = await db.query("DELETE FROM messages WHERE mid=$1", [req.params.mid])
            return res.json({ result: "Deleted" })
          } catch (err) {
            return next(err);
          }
      
  }