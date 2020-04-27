<template>
  <div>
    <!-- <div class="row">
      <div class="col-sm-4">
        <h3 class="txt-title">Inteligencia emocional y gestión de talento</h3>
      </div>
    </div> -->

    <div class="row mt-3">
      <div class="col-sm-12">
        <p>
          La inteligencia emocional nos permite conocer y controlar nuestras
          emociones para dar respuestas adecuadas y objetivas según el contexto.
        </p>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col-sm-12">
        <p>
          Para poder aplicar la inteligencia emocional en la gestión de talento
          es necesario conocer los factores involucrados y sobre todo practicar
          el autoconocimiento, para ello es importante que conozcamos los
          elementos de la inteligencia emocional en el trabajo:
        </p>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12">
        <div class="table-responsive">
          <table class="table table-bordered table-coral">
            <thead>
              <tr>
                <th class="custom-th" scope="col"></th>
                <th scope="col" class="edivers-text custom-th">Definición</th>
                <th scope="col" class="edivers-text custom-th">
                  Características
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="edivers-text">Autoconocimiento</td>
                <td>
                  Habilidad de reconocer y entender tus estados de ánimo y
                  emociones, así como su efecto en otros.
                </td>
                <td>
                  <ul>
                    <li>Confianza</li>
                    <li>Autoevaluación objetiva</li>
                    <li>Sentido del humor propio</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td class="edivers-text">Autoregulación</td>
                <td>
                  Habilidad de controlar o redirigir tus impulsos y emociones
                  (pensar antes de actuar).
                </td>
                <td>
                  <ul>
                    <li>Integridad</li>
                    <li>Comodidad ante la ambigüedad</li>
                    <li>Adaptación al cambio</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td class="edivers-text">Motivación</td>
                <td>
                  Aquello que te mueve a trabajar y va más allá del dinero y del
                  estatus. La propensión para perseguir tus metas con energía y
                  persistencia.
                </td>
                <td>
                  <ul>
                    <li>Dirección al logro</li>
                    <li>Optimismo para enfrentar el fracaso</li>
                    <li>Compromiso organizacional</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td class="edivers-text">Empatía</td>
                <td>
                  Habilidad de entender las emociones de otras personas. Las
                  habilidad de tratar a la gente de acuerdo a sus reacciones
                  emocionales.
                </td>
                <td>
                  <ul>
                    <li>Destreza para construir y retener talento</li>
                    <li>Comprensión del contexto</li>
                    <li>Servicio al cliente</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td class="edivers-text">Habilidades sociales</td>
                <td>
                  Habilidad para manejar relaciones y construir redes. La
                  habilidad para encontrar objetivos comunes y crear rapport.
                </td>
                <td>
                  <ul>
                    <li>Efectividad en liderar el cambio</li>
                    <li>Persuasión</li>
                    <li>Destreza para construir y liderar equipos</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12">
        <p class="text-center">Daniel Goleman, “What makes a leader”</p>
        <p class="text-center">Harvard Business Review, November 1998</p>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12">
        <p class="text-center final-text">
          Te has preguntado <br />
          ¿Cómo aplicar la inteligencia emocional en la gestión de talento?
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import sections from "@/mixins/sections.js";
import video from "@/mixins/video.js";
import gsap from "gsap";
import { mapActions } from "vuex";

export default {
  name: "S1",
  data() {
    return {
      tl: null,
      videoId: "oVsprBwheVc",
      panStarted: false,
      playerVars: {
        width: "560",
        height: "315"
      }
    };
  },
  mixins: [sections, video],
  methods: {
    ...mapActions(["canGo", "isLoading"])
  },
  mounted() {
    this.isLoading(false);
    this.animationPage();
  }
};
</script>
