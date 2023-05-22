setTimeout(function() {
  var loadingOverlay = document.getElementById('loading-overlay');
  loadingOverlay.style.display = 'none';
}, 2000);

var sideMenu = document.getElementById('side-menu');

function openMenu() {
  sideMenu.classList.remove('right-[-250px]');
  sideMenu.classList.add('right-0');
}

function closeMenu() {
  sideMenu.classList.remove('right-0');
  sideMenu.classList.add('right-[-250px]');
}

function scrollToBottom() {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth'
  });
}

    
//For Slider
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
var swiper = new Swiper(".mySwiper", {
navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
},
breakpoints: {
    300: {
      speed: 600,
      slidesPerView: 1,
      allowTouchMove : true,
    },
    650: {
      speed: 600,
      slidesPerView: 2,
      allowTouchMove : true,
    },
    860: {
        slidesPerView: 3,
        allowTouchMove : false,
        speed: 1000,
    },
    1080: {
        slidesPerView: 3,
        spaceBetween: 35,
        speed: 1000,
        allowTouchMove : false,
    }
  },
});
prevBtn.classList.add("disable");
// listen for Swiper's slide change event
swiper.on("slideChange", function () {
// enable/disable buttons based on Swiper's state

if (swiper.isBeginning) {
    prevBtn.classList.add("disable");
    prevBtn.classList.remove("enable");
} else {
    prevBtn.classList.add("enable");
    prevBtn.classList.remove("disable");
}

if (swiper.isEnd) {
    nextBtn.classList.add("disable");
    nextBtn.classList.remove("enable");
} else {
    nextBtn.classList.add("enable");
    nextBtn.classList.remove("disable");
}

});
// Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function dark_mode() {
  var element = document.body;
  var section = document.getElementById("sec");
  var anchor_func = document.getElementById("anchor");
  var bird_tran =document.getElementById("bird");
  element.classList.toggle("dark-mode");
  if(section.classList.contains('md:bg-black') || anchor_func.classList.contains('') || bird_tran.classList.contains('invert-0') )
  {
    section.classList.remove("md:bg-black");
    anchor_func.classList.add("invert");
    bird_tran.classList.replace("invert-0","invert-[.70]");
  }
  else
  {
    section.classList.add("md:bg-black");
    anchor_func.classList.remove("invert");
    bird_tran.classList.replace("invert-[.70]","invert-0");
  }
}