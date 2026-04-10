let changed = false;

function sayHello() {
  alert("Welcome Samundra 🚀");
}

function changeText() {
  const title = document.querySelector("#home");

  if (changed === false) {
    title.innerText = "Welcome to my portfolio 😎";
    changed = true;
  } else {
    title.innerText = "Hello Samundra 👋";
    changed = false;
  }
let changed = false;

function sayHello() {
  alert("Welcome Samundra 🚀");
}

function changeText() {
  const title = document.querySelector("#home");

  if (!changed) {
    title.innerText = "Welcome to my portfolio 😎";
    changed = true;
  } else {
    title.innerText = "Hello Samundra 👋";
    changed = false;
  }
}

function toggleMode() {
  document.body.classList.toggle("light-mode");
}