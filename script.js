// -----------------------------
// Offer Bar Close Button
// -----------------------------
const offerBar = document.querySelector(".offer-bar");
const offerClose = document.getElementById("offer-close");

offerClose?.addEventListener("click", () => {
  offerBar.style.display = "none";
});

// -----------------------------
// Side Navbar Toggle
// -----------------------------
const sideNavToggle = document.getElementById("side-navbar-activate");
const sideNavClose = document.getElementById("side-navbar-close");
const sideNavbar = document.querySelector(".side-navbar");

sideNavToggle?.addEventListener("click", () => {
  sideNavbar.style.marginLeft = "0";
});

sideNavClose?.addEventListener("click", () => {
  sideNavbar.style.marginLeft = "-60%";
});

// -----------------------------
// Image Slider
// -----------------------------
const sliderLeft = document.getElementById("slider-left-activate");
const sliderRight = document.getElementById("slider-right-activate");
const sliderContainer = document.querySelector(".slider-image-container");
const sliderImages = sliderContainer?.querySelectorAll('.slider-image') || [];
let currentSlide = 0;
const totalSlides = sliderImages.length;

const updateSlider = () => {
  sliderContainer.style.marginLeft = `-${currentSlide * 100}vw`;
};

sliderRight?.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateSlider();
});

sliderLeft?.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateSlider();
});

// -----------------------------
// Like Button Toggle (Heart)
// -----------------------------
const likeButtons = document.querySelectorAll(".like-button");

likeButtons.forEach(btn => {
  btn.addEventListener("click", (e) => {
    const heart = e.target;
    const isBlack = heart.src.includes("blackheart");
    heart.src = isBlack ? "img/icons/redheart.png" : "img/icons/blackheart.png";
  });
});

// -----------------------------
// Scroll Animation Reveal
// -----------------------------
window.addEventListener("scroll", () => {
  const elements = document.querySelectorAll(".initial-scroll-animate");
  const windowHeight = window.innerHeight;

  elements.forEach(el => {
    const elTop = el.getBoundingClientRect().top;
    if (windowHeight > elTop - 100) {
      el.classList.remove("reveal-scroll-animate");
    }
  });
});

// -----------------------------
// Product Filter by Tags
// -----------------------------
const currentFilter = {
  season: 'all',
  color: 'all',
  arrival: 'all'
};

const filterBy = (category, value) => {
  currentFilter[category] = value;
  const cards = document.querySelectorAll('.product-card');

  cards.forEach(card => {
    const matchSeason = currentFilter.season === 'all' || card.dataset.season === currentFilter.season;
    const matchColor = currentFilter.color === 'all' || card.dataset.color === currentFilter.color;
    const matchArrival = currentFilter.arrival === 'all' || card.dataset.arrival === currentFilter.arrival;

    card.style.display = (matchSeason && matchColor && matchArrival) ? 'block' : 'none';
  });
};







