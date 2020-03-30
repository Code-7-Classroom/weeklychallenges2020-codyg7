// filter
filterSelection("all");
function filterSelection(showAll) {
  var x = document.getElementsByClassName("filter--Div"); //gets all elements with this class name
  if (showAll == "all") showAll = ""; //taking the variable and confirming if it should change it to an empty string
  for (var i = 0; i < x.length; i++) {
    RemoveClass(x[i], "show"); //starts with items removed and then goes to the if statement
    if (x[i].className.indexOf(showAll) > -1) AddClass(x[i], "show"); //if an item is clicked calls AddClass function to show the item
  }
}

function AddClass(element, name) {
  var arr1 = element.className.split(" ");
  var arr2 = name.split(" ");
  for (var i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function RemoveClass(element, name) {
  //x[i] is element "Show" becomes name which is the class i want to remove
  var arr1 = element.className.split(" ");
  var arr2 = name.split(" "); //splits objects into different
  for (var i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" "); //rejoins everything
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("filter--btn");
if (btnContainer != null) {
  var btns = btnContainer.getElementsByClassName("filter--btns");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }
}
