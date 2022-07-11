//Lessons
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 4100;
const { Pool } = require("pg");
app.use(cors());

app.use(express.json({ limit: "8MB" }));
const pool = new Pool({
  user: "rahwaghebremichael",
  host: "localhost",
  database: "videos",
  password: "",
  port: 5432,
});
app.get("/lessons", (req, res) => {
  pool
    .query(`select * from lessons`)
    .then((result) => res.status(200).json(result.rows))
    .catch((error) => res.status(500).json(error));
});

// app.get("/lessons/:lessonId", (req, res) => {
//   const id = req.params.lessonId;
//   pool
//     .query(`select * from lessons where id = $1`, [id])
//     .then((result) => res.status(200).json(result.rows))
//     .catch((error) => res.status(500).json(error));
// });

app.post("/lessons", (req, res) => {
 console.log(req.body)
  const { title, imgUrl, intro, summary, content, url, rating } = req.body;
  pool
    .query(
      `INSERT INTO lessons(title, imgUrl, intro, summary, content, url, rating) VALUES($1, $2, $3, $4, $5, $6, $7)`,
      [title, imgUrl, intro, summary, content, url, rating]
    )
    .then(() => res.status(200).send("Lesson created."))
    .catch((error) => res.status(500).json(error));
 });

// app.put("/lessons/:lessonId", (req, res) => {
//   const id = req.params.lessonId;
//   const { title, imgurl, intro, summary, content, url, rating } = req.body;
//   pool
//     .query(
//       `Update lessons Set title = $1, imgurl= $2, intro= $3, summary = $4, content = $5, url = $6, rating = $7 
//         Where id = $8`,
//       [title, imgurl, intro, summary, content, url, rating, id]
//     )
//     .then(() => res.status(200).send("Lesson updated."))
//     .catch((error) => res.status(500).json(error));
// });

app.delete("/lessons/:lessonId", (req, res) => {
  const id = req.params.lessonId;
  pool
    .query(`select * from lessons where id = $1`, [id])
    .then((result) => {
      if (result.rows.length > 0) {
        pool
          .query(`Delete from lessons where id = $1`, [id])
          .then(() => res.status(200).send("Lesson deleted."))
          .catch((error) => res.status(500).json(error));
      } else {
        res.status(200).send("Lesson does not exist.");
      }
    })
    .catch((error) => res.status(500).json(error));
});
app.listen(port, () => console.log(`Listening on port ${port}`));