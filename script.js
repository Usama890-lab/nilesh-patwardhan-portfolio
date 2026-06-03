document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll(".side-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelectorAll(".side-nav a").forEach((item) => item.classList.remove("active"));
    link.classList.add("active");
  });
});
