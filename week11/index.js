let express = require("express");
let app = express();
let data = require("./public/employees.json");

app.get("/employees", (req, res) => {
  if (!data) {
    res.status(404).send(`Couldnt find the employees`);
  }
  res.send(data);
});
app.get("/employees/:Employeeid", function (req, res) {
  const sData = data.employee.find(function (employee) {
    return parseInt(req.params.id) === employee.id;
  });
  if (!sData) {
    res.status(404).send(`Couldnt find the employees id`);
  }
  res.send(sData);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
