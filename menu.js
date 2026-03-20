// menu.js
let menuOpen = false;

function toggleNav() {
  const sidebar = document.getElementById("mySidebar");
  const main = document.getElementById("main");
  
  if (!menuOpen) {
    sidebar.style.left = "0";
    menuOpen = true;
  } else {
    sidebar.style.left = "-250px";
    menuOpen = false;
  }
}