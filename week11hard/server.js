let express = require("express");
let app = express();
let data = require("./models/employees.json");
app.get("/employees", (req, res) => {
  if (!data) {
    res.status(404).send(`Couldnt find the students`);
  }
  res.send(data);
});
app.get("/employees/:id", function (req, res) {
  const sData = data.students.find(function (student) {
    return parseInt(req.params.id) === student.id;
  });
  if (!sData) {
    res.status(404).send(`Couldnt find the student id`);
  }
  res.send(sData);
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
