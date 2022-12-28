(function () {
  document.querySelector(".menu").addEventListener("click", () => {
    document.querySelector(".modal").style.display = "block";
    document.querySelectorAll(".logo, .menu, .article, .aside, .section").forEach((item) =>
      item.classList.add("blur"));
  })
  document.querySelector(".closeBtn").addEventListener("click", () => {
    document.querySelector(".modal").style.display = "none";
    document.querySelectorAll(".logo, .menu, .article, .aside, .section").forEach((item) =>
      item.classList.remove("blur"));
  })
})();