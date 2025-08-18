//https://www.youtube.com/watch?v=QnukXV5R01Y
//const hasBorder= false;
const borderMixin = {
  data() {
    return {
      hasBorder: false // no border until clicked
    };
  },
  methods: {
    toggleBorder() {
      this.hasBorder = !this.hasBorder; // Toggle
      //console.log(hasBorder);
    }
  },
  computed: {
    borderStyle() {
      return this.hasBorder ? 'border: 2px solid black' : 'border: none'; //apply black border when clicked
    }
  }
};

export default borderMixin
