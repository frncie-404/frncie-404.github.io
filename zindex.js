const ie = document.getElementById("ie");
const close = document.getElementById("close");
const min = document.getElementById("min");
const max = document.getElementById("max");
const popup = document.getElementById("popup");
const index = document.getElementById("text");
const home = document.getElementById("home");
const about = document.getElementById("about");
const works = document.getElementById("works");
const contacts = document.getElementById("contacts");
const img = document.getElementById("me");
const zero = document.getElementById("home.text");
const one = document.getElementById("about.text");
const two = document.getElementById("works.text");
const three = document.getElementById("contacts.text");
const aboutme = document.getElementById("aboutme");
const myworks = document.getElementById("myworks");
const socmed = document.getElementById("socmed");

function visit() {
  window.location = "fullscreen";
}

ie.addEventListener("click", (event) => {
  popup.style.display = "block";
});

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
  socmed.style.display = "block";
  aboutme.style.display = "none";
  index.style.display = "none";
  myworks.style.display = "none";
  img.style.visibility = "hidden";
});

three.addEventListener("click", (event) => {
  socmed.style.display = "block";
  aboutme.style.display = "none";
  index.style.display = "none";
  myworks.style.display = "none";
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
  aboutme.style.display = "none"
  myworks.style.display = "none";
  socmed.style.display = "none";
  index.style.display = "block"
  popup.style.display = "none";
  img.style.visibility = "hidden";
});

min.addEventListener("click", (event) => {
  popup.style.display = "none";
})

max.addEventListener("click", (event) => {
  visit();
})
