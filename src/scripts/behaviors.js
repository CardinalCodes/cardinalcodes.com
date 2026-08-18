/* Comportements globaux (toutes sections) :
   état du header + barre de progression, reveal-on-scroll,
   spotlight curseur sur les cartes. */

/* ---------- Header state + scroll progress ---------- */
var head = document.getElementById("siteHead");
var progressBar = document.getElementById("progressBar");
var scrollTicking = false;
function onScroll(){
  var y = window.scrollY;
  head.classList.toggle("scrolled", y > 8);
  var max = document.documentElement.scrollHeight - window.innerHeight;
  progressBar.style.transform = "scaleX(" + (max > 0 ? y / max : 0) + ")";
  scrollTicking = false;
}
window.addEventListener("scroll", function(){
  if (!scrollTicking){ scrollTicking = true; requestAnimationFrame(onScroll); }
}, { passive: true });
onScroll();

/* ---------- Reveal on scroll (staggered) ---------- */
var reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
var revealEls = document.querySelectorAll("[data-reveal]");
if ("IntersectionObserver" in window && !reducedMotion){
  var revealIO = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if (entry.isIntersecting){
        entry.target.classList.add("is-visible");
        revealIO.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
  revealEls.forEach(function(el){ revealIO.observe(el); });
} else {
  revealEls.forEach(function(el){ el.classList.add("is-visible"); });
}

/* ---------- Spotlight (fine pointers only) ---------- */
if (matchMedia("(hover: hover) and (pointer: fine)").matches){
  var cards = document.querySelectorAll(".card");
  cards.forEach(function(card){
    card.addEventListener("pointermove", function(e){
      var r = card.getBoundingClientRect();
      card.style.setProperty("--mx", (e.clientX - r.left) + "px");
      card.style.setProperty("--my", (e.clientY - r.top) + "px");
    });
  });
}
