<template>
  <div>
    <div class="row">
      <div class="col-sm-4 col-md-12  ">
        <h3 class="txt-title">
          ¿Cómo detectar que me conduzco con inteligencia emocional?
        </h3>
      </div>
    </div>

    <div class="row mt-5">
      <div class="col-sm-12">
        <p class="bottom-border">
          1. ¿Conozco las emociones que tengo ante ciertas situaciones?
        </p>
        <p>
          Siendo el autoconocimiento el pilar de la inteligencia emocional,
          aprende a observar cómo te sientes cuando comunicas ciertas
          situaciones, por ejemplo, cuando le comunicas a alguien su baja puedes
          sentir enojo, ansiedad o tristeza. Identifica tus emociones y
          clasifícalas por situación en un rango del 1 al 5.
        </p>
      </div>
    </div>

    <div class="row mt-5">
      <div class="col-sm-12">
        <p class="bottom-border">2. ¿Comunico noticias con objetividad?</p>
        <p>
          Una vez que identificas las emociones que sientes, observa si al
          comunicarte puedes hacerlo con objetividad, es decir, controlar tus
          emociones para comunicar las noticias de forma directa, breve y
          empática.
        </p>
      </div>
    </div>

    <div class="row mt-5">
      <div class="col-sm-12">
        <p class="bottom-border">
          3. ¿Identifico las emociones de otras personas en su lenguaje verbal y
          no verbal?
        </p>
        <p>
          Observa a las personas, identifica si se mueven demasiado, te miran a
          los ojos, cambian su tono de voz, etc.
        </p>
      </div>
    </div>

    <div class="row mt-5">
      <div class="col-sm-12">
        <p class="bottom-border">
          4. ¿Establezco empatía cuando comunico?
        </p>
        <p>
          Pon atención a si dependiendo del contexto eres capaz de modular tu
          tono de voz y modificar tu discurso para que la otra persona se sienta
          escuchada y acompañada.
        </p>
      </div>
    </div>

    <div class="row mt-5">
      <div class="col-sm-12">
        <p class="bottom-border">
          5. ¿Sé cómo conducir una conversación complicada?
        </p>
        <p>
          Realiza una lista de las cosas que más se te dificultan y los posibles
          desenlaces, para que sepas cuál es el objetivo y los resultados que se
          pueden presentar.
        </p>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col-sm-12">
        <p class="text-center final-text">
          Una vez que identificaste cómo te comunicas en estas situaciones
          <br />
          ¿qué hacer si las emociones de la otra persona se desbordan?
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
