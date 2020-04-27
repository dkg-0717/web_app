import gsap from "gsap";

function menuAnimation() {
  var tl_menu,
    tl_ins,
    allInsignias,
    allIns,
    insforAnimate,
    nav,
    items,
    elem,
    newHeight;
  var instance = this;

  this.constructor = function() {
    insforAnimate = [];
    tl_ins = gsap.timeline();
    allIns = document.querySelectorAll(".ins");
    items = document.querySelectorAll(".nav_item");
    nav = document.getElementById("nav");
    elem = document.documentElement;
    newHeight = elem.clientHeight + "px";
    tl_menu = gsap.timeline({ onComplete: this.tlComplete });
  };

  this.run = function() {
    tl_menu
      .set(nav, { yPercent: -50, xPercent: -50, display: "flex" })
      .fromTo(nav, 0.5, { alpha: 1, bottom: 0 }, { bottom: "50%" })
      .to(nav, 0.2, {
        yPercent: 0,
        xPercent: 0,
        left: 0,
        bottom: 0,
        width: "100%",
        height: "100%",
        borderRadius: 0,
        backgroundColor: "#FFFFFF",
        pointerEvents: "auto"
      })
      .from(".nav_title", 0.5, { autoAlpha: 0, y: -100 })
      .staggerFrom(
        items,
        0.7,
        {
          autoAlpha: 0,
          scale: 0,
          ease: "Expo.easeOut"
        },
        0.2
      )
      .from(".close-button", 0.5, { autoAlpha: 0, y: 10 });
  };

  this.removeClass = function() {
    items.forEach(elem => elem.classList.remove("hide"));
  };

  this.closeMenu = function() {
    gsap.set(nav, { opacity: 0 });
    gsap.set(nav, {
      height: "40px",
      width: "40px",
      left: "50%",
      borderRadius: "50%",
      display: "none",
      backgroundColor: "rgb(255, 98, 9)",
      pointerEvents: "none"
    });
    gsap.set(items, { opacity: 1, scale: 1 });
    gsap.set(".nav_title", { opacity: 1 });
    gsap.set(".close-button", { opacity: 1 });
  };

  this.getinsigniaName = function() {
    return JSON.parse(localStorage.getItem("earned"));
  };

  this.tlComplete = async function() {
    insforAnimate = [];
    allInsignias = instance.getinsigniaName();
    if (allInsignias != null) {
      allIns.forEach(function(elem) {
        let found = allInsignias.includes(elem.id);
        if (found) {
          insforAnimate.push(elem);
        }
      });
      tl_ins.set(insforAnimate, { opacity: 1 });
      tl_ins.staggerFromTo(
        insforAnimate,
        2,
        { scale: 1 },
        { scale: 1.2, yoyo: true, repeat: -1 },
        0,
        0
      );
    }
  };

  this.stopIns = function() {
    tl_ins.kill();
  };

  this.constructor();
}

export default menuAnimation;
