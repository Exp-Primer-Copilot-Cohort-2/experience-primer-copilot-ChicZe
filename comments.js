// create web server
// create a comment
// read all comments
// read a comment
// update a comment
// delete a comment

const express = require("express");
const app = express();
app.use(express.json());

let comments = [];

app.get("/comments", (req, res) => {
  res.send(comments);
});

app.get("/comments/:id", (req, res) => {
  const comment = comments.find((comment) => comment.id === parseInt(req.params.id));
  if (!comment) {
    return res.status(404).send("The comment with the given ID was not found");
  }
  res.send(comment);
});

app.post("/comments", (req, res) => {
  const comment = {
    id: comments.length + 1,
    name: req.body.name,
    comment: req.body.comment,
  };
  comments.push(comment);
  res.send(comment);
});

app.put("/comments/:id", (req, res) => {
  const comment = comments.find((comment) => comment.id === parseInt(req.params.id));
  if (!comment) {
    return res.status(404).send("The comment with the given ID was not found");
  }
  comment.name = req.body.name;
  comment.comment = req.body.comment;
  res.send(comment);
});

app.delete("/comments/:id", (req, res) => {
  const comment = comments.find((comment) => comment.id === parseInt(req.params.id));
  if (!comment) {
    return res.status(404).send("The comment with the given ID was not found");
  }
  const index = comments.indexOf(comment);
  comments.splice(index, 1);
  res.send(comment);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});