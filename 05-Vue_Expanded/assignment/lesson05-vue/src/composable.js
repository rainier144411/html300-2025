
import {ref, computed} from 'vue';

export function toggle() {
  const hasBorder = ref(false); //no border until clicked
  const selectedImg = ref(null);

  const toggleBorder = (imageId) => {
    selectedImg.value = imageId; //captures selected image for use in ternary operation
    hasBorder.value = !hasBorder.value; //toggles hasBorder value
  };

  return {
    hasBorder,
    selectedImg,
    toggleBorder
  };
}