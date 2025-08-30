// --- Theme toggle with localStorage ---
const root = document.body;
const saved = localStorage.getItem("theme") || "dark";
root.classList.toggle("light", saved === "light");

function toggleTheme(){
  const toLight = !root.classList.contains("light");
  root.classList.toggle("light", toLight);
  localStorage.setItem("theme", toLight ? "light" : "dark");
}
window.toggleTheme = toggleTheme;

// --- Mobile menu toggle ---
const links = document.querySelector(".links");
function toggleMenu(){
  links?.classList.toggle("open");
}
window.toggleMenu = toggleMenu;

// --- Active link based on URL ---
(function setActive(){
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".links a").forEach(a=>{
    const href = a.getAttribute("href");
    if((path === "" && href === "index.html") || href === path){
      a.classList.add("active");
    }
  });
})();
