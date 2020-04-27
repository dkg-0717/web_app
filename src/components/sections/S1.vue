<template>
  <div>
    <div class="row">
      <div class="col-sm-4">
        <h3 class="txt-title">Inteligencia emocional y gestión de talento</h3>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12 text-center">
        <img class="img-fluid" src="@/assets/images/P1/heart.png" alt="" />
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <p>
          La gestión de recursos humanos es una tarea que requiere un amplio
          rango de inteligencia emocional ya que al considerar a las personas de
          forma holística buscamos entender sus dimensiones profesionales y
          personales.
        </p>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-sm-12">
        <h4 class="text-center">
          Cada intercambio comunicacional con otra persona implica emociones.
        </h4>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12 text-center">
        <img class="img-fluid" src="@/assets/images/P1/face.png" alt="" />
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <p>
          Como gestores de talento, tenemos que enfrentarnos particularmente con
          emociones en estos momentos:
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-3 text-center">
        <img class="img-fluid" src="@/assets/images/P1/ballow.png" alt="" />
        <h4>Noticias complicadas</h4>
      </div>
      <div class="col-sm-3 text-center">
        <img class="img-fluid" src="@/assets/images/P1/box.png" alt="" />
        <h4>Bajas laborales</h4>
      </div>
      <div class="col-sm-3 text-center">
        <img class="img-fluid" src="@/assets/images/P1/arrows.png" alt="" />
        <h4>Cambios organizacionales</h4>
      </div>
      <div class="col-sm-3 text-center">
        <img class="img-fluid" src="@/assets/images/P1/light.png" alt="" />
        <h4>Emergencias civiles o sanitarias</h4>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-sm-12">
        <p class="text-center final-text">
          ¿Conoces los factores de la inteligencia emocional en el trabajo?
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import { TimelineMax } from "gsap";
import { mapActions, mapGetters } from "vuex";
// import { Fragment } from "vue-Fragment";
import sections from "@/mixins/sections.js";

export default {
  name: "sectionInit",
  components: {
    // Fragment
  },
  mixins: [sections],
  data() {
    return {
      imgs: ["sm_logo"],
    };
  },
  computed: {
    ...mapGetters(["showNBar"]),
  },
  methods: {
    ...mapActions(["canGo", "isLoading"]),
    customCallback() {
      let self = this;
      return function() {
        self.canGo();
      };
    },
  },
  mounted() {
    this.isLoading(false);
  },
};
</script>
