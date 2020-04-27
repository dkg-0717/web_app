import gsap from "gsap";

export default {
  methods: {
    onPlayerStateChange(event) {
      if (event.data == 1 && !this.panStarted) {
        requestAnimationFrame(this.panVideo);
        this.panStarted = true;
      }
    },
    panVideo() {
      const yaw = ((performance.now() / 1000 / 20) * 360) % 360;
      const pitch = 20 * Math.sin(((2 * yaw) / 360) * 2 * Math.PI);
      this.$refs.youtube.player.setSphericalProperties({
        yaw: yaw,
        pitch: pitch
      });
      requestAnimationFrame(this.panVideo);
    },
    ready() {
      let video = document.getElementById("video");
      this.tl.add(this.animationVideo(video));
    },
    animationVideo(video) {
      return gsap.fromTo(video, { opacity: 0 }, { opacity: 1 });
    },
    playing() {
      this.canGo();
    }
  }
};
