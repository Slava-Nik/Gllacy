var background=document.querySelector(".container");
var toogle1=document.querySelector("label[for=toogle1]");
var toogle2=document.querySelector("label[for=toogle2]");
var toogle3=document.querySelector("label[for=toogle3]");
var title1=document.querySelector(".slide1");
var title2=document.querySelector(".slide2");
var title3=document.querySelector(".slide3");
var overlay=document.querySelector(".overlay");
var form=document.querySelector(".form-feedback");
var userName=form.querySelector(".user-name");
var formOpen=document.querySelector(".adress-block a");
var formClose=form.querySelector(".form-close");

toogle1.addEventListener("click",function(event1) {
  console.log("Клик по переключателю 1");
  background.classList.remove("background-slide2");
  background.classList.remove("background-slide3");
  background.classList.add("background-slide1");
  title2.classList.add("hidden");
  title3.classList.add("hidden");
  title1.classList.remove("hidden");

});

toogle2.addEventListener("click",function(event2) {
  console.log("Клик по переключателю 2");
  background.classList.remove("background-slide1");
  background.classList.remove("background-slide3");
  background.classList.add("background-slide2");
  title1.classList.add("hidden");
  title3.classList.add("hidden");
  title2.classList.remove("hidden");
});

toogle3.addEventListener("click",function(event3) {
  console.log("Клик по переключателю 3");
  background.classList.remove("background-slide1");
  background.classList.remove("background-slide2");
  background.classList.add("background-slide3");
  title1.classList.add("hidden");
  title2.classList.add("hidden");
  title3.classList.remove("hidden");
});

formOpen.addEventListener("click",function(open)
{
  open.preventDefault();
  overlay.classList.remove("hidden");
  form.classList.remove("hidden");
  userName.focus();
});

formClose.addEventListener("click",function(close1)
{
  form.classList.add("hidden");
  overlay.classList.add("hidden");
});

window.addEventListener("keydown",function(close2)
{
  if(close2.keyCode===27)
    {
      if(!form.classList.contains("hidden"))
      {
        form.classList.add("hidden");
        overlay.classList.add("hidden");
      }
    }
});
