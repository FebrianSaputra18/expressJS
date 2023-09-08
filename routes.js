const router = require("express").Router();
const fs = require("fs");

router.get("/home", (req, res) => {
  res.send({
    status: "success",
    message: "Welcome to Express JS",
  });
});

router.get("/:type", (req, res) => {
  const filePath = "dataJson.json";

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading JSON file:", err);
      res.status(500).json({ error: "Internal server error" });
      return;
    }

    try {
      const jsonData = JSON.parse(data);
      const dataType = req.params.type

      switch (dataType) {
        case "users":
          res.json(jsonData.users);
          break;
        case "products":
          res.json(jsonData.products);
          break;
        case "messages":
          res.json(jsonData.messages);
          break;

        default:
            res.status(404).json({error: 'pls chose : /users , /products , /messages'});
      }
    } catch (error) {
      console.error("Error parsing JSON:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
});

// router.get("/product/:id", (req, res) => {
//   console.log(req.query);
//   res.json({
//     id: req.params.id,
//   });
// });

// router.get("/:category/:tag", (req, res) => {
//   const { category, tag } = req.params;
//   res.json({
//     category: category,
//     tag: tag,
//   });
// });
module.exports = router;
