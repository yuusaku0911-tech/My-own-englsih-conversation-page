const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".header-nav");
const navLinks = document.querySelectorAll(".nav-list a");
const navItems = document.querySelectorAll(".nav-list li");
const btns = document.querySelectorAll(".cta-btn");
const strengthItems = document.querySelectorAll(".strength-des-content");
const faqBoxes = document.querySelectorAll(".faq-box");

/* =========================
   FAQ 開閉 + ＋ － 切替
========================= */
faqBoxes.forEach(box => {
  const question = box.querySelector(".question");

  question.addEventListener("click", () => {
    box.classList.toggle("active");
  });
});

/* =========================
   フェードイン
========================= */
const animateFade = (entries, obs) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.animate(
        [
          {
            opacity: 0,
            filter: "blur(.4rem)",
            transform: "translateY(4rem)"
          },
          {
            opacity: 1,
            filter: "blur(0)",
            transform: "translateY(0)"
          }
        ],
        {
          duration: 2000,
          easing: "ease",
          fill: "forwards"
        }
      );
      obs.unobserve(entry.target);
    }
  });
};

const fadeObserver = new IntersectionObserver(animateFade);

const fadeElements = document.querySelectorAll(
  '.root-causes .content1, .root-causes .content2, .root-causes .content3, .approach-content .approach-method'
);

fadeElements.forEach((fadeElement) => {
  fadeObserver.observe(fadeElement);
});

/* =========================
   ボタン shine
========================= */
function shineEffect() {
  btns.forEach(btn => {
    btn.classList.add("shine");
  });

  setTimeout(() => {
    btns.forEach(btn => {
      btn.classList.remove("shine");
    });
  }, 800);
}

setInterval(shineEffect, 4000);

/* =========================
   Strength スライド
========================= */
const strengthObserver = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {

      strengthItems.forEach((item, index) => {
        item.animate(
          [
            { opacity: 0, transform: "translateX(60px)" },
            { opacity: 1, transform: "translateX(0)" }
          ],
          {
            duration: 800,
            delay: index * 400,
            easing: "ease-out",
            fill: "forwards"
          }
        );
      });

      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

if (strengthItems.length > 0) {
  strengthObserver.observe(strengthItems[0]);
}

/* =========================
   ハンバーガーメニュー
========================= */
function openMenu() {
  hamburger.classList.add("active");
  nav.classList.add("active");

  navItems.forEach((item, index) => {

    item.getAnimations().forEach(anim => anim.cancel());

    item.animate(
      [
        { opacity: 0, transform: "translateX(2rem)" },
        { opacity: 1, transform: "translateX(0)" }
      ],
      {
        duration: 400,
        delay: index * 150,
        easing: "ease",
        fill: "forwards"
      }
    );
  });
}


/* =========================
   Main Visual 左右Fade + Learning text
========================= */

const mainText = document.querySelector(".main-visual-text-wrapper");
const mainImage = document.querySelector(".main-visual-image");
const learningText = document.querySelector(".learning-text");

window.addEventListener("load", () => {

  if (mainText) {
    mainText.animate(
      [
        { opacity: 0, transform: "translateX(-100px)" },
        { opacity: 1, transform: "translateX(0)" }
      ],
      {
        duration: 1000,
        easing: "ease-out",
        fill: "forwards"
      }
    );
  }

  if (mainImage) {
    mainImage.animate(
      [
        { opacity: 0, transform: "translateX(100px)" },
        { opacity: 1, transform: "translateX(0)" }
      ],
      {
        duration: 1000,
        delay: 800,
        easing: "ease-out",
        fill: "forwards"
      }
    );
  }

  setTimeout(() => {
    if (learningText) {
      learningText.style.animationPlayState = "running";
    }
  }, 1800);

});

function closeMenu() {
  hamburger.classList.remove("active");
  nav.classList.remove("active");

  navItems.forEach((item, index) => {

    item.getAnimations().forEach(anim => anim.cancel());

    item.animate(
      [
        { opacity: 1, transform: "translateX(0)" },
        { opacity: 0, transform: "translateX(2rem)" }
      ],
      {
        duration: 300,
        delay: 300 * index,
        easing: "ease",
        fill: "forwards"
      }
    );
  });
}

hamburger.addEventListener("click", () => {
  if (nav.classList.contains("active")) {
    closeMenu();
  } else {
    openMenu();
  }
});

navLinks.forEach(link => {
  link.addEventListener("click", closeMenu);
});

/* =========================
   Voices スライド
========================= */

const voiceSwiper = new Swiper(".voices-list", {
  slidesPerView: 1, 
  slidesPerGroup: 1,
  spaceBetween: 30,
  loop: true, 
  loopAdditionalSlides: 2, 
  autoplay: {
    delay: 4000,
    disableOnInteraction: false
  },
  speed: 800,
  breakpoints: {
   
    768: {
      slidesPerView: 2,
    },
    
    1200: {
      slidesPerView: 3, 
    }
  }
});