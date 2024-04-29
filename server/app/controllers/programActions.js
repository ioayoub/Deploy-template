const programs = require("../data/programs.json");

const sayHello = (req, res) => {
  res.send("Hello Wilders");
};

const read = (req, res) => {
  const { id } = req.params;

  const parsedId = parseInt(id, 10);

  const program = programs.find((p) => p.id === parsedId);

  if (program) {
    res.json(program);
  } else {
    res.status(404).json({
      message: `Aucun élément ne correspond à l'id : ${id}`,
    });
  }
};

module.exports = { sayHello, read };
