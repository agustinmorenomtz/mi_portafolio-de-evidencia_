document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("toggle-mode");
  const body = document.body;

  const savedMode = localStorage.getItem("modo-oscuro");
  if (savedMode === "true") {
    body.classList.add("dark-mode");
    toggle.textContent = "☀️";
  }

  toggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    const isDark = body.classList.contains("dark-mode");
    toggle.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("modo-oscuro", isDark);
  });
});
