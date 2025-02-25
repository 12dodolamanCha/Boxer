function clickMe() {
  window.scrollTo(0, 1008);
}

document.addEventListener("DOMContentLoaded", function() {
  const image = document.querySelectorAll(".myImg");
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal_content");
  const span = document.querySelector(".close");

image.forEach(img => {
   img.addEventListener("click", function() {
      modal.style.display = "block";
      modalImg.src = this.src;
   });
});

span.addEventListener("click", function() {
    modal.style.display = "none";
  });
});