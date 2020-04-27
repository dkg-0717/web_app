import "preloadjs/lib/preloadjs.js";
import store from "@/store";

export default class LoadMedia {
  constructor(imgs) {
    this.loadmedia = window.createjs;
    this.queue = new this.loadmedia.LoadQueue();
    this.imgs = imgs;
    this.manifest = [];
    this.createArrayImage();
  }

  initQueue() {
    return new Promise(resolve => {
      this.queue.loadManifest(this.manifest);
      this.queue.addEventListener("complete", () => {
        resolve(this.getBlob());
        store.dispatch("isLoading", false);
      });
    });
  }

  getBlob() {
    return this.imgs.map(img => this.queue.getResult(img));
  }

  createElements(cont, callback) {
    let container = document.querySelector(cont);
    this.getBlob().forEach((element, index) => {
      element.setAttribute("val", index);
      element.addEventListener("click", callback);
      container.appendChild(this.createDivs(element, index));
    });
  }

  createDivs(image, index) {
    let div = document.createElement("div");
    div.classList = `s6_item-${index + 1} item`;
    div.append(image);
    return div;
  }

  createArrayImage() {
    let index = store.getters.getIndex;
    this.manifest = this.imgs.map(img => ({
      id: img,
      src: require(`../../assets/section-content/S${index}/${img}.png`),
      type: this.loadmedia.AbstractLoader.BINARY
    }));
  }
}
