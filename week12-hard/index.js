let express = require("express");
let Joi = require("joi");
let app = express();
let data = require("./models/employees.json");
app.use(express.json());

app.get("/employees", (req, res) => {
  res.send(data);
});

app.get("/employees/:id", (req, res) => {
  const employees = data.employee.find((d) => {
    return parseInt(req.params.id) === employees.id;
  });
  if (!employees) {
    res.status(404).send("The Employee with the given ID was not found");
    return;
  }
  res.send(employees);
});

app.post("/employees", (req, res) => {
  const { error } = validateEmployees(req.body);
  if (error) {
    return res.status(400).send(result.error.details[0].message);
  }
  const employee = {
    id: employees.length + 1,
    name: req.body.name,
  };
  employees.push(employee);
  res.send(employee);
});

app.put("/employees/:id", (req, res) => {
  const employees = data.find((d) => d.id === parseInt(req.params.id));
  if (!employees) {
    return res.status(404).send("The Employee with the given ID was not found");
  }
  const schema = {
    name: Joi.string().min(3).required(),
  };
  const result = Joi.validate(req.body, schema);

  const { error } = validateEmployees(req.body);
  if (error) {
    return res.status(400).send(result.error.details[0].message);
  }

  employees.name = req.body.name;
  res.send(employees);
});

function validateEmployees(employees) {
  const schema = {
    name: Joi.string().min(3).required(),
  };

  return Joi.validate(employees, schema);
}

app.delete("/employees/:id", (req, res) => {
  const employees = data.find((d) => d.id === parseInt(req.params.id));
  if (!employees) {
    return res.status(404).send("The Employee with the given ID was not found");
  }
  const index = employees.indexOf(employee);
  courses.splice(index, 1);

  res.send(employee);
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
