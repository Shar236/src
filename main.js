//toggle button
const navMenu = document.getElementById("nav-menu")
const navLink = document.querySelectorAll(".nav-link")
const hamburger = document.getElementById("hamburger")

hamburger.addEventListener("click" , () => {
  navMenu.classList.toggle("left-[0]")
  hamburger.classList.toggle('ri-close-large-line')
})

navLink.forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.toggle("left-[0]")
    hamburger.classList.toggle;('ri-close-large-line')
  })
})

// scoll bar
const scrollup = ()=>{
  const scrollupbtn = document.getElementById("scroll-up")
  if(this.scrollY >= 250){
    scrollupbtn.classList.remove("-bottom-1/2")
    scrollupbtn.classList.add("bottom-4")
  } else{
    scrollupbtn.classList.add("-bottom-1/2")
    scrollupbtn.classList.remove("bottom-4")
  }
}
window.addEventListener("scroll", scrollup)

// change bg header

const scrollHeader = ()=>{
  const header = document.getElementById("navbar")

  if(this.scrollY >= 250){
    header.classList.add("border-b", "border-yellow-500")
  } else{
    header.classList.remove("border-b", "border-yellow-500")
  }
}
window.addEventListener("scroll", scrollHeader )

// swiper--------------
const swiper = new Swiper('.swiper', {
  // Optional parameters
  speed:400,
  spaceBetween:30,
  autoplay:{
    delay:3000,
    disableOnInteraction: false
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
  gabCursor:true,
  breakpoints:{
    640:{
      slidesPerView : 1
    },
    768:{
      slidesPerView : 2
    },
    1024:{
      slidesPerView : 3
    },
  }
});


// active link

const activeLink= () =>{
  const sections = docu.querySelectorAll('section')
  const navLinks = docu.querySelectorAll('nav-link')

  let current = "home"

  sections.forEach(section => {
    const sectionTop = section.offsetTop;

    if(this.scrollY >= sectionTop -60)
    {
      current = section.getAttribute("id")
    }
  })

  navLinks.forEach(item =>{
    item.classList.remove("active")

    if(item.href.includes(current)){
      item.classList.add("active")
    }

  })
}

window.addEventListener ("scroll" , activeLink)

// scroll animation

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  reset: true
})

sr.ScrollReveal(`.home_data, .about_top , .popular_card`)
sr.ScrollReveal(`.home_image`, {delay: 500, scale: 0.5})
sr.ScrollReveal(`.service_card` , {intervel: 100})

sr.ScrollReveal(`.about_leaf` , {delay:1000 , origin: " right"})
sr.ScrollReveal(`.about_item_1-content , .about_item_2-content` , {delay:1000 , origin: " right"})

sr.ScrollReveal(`.about_item_2-img , .about_item_1-img` , {delay:1000 , origin: " right"})
sr.ScrollReveal(`.review_leaf , footer_folar` , {delay:1000 , origin: " right"})