import S1 from "./sections/S1.vue";
import S2 from "./sections/S2.vue";
import S3 from "./sections/S3.vue";
import S4 from "./sections/S4.vue";
import S5 from "./sections/S5.vue";

const COMPONENT_MAP = {
  1: S1,
  2: S2,
  3: S3,
  4: S4,
  5: S5
};

export function getComponent(id) {
  return COMPONENT_MAP[id];
}
