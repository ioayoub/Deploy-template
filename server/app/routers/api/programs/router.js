const express = require("express");

const router = express.Router();

const { sayHello, read, browse } = require("../../../controllers/programActions");

router.get("/", sayHello);

router.get("/all", browse)

router.get("/:id", read);

module.exports = router;
