/*==========================================
   FEJE STUDIO
   FARHAN HADDADI
==========================================*/

// Gallery

const gallery = document.getElementById("gallery");

function loadGallery(folder, count) {

    gallery.innerHTML = "";

  if(folder==="portfolio/banner"){

gallery.innerHTML=`

<div class="swiper bannerSwiper">

<div class="swiper-wrapper">

${Array.from({length:8},(_,i)=>`

<div class="swiper-slide">

<img src="assets/portfolio/banner/${i+1}.jpg">

</div>

`).join("")}

</div>

<div class="swiper-button-next"></div>

<div class="swiper-button-prev"></div>

<div class="swiper-pagination"></div>

</div>

`;

new Swiper(".bannerSwiper",{

effect:"coverflow",

grabCursor:true,

centeredSlides:true,

slidesPerView:"auto",

loop:true,

speed:900,

spaceBetween:0,

keyboard:true,

mousewheel:true,

autoplay:{

delay:3500,

disableOnInteraction:false

},

coverflowEffect:{

rotate:0,

stretch:0,

depth:300,

modifier:2,

scale:0.85,

slideShadows:false

},

pagination:{

el:".swiper-pagination",

clickable:true

},

navigation:{

nextEl:".swiper-button-next",

prevEl:".swiper-button-prev"

}

});

return;

}
   
   for (let i = 1; i <= count; i++) {

        const card = document.createElement("div");

        card.className = "gallery-item fade";

        const img = document.createElement("img");

        img.src = `assets/${folder}/${i}.jpg`;

        img.loading = "lazy";

        img.alt = folder + " " + i;

        img.onclick = function () {

            openLightbox(this.src);

        }

        img.onerror = function(){

            card.innerHTML = `
            <div class="placeholder">
            IMAGE ${i}
            </div>
            `;

            card.onclick=function(){

                alert(image);

            }

        }

        card.appendChild(img);

        gallery.appendChild(card);

    }

    revealAnimation();

}

/*==========================================
          LIGHTBOX
==========================================*/

const lightbox = document.getElementById("lightbox");

const lightboxImg = document.getElementById("lightboxImg");

function openLightbox(src){

lightbox.style.display="flex";

lightboxImg.src=src;

}

lightbox.onclick=function(){

lightbox.style.display="none";

}

/*==========================================
        ESC CLOSE
==========================================*/

document.addEventListener("keydown",function(e){

if(e.key==="Escape"){

lightbox.style.display="none";

}

});

/*==========================================
     LOAD DEFAULT GALLERY
==========================================*/

window.onload=function(){

loadGallery("portfolio/logos",10);

}
/*==========================================
        SCROLL REVEAL
==========================================*/

const fades = document.querySelectorAll(".fade");

function revealAnimation() {

    const items = document.querySelectorAll(".fade");

    items.forEach(item => {

        const top = item.getBoundingClientRect().top;

        const trigger = window.innerHeight - 100;

        if (top < trigger) {

            item.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealAnimation);

/*==========================================
        HEADER EFFECT
==========================================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.padding = "12px 7%";

        header.style.background = "rgba(0,0,0,.90)";

        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.4)";

    } else {

        header.style.padding = "18px 7%";

        header.style.background = "rgba(0,0,0,.45)";

        header.style.boxShadow = "none";

    }

});

/*==========================================
        ACTIVE MENU
==========================================*/

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;

        const height = section.clientHeight;

        if (scrollY >= top) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/*==========================================
        PARALLAX HERO
==========================================*/

const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {

    let y = window.pageYOffset;

    hero.style.backgroundPositionY = y * 0.4 + "px";

});

/*==========================================
        SMOOTH APPEAR
==========================================*/

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.2

});

document.querySelectorAll(".fade").forEach(el => {

    observer.observe(el);

});

/*==========================================
        BACK TO TOP
==========================================*/

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "30px";
topBtn.style.left = "30px";
topBtn.style.width = "55px";
topBtn.style.height = "55px";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#fff";
topBtn.style.color = "#000";
topBtn.style.border = "none";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.fontSize = "22px";
topBtn.style.fontWeight = "bold";
topBtn.style.zIndex = "9999";

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};

/*==========================================
        PRELOADER
==========================================*/

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

/*==========================================
        END
==========================================*/

console.log("FEJE STUDIO Portfolio Loaded Successfully");
