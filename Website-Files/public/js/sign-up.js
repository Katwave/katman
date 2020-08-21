// Loading animation and Intro animation

const water = document.getElementsByClassName("water")[0];
const loadContainer = document.getElementsByClassName("onLoad")[0];
let waterHeight = 0;

const loading = document.getElementsByClassName("loading")[0];

const loadAnimation = new loader(loading);

window.addEventListener("load", (e) => {
  loadContainer.style = "display:none";
});

// Cursor on mousemove

const cursor = document.getElementsByClassName("cursor")[0];
const body = document.getElementsByTagName("body")[0];

const cursorFollowed = new followMouse(cursor, body);

document.addEventListener("mousemove", (e) => {
  cursorFollowed.follow(e);
});

// input animation

const input = document.getElementsByTagName("input");
const label = document.getElementsByTagName("label");

for (let i = 0; i < input.length; i++) {
  input[i].addEventListener("click", () => {
    label[i].style = "top: 0%";
  });
}

// Input validation

const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const submit = document.getElementById("submit");
const form = document.getElementsByTagName("form")[0];

const inputFields = [
  document.getElementById("name"),
  document.getElementById("email"),
  document.getElementById("password"),
  document.getElementById("confirmPassword"),
];

submit.addEventListener("click", (e) => {
  e.preventDefault();
  for (let i = 0; i < inputFields.length; i++) {
    if (inputFields[i].value.trim() == "") {
      e.preventDefault();
      form.action = "";
      inputFields[i].style = "border-bottom: 3px solid red";
    } else if (inputFields[2].value.length < 5 || inputFields[3].value.length) {
      e.preventDefault();
      inputFields[2].style = "border-bottom: 3px solid red";
      inputFields[3].style = "border-bottom: 3px solid red";
    } else if (inputFields[2].value != inputFields[3].value) {
      e.preventDefault();
      inputFields[2].style = "border-bottom: 3px solid red";
      inputFields[3].style = "border-bottom: 3px solid red";
    } else {
      form.action = "/thank-you-for-signing-up";
    }
  }
  console.log("pressed...");
});
