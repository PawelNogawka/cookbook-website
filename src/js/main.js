const button = document.querySelector(".card__btn");

button.addEventListener("click", function () {
  document.querySelector(".card").classList.toggle("change");
});




//sticky header

window.addEventListener("scroll",function(){

  const header = document.querySelector(".header")
  if(window.scrollY > 0){
       header.classList.add("sticky")
  }
  else{
    header.classList.remove("sticky")
  }
})


//mobile nav

const burger = document.querySelector(".nav__btn")

burger.addEventListener("click",function(){
  const nav = document.querySelector(".nav--mobile");
  const links = document.querySelectorAll(".nav__link--mobile")
 
  nav.classList.toggle("active")

  links.forEach(link => {
    link.addEventListener("click",function(){
      nav.classList.remove("active")
    })
  })

})

// popup
const popup = document.querySelector(".newsletter__popup");

const closeBtn = document.querySelector(".newsletter__close");

const openBtn = document.querySelector(".newsletter__btn--open");

openBtn.addEventListener("click", function () {
  popup.style.display = "flex";
});

closeBtn.addEventListener("click", function () {
  popup.style.display = "none";
});


// accordion

const questions = document.querySelectorAll(".faq__question")


questions.forEach(question => {
     question.addEventListener("click",function(){
      this.parentElement.classList.toggle("active")
     })
});