var backdrop = document.querySelector(".backdrop");
var toggleMenu = document.querySelector(".hamburger-menu");
var showMenu = document.querySelector(".mobile__nav");
var checkout = document.querySelector(".checkout");
var toggleCheckout = document.querySelectorAll(".cart-button");

for (var i = 0; i < toggleCheckout.length; i++) {
    toggleCheckout[i].addEventListener("click", function () {
      checkout.style.display = "block";
      backdrop.style.display = "block";
    });
  }

toggleMenu.addEventListener("click", function () {
  backdrop.style.display = "block";
  showMenu.style.transform = "translateX(0)";
});

backdrop.addEventListener("click", function () {
  backdrop.style.display = "none";
  checkout.style.display = "none";
  showMenu.style.transform = "translateX(-100%)";
});

