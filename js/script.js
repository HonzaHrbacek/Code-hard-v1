"use strict";

// *** LOADER ***

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  setTimeout(function () {
    loader.classList.add("hidden");
  }, 5000);
});

// *** CLOSE COOKIE MESSAGE ***
const cookieMessage = document.getElementById("cookie-message");
const cookieBtn = document.querySelector(".btn--close-cookie");

if (cookieBtn) {
  cookieBtn.addEventListener("click", function () {
    console.log(cookieMessage);
    console.log(cookieBtn);

    cookieMessage.classList.add("hidden");
  });
}

// *** TYPEWRITER EFFECT ***
class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    // Current index of word
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullTxt = this.words[current];

    // Check if deleting
    if (this.isDeleting) {
      // Remove char
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      // Add char
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // Initial Type Speed
    let typeSpeed = 300;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    // If word is complete
    if (!this.isDeleting && this.txt === fullTxt) {
      // Make pause at end
      typeSpeed = this.wait;
      // Set delete to true
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      // Move to next word
      this.wordIndex++;
      // Pause before start typing
      typeSpeed = 1000;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

// Init On DOM Load
document.addEventListener("DOMContentLoaded", init);

// Init App
function init() {
  const txtElement = document.querySelector(".txt-type");
  const words = JSON.parse(txtElement.getAttribute("data-words"));
  const wait = txtElement.getAttribute("data-wait");
  // Init TypeWriter
  new TypeWriter(txtElement, words, wait);
}

// *** PARALLAX EFFECT ***
const parallax1 = document.getElementById("heading--primary");
const parallax2 = document.getElementById("heading--secondary");

window.addEventListener("scroll", function () {
  let offset = window.scrollY;

  parallax1.style.transform = `translateY(${offset * -1.2}px)`;
  parallax2.style.transform = `translateY(${offset * 1.5}px)`;

  let positionPara2 = parseFloat(parallax2.style.transform.split("(")[1]);
  // console.log(positionPara2);

  if (positionPara2 > 300) {
    parallax2.style.opacity = `0`;
    parallax2.style.display = `none`;
  } else if (positionPara2 > 250) {
    parallax2.style.opacity = `0.3`;
  } else if (positionPara2 > 180) {
    parallax2.style.opacity = `0.5`;
  } else if (positionPara2 > 100) {
    parallax2.style.opacity = `0.7`;
  } else {
    parallax2.style.opacity = `1`;
    parallax2.style.display = `block`;
  }
});

// *** SCROLL TOP BUTTON & NAVBAR BACKGROUND ***
window.addEventListener("scroll", function () {
  const scrollTopBtn = document.querySelector(".button__scroll-top");
  const navBar = document.querySelector(".navigation-wrapper");

  scrollTopBtn.classList.toggle("active", scrollY > 500);
  navBar.classList.toggle("dark-bg", scrollY > 400);
});

// this function is called in HTML using 'onlick' attribute of scrollTopBtn
const scrollToTop = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// *** NAVIGATION SCROLL BUTTONS ***

const navProjects = document.querySelector(".navigation__link--projects");
const projectsSection = document.querySelector("#projects");

navProjects.addEventListener("click", function (e) {
  e.preventDefault();

  // returns a DOMRect object providing information about the size of an element and its position relative to the viewport.
  const projectsCoordinates = projectsSection.getBoundingClientRect();
  // console.log(projectsCoordinates);

  // console.log(
  //   "Current position (x/y): ",
  //   window.pageXOffset,
  //   window.pageYOffset
  // );

  window.scrollTo({
    left: projectsCoordinates.left + window.pageXOffset,
    top: projectsCoordinates.top + window.pageYOffset,
    behavior: "smooth",
  });

  // Modern method, but not fully supported
  // projectsSection.scrollIntoView({ behavior: "smooth" });
});

const navAbout = document.querySelector(".navigation__link--about");
const aboutSection = document.querySelector("#about");

navAbout.addEventListener("click", function (e) {
  e.preventDefault();
  const aboutCoordinates = aboutSection.getBoundingClientRect();

  window.scrollTo({
    left: aboutCoordinates.left + window.pageXOffset,
    top: aboutCoordinates.top + window.pageYOffset,
    behavior: "smooth",
  });
});

const navContact = document.querySelector(".navigation__link--contact");
const contactSection = document.querySelector("#contact");

navContact.addEventListener("click", function (e) {
  e.preventDefault();
  const contactCoordinates = contactSection.getBoundingClientRect();

  window.scrollTo({
    left: contactCoordinates.left + window.pageXOffset,
    top: contactCoordinates.top + window.pageYOffset,
    behavior: "smooth",
  });
});
