// NAVBAR
let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".navbar").classList.remove("hide");
  } else {
    document.querySelector(".navbar").classList.add("hide");
  }
  prevScrollpos = currentScrollPos;
}

// SLIDER TEXT
const sliderText = document.querySelector(".slider-text");
const spans = sliderText.querySelectorAll("span");
const totalWidth = sliderText.offsetWidth;
let spanWidth = 0;

spans.forEach((span) => {
  spanWidth += span.offsetWidth;
});

sliderText.innerHTML += sliderText.innerHTML;


const duration = (totalWidth + spanWidth) / 100; 
sliderText.style.animationDuration = duration + "s";

// CARD SELECTOR

const listItems = document.querySelectorAll('.list-item');
const cardImages = document.querySelectorAll('.card-image');

listItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.color = '#ff69b4';
        item.querySelector('::before').style.borderRightColor = '#ff69b4';
    });

    item.addEventListener('mouseout', () => {
        item.style.color = 'black';
        item.querySelector('::before').style.borderRightColor = '#333';
    });

    item.addEventListener('click', () => {
        const targetCard = item.dataset.card;
        cardImages.forEach(card => {
            if (card.id === targetCard) {
                card.classList.add('active');
            } else {
                card.classList.remove('active');
            }
        });
    });
});

// FADETEXT
const texts = document.querySelectorAll('#fade-text');

window.addEventListener('scroll', function() {
  texts.forEach((text, index) => {
    if (isElementInViewport(text)) {
      text.style.color = 'white';
    } else {
      text.style.color = 'gray';
    }
  });
});

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

texts.forEach((text, index) => {
  if (!isElementInViewport(text)) {
    text.style.color = 'gray';
  }
});

// PHONE 

const video = document.getElementById("my-video");
video.addEventListener("loadedmetadata", function() {
  const aspectRatio = this.videoWidth / this.videoHeight;
  const box = document.querySelector(".box");
  if (box.offsetWidth / aspectRatio > box.offsetHeight) {
    this.style.width = "100%";
    this.style.height = "auto";
  } else {
    this.style.width = "auto";
    this.style.height = "100%";
  }
});

// VIDEO SELECTOR

const phoneList1 = document.getElementById('phoneList1');
const phoneList2 = document.getElementById('phoneList2');
const phoneList3 = document.getElementById('phoneList3');

const video1 = document.getElementById('videophone1');
const video2 = document.getElementById('videophone2');
const video3 = document.getElementById('videophone3');

phoneList1.addEventListener('click', function() {
  video1.style.display = 'block';
  video2.style.display = 'none';
  video3.style.display = 'none';
});

phoneList2.addEventListener('click', function() {
  video1.style.display = 'none';
  video2.style.display = 'block';
  video3.style.display = 'none';
});

phoneList3.addEventListener('click', function() {
  video1.style.display = 'none';
  video2.style.display = 'none';
  video3.style.display = 'block';
});

function checkWindowSize() {
  var width = window.innerWidth;
  var navbar = document.getElementById("navbar");
  var navLinks = document.getElementById("nav-links");
  var navbarBrand = document.getElementById("nav-logo");
  var navButton = document.getElementById("nav-btn");

  if (width <= 375) {
    navbar.classList.remove("navbar-expand-lg");
    navbar.classList.add("navbar-expand-md");
    navLinks.classList.add("text-center");
    navbarBrand.classList.remove("ms-5");
    navButton.classList.add("text-center");
  } else {
    navbar.classList.remove("navbar-expand-md");
    navbar.classList.add("navbar-expand-lg");
    navLinks.classList.remove("text-center");
    navbarBrand.classList.add("ms-5");
    navButton.classList.remove("text-center");
  }
}

const toggleBtn = document.getElementById('toggle-btn');
const content = document.getElementById('content');

toggleBtn.addEventListener('click', () => {
  content.classList.toggle('show');
});

// LOG IN
