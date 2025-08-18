
import {ref} from 'vue';

export function toggle() {
  const hasBorder = ref(false) //no border until clicked

  const toggle = () => {
    hasBorder.value = !hasBorder.value; //toggles hasBorder value
  };

  return {
    hasBorder,
    toggle
  };
}