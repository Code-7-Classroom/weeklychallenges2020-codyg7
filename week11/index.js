let express = require("express");
let app = express();
let data = require("./models/employees.json");

app.get("/employees", (req, res) => {
  if (!data) {
    res.status(404).send(`Couldnt find the employees`);
  }
  res.send(data);
});
app.get("/employees/:Employeeid", function (req, res) {
  const eData = data.employee.find(function (employee) {
    return parseInt(req.params.id) === employee.Employeeid;
  });
  if (!eData) {
    res.status(404).send(`Couldnt find the employees id`);
  }
  res.send(eData);
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
