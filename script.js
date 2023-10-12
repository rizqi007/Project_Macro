const pages = document.querySelectorAll(".pagination .link");

function showPage(pageNumber) {
  pages.forEach((page) => page.classList.remove("active"));

  pages[pageNumber - 1].classList.add("active");
}

pages.forEach((page, index) => {
  page.addEventListener("click", () => {
    showPage(index + 1);
  });
});
