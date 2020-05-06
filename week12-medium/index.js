let express = require("express");
let app = express();
let data = require("./models/employees.json");

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

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
