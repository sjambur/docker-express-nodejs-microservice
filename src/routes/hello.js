const router = require("express").Router();

router.route("/").get((req, res) => {
  msg = `Hello ${req.query.name || "World"} from get request!`;
  res.json({ msg });
});

router.route("/:lang").get((req, res) => {
  switch (req.params.lang) {
    case "es":
      msg = "Hola Mundo!";
      break;
    case "en":
      msg = "Hello world!";
      break;
    case "fr":
      msg = "Bonjour Monde!";
      break;
    default:
      msg = "Hallo welt!";
      break;
  }
  res.json({ msg });
});

router.route("/").post((req, res) => {
  // msg = `Hello ${req.body.name || "World"} from post request`;
  // res.json({ msg });
  let result = req.body.a + req.body.b;
  res.json({ result });
});

module.exports = router;
