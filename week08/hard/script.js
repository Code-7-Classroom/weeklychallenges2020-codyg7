function getName() {
  return function () {
    let pi = {
      name: "Cody",
      ssn: "111-22-3333",
    };
    return pi.name;
  };
}
let dataSec = getName();
console.log(dataSec());
