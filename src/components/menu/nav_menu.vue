<template>
  <nav id="nav">
    <h1 class="nav_title title">Menú</h1>
    <ol>
      <li
        class="nav_item"
        v-for="(item, index) in items"
        :key="index"
        @click="changePage(item.page)"
      >
        {{ item.title }}
      </li>
    </ol>
    <button class="close-button first" @click="closeMenu">
      Cerrar
    </button>
  </nav>
</template>

<script>
import menuAnimation from "@/plugins/menu/menu.js";
import { mapActions } from "vuex";

export default {
  name: "nav_menu",
  data() {
    return {
      items: [
        { title: "Inteligencia emocional y gestión de talento", page: 1 },
        {
          title: "¿Cómo detectar que me conduzco con inteligencia emocional?",
          page: 3
        },
        { title: "Acompañando al talento", page: 4 },
        {
          title: "¿Cómo cuidar mi salud emocional en situaciones de crisis?",
          page: 5
        }
      ]
    };
  },
  mounted() {
    this.menu = new menuAnimation();
  },
  methods: {
    ...mapActions(["SET_INDEX"]),
    closeMenu() {
      this.menu.closeMenu();
    },
    changePage(page) {
      this.SET_INDEX(page);
      this.menu.closeMenu();
    }
  }
};
</script>

<style scoped>
#nav {
  display: none;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 9999;
  opacity: 0;
  bottom: 0;
  left: 50%;
  width: 40px;
  height: 40px;
  position: fixed;
  border-radius: 50%;
  pointer-events: none;
  color: #ffffff;
  background: rgba(255, 98, 9, 0.8);
  transform: translateX(-50%, -50%);
}

.nav_item {
  color: #000;
  visibility: hidden;
  text-align: left;
}

.title {
  color: rgba(255, 98, 9, 0.8);
}

ol li {
  font-size: 1.5em;
  cursor: pointer;
  margin-bottom: 1em;
}

li:hover {
  text-shadow: 2px 2px rgba(0, 0, 0, 0.5);
  transition: all 300ms;
}
.close-button {
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
  visibility: hidden;
}
.close-button:active {
  transform: scale(0.9);
}
.first {
  border-radius: 3em;
  border-color: rgba(130, 221, 206, 0.8);
  color: #fff;
}
</style>
