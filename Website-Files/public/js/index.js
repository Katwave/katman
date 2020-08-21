const skillsContent = document.getElementsByClassName("skillsContent")[0];
const skills = document.getElementsByClassName("skills")[0];
const position = document.getElementsByClassName("position")[0];
const typeAnimation = document.getElementById("typeAnimation");

const positionText = ["Developer", "Designer"];

// Projects
const projects = document.getElementsByClassName("projects")[0];

// Resume
const resume = document.getElementsByClassName("resume")[0];

// Animation on scroll
document.addEventListener("scroll", () => {
  const scrollable = this.scrollY;
  console.log(scrollable);

  if (scrollable >= 150) {
    skillsContent.style = "animation: animateSkills 0.5s linear 1;";
  }
});

// Changing text and typing animation
let i = 0;
setInterval(() => {
  if (i >= positionText.length - 1) i = -1;
  else if (i == 1) {
    typeAnimation.style = `animation: type 8s steps(${
      11 + positionText[1].length
    }) infinite;`;
  } else if (i == 0) {
    typeAnimation.style = `animation: type 8s steps(${
      11 + positionText[0].length
    }) infinite;`;
  }
  i++;

  position.innerHTML = positionText[i];
}, 8000);

// Loading animation and Intro animation

const water = document.getElementsByClassName("water")[0];
const loadContainer = document.getElementsByClassName("onLoad")[0];
let waterHeight = 0;

const loading = document.getElementsByClassName("loading")[0];

const loadAnimation = new loader(loading);

window.addEventListener("load", (e) => {
  loadContainer.style = "display:none";
});
loadAnimation.startLoading();
loadAnimation.stopLoading();

// Cursor on mousemove

const cursor = document.getElementsByClassName("cursor")[0];
const body = document.getElementsByTagName("body")[0];

const cursorFollowed = new followMouse(cursor, body);

document.addEventListener("mousemove", (e) => {
  cursorFollowed.follow(e);
});
