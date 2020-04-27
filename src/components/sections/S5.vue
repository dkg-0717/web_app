<template>
  <div>
    <div class="row">
      <div class="col-sm-4 col-md-12  ">
        <h3 class="txt-title">
          ¿Cómo cuidar mi salud emocional en situaciones de crisis?
        </h3>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col-sm-12">
        <p>
          Gestionar talento es una tarea que supone cierto desgaste emocional
          por el contacto constante con diferentes personas y el alto nivel de
          servicio al cliente.
        </p>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col-sm-12">
        <p>
          Estar al frente de la dirección en una crisis demanda estabilidad
          emocional y habilidades de comunicación que pueden llevarnos al
          agotamiento.
        </p>
      </div>
    </div>

    <div class="row mt-5">
      <div class="col-sm-12">
        <p class="text-left">
          Para cuidar tu salud emocional procura:
        </p>
      </div>
    </div>

    <div class="row mt-5">
      <div class="col-sm-12 col-md-6 text-center">
        <img class="img-fluid" src="@/assets/images/P5/puzzle.png" alt="" />
        <p class="border-aqua">
          Recordar que tu trabajo es pieza clave en la organización.
        </p>
      </div>
      <div class="col-sm-12 col-md-6 text-center">
        <img class="img-fluid" src="@/assets/images/P5/woman.png" alt="" />
        <p class="border-orange">
          Establecer límites, está bien que no puedas solucionar todo.
        </p>
      </div>
    </div>

    <div class="row mt-5">
      <div class="col-sm-12 col-md-6 text-center">
        <img class="img-fluid" src="@/assets/images/P5/balloons.png" alt="" />
        <p class="border-purple">
          Crear redes de apoyo, si en algún momento te sientes rebasado, habla
          con alguien en quién confíes.
        </p>
      </div>
      <div class="col-sm-12 col-md-6 text-center">
        <img class="img-fluid" src="@/assets/images/P5/heart.png" alt="" />
        <p class="border-orange-hight">
          Dividir el trabajo de tu vida personal, a veces las cosas pueden ser
          complicadas pero tu vida es más que el trabajo.
        </p>
      </div>
    </div>

    <div class="row mt-5">
      <div class="col-sm-12">
        <p>
          Hay momentos en los que es necesarios comunicar noticias difíciles
          pero también hay aquellos en los que comunicamos noticias que traen
          beneficios a todos.
        </p>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col-sm-12">
        <p class="text-center final-text">
          Haz que tu actitud sea contagiosa y lidera la gestión de talento con
          una visión propositiva que transmita confianza a todos aquellos con
          los que te comunicas.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import gsap from "gsap";
import { mapActions } from "vuex";
import sections from "@/mixins/sections";

export default {
  name: "S2",
  mixins: [sections],
  data() {
    return {
      imgs: ["grupo", "download"],
      file: "Organigrama.pdf",
    };
  },
  async mounted() {
    this.animationPage();
  },
  methods: {
    ...mapActions(["canGo"]),
  },
};
</script>

<style scoped>
.border-orange {
  border-bottom: 2px solid #ff6b00;
}

.border-orange-hight {
  border-bottom: 2px solid #ff6b00;
}

.border-aqua {
  border-bottom: 2px solid #00c4b3;
}

.border-purple {
  border-bottom: 2px solid #a3a0c1;
}
</style>
