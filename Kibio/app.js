let items = document.querySelectorAll(".arrow-key");

window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "w":
      items[0].classList.add("active");
      break;
    case "s":
      items[2].classList.add("active");
      break;
    case "d":
      items[3].classList.add("active");
      break;
    case "a":
      items[1].classList.add("active");
      break;

    default:
      break;
  }
});
window.addEventListener("keyup", (e) => {
  switch (e.key) {
    case "w":
      items[0].classList.remove("active");
      break;
    case "s":
      items[2].classList.remove("active");
      break;
    case "d":
      items[3].classList.remove("active");
      break;
    case "a":
      items[1].classList.remove("active");
      break;

    aefault:
      break;
  }
});
