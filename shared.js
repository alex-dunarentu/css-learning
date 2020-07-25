var backdrop = document.querySelector(".backdrop");
var toggleMenu = document.querySelector(".hamburger-menu");
var showMenu = document.querySelector(".mobile__nav");
var checkout = document.querySelector(".checkout");
var toggleCheckout = document.querySelectorAll(".cart-button");
setTimeout(function () {
  showMenu.style.display = "block";
  if (checkout) {
    checkout.style.display = "block";
  }
}, 1);
if (toggleCheckout) {
  for (var i = 0; i < toggleCheckout.length; i++) {
    toggleCheckout[i].addEventListener("click", function () {
      checkout.style.transform = "translateY(0)";
      backdrop.style.display = "block";
    });
  }
}

toggleMenu.addEventListener("click", function () {
  backdrop.style.display = "block";
  showMenu.style.transform = "translateX(0)";
});

backdrop.addEventListener("click", function () {
  backdrop.style.display = "none";
  if (checkout) {
    checkout.style.transform = "translateY(-300%)";
  }
  showMenu.style.transform = "translateX(-100%)";
});
