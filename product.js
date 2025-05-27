"use strict";

const ham = document.querySelector(".hamburger");
const nav = document.querySelector(".nav_container");
const close = document.querySelector(".close");

ham.addEventListener("click", () => {
  nav.style.display = "block";
  close.style.display = "block";
  ham.style.display = "none";
});

close.addEventListener("click", () => {
  nav.style.display = "none";
  close.style.display = "none";
  ham.style.display = "block";
});
