const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(express.static("public"));

const recipes = [];

app.get("/", function (req, res) {
  res.render("home");
});

app.get("/create", function (req, res) {
  res.render("create");
});

app.post("/create", function (req, res) {
  const recipe = {
    title: req.body.title,
    ingredients: req.body.ingredients,
    instructions: req.body.instructions,
  };

  recipes.push(recipe);
  res.redirect("/recipes");
});

app.get("/recipes", function (req, res) {
  res.render("recipes", { recipes: recipes });
});

app.listen(3000, function () {
  console.log("server started on port 3000");
});
