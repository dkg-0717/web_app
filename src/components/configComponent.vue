<script>
import { getComponent } from "./allComponents.js"
import store from '../store/index.js';

export default {
  name: "configComponent",
  functional: true,
  render(createElement) {
    let index = store.getters.getIndex;
    return createElement(getComponent(index))
  }
}
</script>
