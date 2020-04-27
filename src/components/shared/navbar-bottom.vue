<template>
  <footer>
    <button class="bottom-button first" @click.prevent="next" v-if="isEnd">
      Siguiente
    </button>
  </footer>
</template>
<script>
import sections from "@/mixins/sections";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "navbar-bottom",
  mixins: [sections],
  computed: {
    ...mapGetters(["isEnd"])
  },
  methods: {
    ...mapActions(["increment"]),
    next() {
      this.resize();
      this.increment();
    }
  }
};
</script>

<style scoped>
footer {
  width: 100%;
  display: flex;
  justify-content: center;
}
.bottom-button {
  box-sizing: border-box;
  appearance: none;
  background-color: rgba(130, 221, 206, 0.8);
  border: 2px solid red;
  border-radius: 0.6em;
  cursor: pointer;
  display: flex;
  align-self: center;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1;
  margin: 20px;
  padding: 1em 3em;
  text-decoration: none;
  text-align: center;
  font-family: "Brandon-reg", system-ui;
  font-weight: 700;
}
.bottom-button:active {
  transform: scale(0.9);
}
.first {
  border-radius: 3em;
  border-color: rgba(130, 221, 206, 0.8);
  color: #fff;
}
</style>
