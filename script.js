if (sessionStorage.getItem("getStartedClicked")) {
  window.location.href = "beranda.html";
}

document
  .getElementById("getStartedLink")
  .addEventListener("click", function (event) {
    event.preventDefault();
    sessionStorage.setItem("getStartedClicked", "true");
    window.location.href = "beranda.html";
  });
