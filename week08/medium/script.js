function cutPizzaSlices(slices) {
  function sharePizza(people) {
    var distributed = slices / people;
    return `Each person gets ${distributed} slices of pizza`;
  }
  console.log(sharePizza(2));
  console.log(sharePizza(3));
}
var sharePizza = cutPizzaSlices(8);
