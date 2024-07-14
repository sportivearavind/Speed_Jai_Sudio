const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
    distance: "50px",
    origin : "bottom",
    duration: 1000,
};

const scrollRevealOptionLeft = {
    distance: "50px",
    origin : "left",
    duration: 1000,
};

const scrollRevealOptionRight = {
    distance: "50px",
    origin : "right",
    duration: 1000,
};

ScrollReveal().reveal(".services-card", {
    ...scrollRevealOption,
    interval: 500,
});

ScrollReveal().reveal(".nav-links li", {
    ...scrollRevealOption,
    interval: 200,
});

ScrollReveal().reveal(".test-card", {
    ...scrollRevealOption,
    interval: 200,
});

ScrollReveal().reveal(".footer-col:nth-child(2)", {
    ...scrollRevealOption,
    interval: 200,
});

ScrollReveal().reveal(".footer-col:nth-child(1)", {
  ...scrollRevealOptionLeft,
  interval: 200,
});

ScrollReveal().reveal(".footer-col:nth-child(3)", {
  ...scrollRevealOptionRight,
  interval: 200,
});