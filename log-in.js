// NAVBAR
let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".navbar").classList.remove("hide");
  } else {
    document.querySelector(".navbar").classList.add("hide");
  }
  prevScrollpos = currentScrollPos;
}

$(document).ready(function () {
  let remember = localStorage.getItem("remember");
  if (remember) {
    window.location.href = "get-access.html";
  }
  $("#login_form").submit(function (x) {
    let username = $("#username").val();
    let password = $("#password").val();
    if (username == "bongrevilla@gmail.com" && password == "budots") {
      let remember_me = $("#remember_me").prop("checked");
      if (remember_me) {
        localStorage.setItem("remember", remember_me);
      }
      window.location.href = "get-access.html";
    } else {
      alert("Incorrect Email or Password!");
    }
    x.preventDefault();
  });
});