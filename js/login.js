// add userSystems localStorage
// const userSystems = [
//   { email: "user1@gmail.com", password: "123" },
//   { email: "admin01@gmail.com", password: "111" },
// ];
// localStorage.setItem("UserSystems", JSON.stringify(userSystems));
const userSystems = JSON.parse(localStorage.getItem("UserSystems")) || [];
function checkUserExist(email, password) {
  //   for (let i = 0; i < userSystems.length; i++) {
  //     if (userSystems[i].email == email && userSystems[i].password == password) {
  //       return true;
  //     }
  //   }
  //   return false;
  for (const user of userSystems) {
    const storedEmail = user.email;
    const storedPassWord = user.password;
    if(email === storedEmail && password === storedPassWord){
        return true;
    }
  }
  return false;
}

let btnLogin = document.querySelector(".btnLogin");
btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  let userEmail = document.querySelector("#email").value;
  let userPassword = document.querySelector("#password").value;
  let checkLogin = checkUserExist(userEmail, userPassword);
  if (checkLogin) {
    localStorage.setItem("UserLogin", userEmail);
    window.location.href = "dashboard.html";
  } else {
    document.querySelector(".btnLogin").style.marginTop = "0px";
    document.querySelector(".alert-text").style.display = "block";
  }
});
