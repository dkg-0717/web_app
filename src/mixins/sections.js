import gsap from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";

gsap.registerPlugin(CSSPlugin);

export default {
  data() {
    return {
      tl: null,
      txtConfig: {
        duration: 1,
        autoAlpha: 0,
        y: -10
      },
      itemsConfig: {
        duration: 2,
        autoAlpha: 0,
        scale: 0,
        ease: "elastic.inOut",
        onComplete: null
      },
      imageConfig: {
        duration: 1,
        autoAlpha: 0,
        scale: 0,
        ease: "elastic.inOut",
        onComplete: null
      }
    };
  },
  created() {
    this.tl = gsap.timeline();
  },
  methods: {
    badResponse(elem) {
      var tl = gsap.timeline();
      tl.to(elem, 0.1, { x: 30 });
      tl.to(elem, 3, {
        x: 0,
        color: "#ef6574",
        ease: "elastic(0.9, 0.1)",
        onCompleteParams: [elem],
        onComplete: function(elem) {
          elem.style.color = "black";
        }
      });
    },
    removeBlink(elem) {
      elem.classList.remove("blink");
    },
    addBlink(elem) {
      elem.classList.add("blink");
    },
    forceFileDownload(response, file) {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", file); //or any other extension
      document.body.appendChild(link);
      link.click();
    },
    openFile(event) {
      let file = event.target.getAttribute("val");
      window.open(`./${file}.pdf`, "_blank");
      this.removeBlink(event.target);
      this.canGo();
    },
    getAttribute(elem, attr) {
      return elem.getAttribute(attr);
    },
    resize() {
      window.scrollTo(0, 0);
      let elem = document.documentElement || document.scrollingElement;
      let main = document.querySelector("main");
      main.style.height = `${elem.clientHeight}px`;
    },
    async setImageUrl() {
      let response = await this.loadmedia.initQueue();
      return new Promise(resolve => {
        let imgs = Object.values(this.$refs);
        response.forEach((elem, index) => {
          var blob = new Blob([elem], { type: "img" });
          var urlCreator = window.URL || window.webkitURL;
          var imgUrl = urlCreator.createObjectURL(blob);
          imgs[index].src = imgUrl;
        });
        resolve();
      });
    },
    animationPage() {
      let elems = document.querySelectorAll(".el");
      let fn = this.customCallback ? this.customCallback() : null;
      fn ? (this.itemsConfig.onComplete = fn) : (this.itemsConfig = this.canGo);
      [...elems].forEach(elem => {
        if (elem.classList.contains("txt")) {
          this.tl.from(elem, this.txtConfig);
        }
        if (elem.classList.contains("item")) {
          this.tl.from(elem, this.itemsConfig, "-=1.7");
        }
        if (elem.classList.contains("image")) {
          this.tl.from(elem, this.imageConfig);
        }
      });
    }
  }
};
