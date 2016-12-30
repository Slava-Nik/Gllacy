var body = document.body;
var container = body.querySelector(".container");
var toggles = body.querySelector(".slider-toggles");
var sliderItems = body.querySelectorAll(".slider-item");

function changeSlide(event){
  var elem = event.target;
  var slideNum = Number( elem.getAttribute("toggle") );
  body.className = "";
  container.className = "container";
 sliderItems.forEach(
    function(elem){
      elem.classList.add("hidden");
  });

  switch(slideNum){

    case 1: {
      body.classList.add("body-background1");
      container.classList.add("background-slide1");
      sliderItems[0].classList.remove("hidden");
      break;
    }

    case 2: {
      body.classList.add("body-background2");
      container.classList.add("background-slide2");
      sliderItems[1].classList.remove("hidden");
      break;
    }

    case 3: {
      body.classList.add("body-background3");
      container.classList.add("background-slide3");
      sliderItems[2].classList.remove("hidden");
      break;
    }
  }
}

toggles.onclick = function(event){

  if(! (event.target.getAttribute("toggle") ) ) return;
  changeSlide(event);
};


var overlay=document.querySelector(".overlay");
var form=document.querySelector(".form-feedback");
var userName=form.querySelector(".user-name");
var formOpen = document.querySelector(".adress-block a");
var formClose=form.querySelector(".form-close");


formOpen.addEventListener("click",function(event){

  event.preventDefault();
  overlay.classList.remove("hidden");
  form.classList.remove("hidden");
  userName.focus();
});

formClose.addEventListener("click",function(){
  form.classList.add("hidden");
  overlay.classList.add("hidden");
});

window.addEventListener("keydown",function(event){
  if(event.keyCode===27)
    {
      if(!form.classList.contains("hidden"))
      {
        form.classList.add("hidden");
        overlay.classList.add("hidden");
      }
    }
});


