// --- Form Validation ---
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  let valid = true;

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;

  if (name.trim() === "") {
    document.getElementById("nameError").innerText = "Name is required!";
    valid = false;
  } else {
    document.getElementById("nameError").innerText = "";
  }

  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    document.getElementById("emailError").innerText = "Enter a valid email!";
    valid = false;
  } else {
    document.getElementById("emailError").innerText = "";
  }

  if (valid) alert("Form Submitted Successfully!");
});

// --- To-Do List Functions ---
function addTask() {
  let taskInput = document.getElementById("taskInput");
  if (taskInput.value === "") return;

  let li = document.createElement("li");
  li.innerHTML = taskInput.value + " <button onclick='removeTask(this)'>Delete</button>";

  document.getElementById("taskList").appendChild(li);
  taskInput.value = "";
}

function removeTask(btn) {
  btn.parentElement.remove();
}
