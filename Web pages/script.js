function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function swap(img) {
  if (img.className !== "full-size") img.className = "full-size";
  else img.className = "";
}