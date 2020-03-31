var tomsMass = 8;
var tomsHeight = 9;

var jerrysMass = 45;
var jerrysHeight = 10;

var tomsBmi = tomsMass / (tomsHeight * tomsHeight);
var jerrysBmi = jerrysMass / (jerrysHeight * jerrysHeight);

var tomsHigherBmi = tomsBmi > jerrysBmi;
console.log(`Is Toms\'s BMI higher than Jerry\'s BMI? ${tomsHigherBmi}`);
