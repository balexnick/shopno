$("#openMenu").on("click", function (e) {
  $("#menu").css("right", "0");
  $(".cover").css("display", "block");
});
$(".cover").on("click", function (e) {
  $("#menu").css("right", "-30vw");
  $(".cover").css("display", "none");
});
$("#closeMenu").on("click", function (e) {
  $("#menu").css("right", "-30vw");
  $(".cover").css("display", "none");
});

var links = document.querySelectorAll(".nav-link");
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function (e) {
    if (!this.classList.contains("active")) {
      for (var i = 0; i < links.length; i++) {
        links[i].classList.remove("active");
      }
      this.classList.add("active");
    }
  });
}

var openServ = document.querySelectorAll(".open-serv");
for (var i = 0; i < openServ.length; i++) {
  openServ[i].addEventListener("click", function (e) {
    console.log(this.parentElement.parentElement.parentElement.children[1])
    this.parentElement.parentElement.parentElement.children[1].style.opacity =
      "1";
    this.parentElement.parentElement.style.opacity = "0";
  });
}

var closeServ = document.querySelectorAll(".close-serv");
for (var i = 0; i < closeServ.length; i++) {
  closeServ[i].addEventListener("click", function (e) {
    this.parentElement.style.opacity = "0";
    this.parentElement.parentElement.children[0].style.opacity = "1";
  });
}


var input = document.querySelectorAll(".form-control");
var button = document.querySelector(".subm");
var forma = document.forms[0];
var warn = document.querySelector(".warn")
button.addEventListener("click", function (e) {
  if (forma.name.value === "") {
    getWarn(forma.name.nextElementSibling);
    forma.name.nextElementSibling.style.top = "40px";
  }

  if (forma.subject.value === "") {
    getWarn(forma.subject.nextElementSibling);
    forma.subject.nextElementSibling.style.top = "82px";
  }


  if (forma.email) {
    if (forma.email.value === "") {
      getWarn(forma.email.nextElementSibling);
      forma.email.nextElementSibling.style.top = "123px";
    } else if (!forma.email.value.includes("@")) {
      getWarn(forma.children[6])
      forma.children[6].style.top = "123px";
    } else {
      forma.children[6].classList.remove("attention")
    }
  }


})
for (var i = 0; i < input.length; i++) {
  input[i].addEventListener("keyup", function (e) {
    if (this.nextElementSibling.classList.contains("attention")) {
      this.nextElementSibling.classList.remove("attention")
    }
  })
}

function getWarn(elem) {
  elem.classList.add("bounce")
  elem.classList.add("attention")
}


window.onload = function () {
  var scrolled;
  var timer;

  document.querySelector(".yakor").onclick = function () {
    console.log(window.pageYOffset)
    scrolled = window.pageYOffset
    scrollToTop();
  }

  function scrollToTop() {
    if (scrolled > 0) {
      window.scrollTo(0, scrolled)
      scrolled -= 250;
      timer = setTimeout(scrollToTop, 50);
    } else {
      clearTimeout(timer);
      window.scrollTo(0, 0);
    }
  }
}