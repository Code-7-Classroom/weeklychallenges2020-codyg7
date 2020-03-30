// Form Validation
const name = document.getElementById("name");
const form = document.getElementById("form");
const email = document.getElementById("email");
const errorElement = document.getElementById("error");

form.addEventListener("submit", function(e) {
  const messages = [];
  if (name.value === "" || name.value == null) {
    messages.push("name is required");
  }

  if (messages.length > 0) {
    errorElement.innerText = messages.join(", ");
  }

  if (email.value === "" || name.value == null) {
    messages.push("email is required");
  }

  if (messages.length > 0) {
    errorElement.innerText = messages.join(", ");
  }
  e.preventDefault();
});
