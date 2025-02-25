function clickMe() {
  window.scrollTo(0, 1008);
}

var target = document.querySelectorAll('#about');
var btnPopClose = document.querySelectorAll('.pop_wrap .btn_close');
var targetID;

// 팝업 열기
for(var i = 0; i < target.length; i++){
  target[i].addEventListener('click', function(){
    targetID = this.getAttribute('href');
    document.querySelector(targetID).style.display = 'block';
  });
}

// 팝업 닫기
for(var j = 0; j < target.length; j++){
  btnPopClose[j].addEventListener('click', function(){
    this.parentNode.parentNode.style.display = 'none';
  });
}


document.addEventListener("DOMContentLoaded", function() {
  const image = document.querySelectorAll(".myImg");
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal_content");
  const span = document.querySelector(".close");

//모달창 띄우기
image.forEach(img => {
   img.addEventListener("click", function() {
      modal.style.display = "block";
      modalImg.src = this.src;
   });
});

//모달창 닫기
span.addEventListener("click", function() {
    modal.style.display = "none";
  });
});