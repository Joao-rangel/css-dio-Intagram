var index = 1;
carrousel();

function carrousel() {
  var images = document.querySelectorAll('.instagram-phone img');

  images[index - 1].style.display = "none";

  index++;
  if (index > images.length) {
    index = 1
  }

  images[index - 1].style.display = "block";

  setTimeout(carrousel, 2000);
}