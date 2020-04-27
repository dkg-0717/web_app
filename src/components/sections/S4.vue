<template>
  <div>
    <div class="row">
      <div class="col-sm-4 col-md-12  ">
        <h3 class="txt-title">
          Acompañando al talento
        </h3>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col-sm-12">
        <p>
          Una de las reglas básicas en el trato humano es que estemos
          conscientes de que podemos controlar nuestras emociones, sin embargo,
          no podemos controlar las emociones de otros.
        </p>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col-sm-12">
        <p>
          Por ello que en situaciones de incertidumbre es importante conocer
          protocolos que nos ayuden a comunicarnos claramente, sobre todo cuando
          se pueden presentar estados de ansiedad elevada o shock, por ejemplo,
          el informe de una baja, una crisis civil o sanitaria e incluso cuando
          un talento nos informa que debe retirarse por enfermedad o
          fallecimiento de un ser querido.
        </p>
      </div>
    </div>

    <div class="row mt-5">
      <div class="col-sm-12">
        <p class="text-center final-text">
          ¿Cómo acompañar al talento en 5 pasos?
        </p>
      </div>
    </div>

    <div class="row mt-5">
      <div class="col-sm-12">
        <div class="left-box bg-aqua">
          <p>1. Encuentra un lugar tranquilo para hablar.</p>
        </div>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col-sm-12">
        <div class="right-box bg-orange">
          <p>
            2. Hazle saber a la persona que respetas su privacidad y
            confidencialidad, anímales a contar cómo se sienten sin obligarlos a
            hablar.
          </p>
        </div>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col-sm-12">
        <div class="left-box bg-purple">
          <p>3. Hazle saber que estás escuchando parafraseando su discurso.</p>
        </div>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col-sm-12">
        <div class="right-box bg-aqua-hight">
          <p>
            4. Ofrece información concreta, en caso de que la desconozcas,
            comenta que la averiguarás luego.
          </p>
        </div>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col-sm-12">
        <div class="left-box bg-orange-hight">
          <p>
            5. Hazle saber que reconoces sus fortalezas y que sabes que pueden
            superar la situación.
          </p>
        </div>
      </div>
    </div>

    <div class="row mt-5">
      <div class="col-sm-12">
        <p>
          Una vez desarrollada tu inteligencia emocional te será más sencillo
          realizar acompañamientos en situaciones de crisis, estos pasos pueden
          seguirse de forma remota encontrando los medios de comunicación
          adecuados.
        </p>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col-sm-12">
        <p>
          Gestionar talento en situaciones de crisis puede derivar en preguntas
          constantes sobre la situación, así como sobre las condiciones
          laborales que les esperan.
        </p>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col-sm-12">
        <p class="text-center final-text">
          ¿Cómo cuidar mi salud emocional ante estas situaciones?
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
.right-box,
.left-box {
  width: 100%;
  max-width: 800px;
  height: auto;
  padding: 7px;
}

.left-box {
  border-top-right-radius: 2em;
  border-bottom-right-radius: 2em;
}

.right-box {
  border-top-left-radius: 2em;
  border-bottom-left-radius: 2em;
}

.bg-orange {
  border: 2px solid #ff6b00;
  background-color: rgba(255, 107, 0, 0.4);
}

.bg-orange-hight {
  border: 2px solid #ff6b00;
  background-color: rgba(255, 107, 0, 0.6);
}

.bg-aqua {
  border: 2px solid #00c4b3;
  background-color: rgba(0, 196, 179, 0.4);
}

.bg-aqua-hight {
  border: 2px solid #00c4b3;
  background-color: rgba(0, 196, 179, 0.6);
}

.bg-purple {
  border: 2px solid #a3a0c1;
  background-color: rgba(163, 160, 193, 0.6);
}
</style>
