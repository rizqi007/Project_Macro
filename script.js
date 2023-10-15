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

function confirmInput() {
  fname = document.forms[0].fname.value;
  alert(
    "Terimakasih " +
      fname +
      " telah memesan produk kami, pesanan anda sudah diteruskan ke agen kami mohon tunggu."
  );
}
