const close = document.getElementById("close");
const min = document.getElementById("min");
const max = document.getElementById("max");
const index = document.getElementById("text");
const home = document.getElementById("home");
const about = document.getElementById("about");
const works = document.getElementById("works");
const contacts = document.getElementById("contacts");
const img = document.getElementById("junarie");
const zero = document.getElementById("home.text");
const one = document.getElementById("about.text");
const two = document.getElementById("works.text");
const three = document.getElementById("contacts.text");
const aboutme = document.getElementById("aboutme");
const myworks = document.getElementById("myworks");
const socmed = document.getElementById("socmed");

function visit() {
  window.location = "index.html";
}

home.addEventListener("click", (event) => {
  aboutme.style.display = "none";
  myworks.style.display = "none";
  socmed.style.display = "none";
  index.style.display = "block";
  img.style.visibility = "hidden";
});

about.addEventListener("click", (event) => {
  aboutme.style.display = "block";
  index.style.display = "none";
  myworks.style.display = "none";
  socmed.style.display = "none";
  img.src = "https://file.garden/ZYwGFY8EZxs65XRq/bust.png";
  img.style.visibility = "visible";
});

works.addEventListener("click", (event) => {
  myworks.style.display = "block";
  index.style.display = "none";
  aboutme.style.display = "none";
  socmed.style.display = "none";
  img.src = "https://file.garden/ZYwGFY8EZxs65XRq/junarie.png";
  img.style.visibility = "visible";
});

contacts.addEventListener("click", (event) => {
  aboutme.style.display = "none";
  index.style.display = "none";
  myworks.style.display = "none";
  socmed.style.display = "block";
  img.style.visibility = "hidden";
});

three.addEventListener("click", (event) => {
  aboutme.style.display = "none";
  index.style.display = "none";
  myworks.style.display = "none";
  socmed.style.display = "block";
  img.style.visibility = "hidden";
});

two.addEventListener("click", (event) => {
  myworks.style.display = "block";
  index.style.display = "none";
  aboutme.style.display = "none";
  socmed.style.display = "none";
  img.src = "https://file.garden/ZYwGFY8EZxs65XRq/junarie.png";
  img.style.visibility = "visible";
});

one.addEventListener("click", (event) => {
  aboutme.style.display = "block";
  index.style.display = "none";
  myworks.style.display = "none";
  socmed.style.display = "none";
  img.src = "https://file.garden/ZYwGFY8EZxs65XRq/bust.png";
  img.style.visibility = "visible";
});

zero.addEventListener("click", (event) => {
  aboutme.style.display = "none";
  myworks.style.display = "none";
  socmed.style.display = "none";
  index.style.display = "block";
  img.style.visibility = "hidden";
});

close.addEventListener("click", (event) => {
    visit();
});

min.addEventListener("click", (event) => {
    visit();
});
