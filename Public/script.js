const one = document.querySelector('.section1');
const backBtn = document.querySelector('.backBtn');

window.addEventListener('scroll', () => {
  one.classList.toggle("scroll", window.scrollY>150);

  if(scrollY> 250){
    backBtn.classList.add("show");
  }
  else{
    backBtn.classList.remove("show");
  }
  backBtn.addEventListener("click",()=>{
    document.documentElement.scrollTop=0;
  })
});
