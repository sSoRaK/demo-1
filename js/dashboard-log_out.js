let btnLogOut = document.querySelector(".btnLogOut");
btnLogOut.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = "login.html";
  localStorage.removeItem("UserLogin");
});
function warnLogin() {
  let warnLogin = localStorage.getItem("UserLogin");
  if (warnLogin === null) {
    window.location.href = "login.html";
  }
}
window.onload = warnLogin();
