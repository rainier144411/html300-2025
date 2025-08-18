//https://www.youtube.com/watch?v=QnukXV5R01Y
let hasBorder = false;
let selectedImg = null;

export default {
    data() {
      return {
        hasBorder: false, // no border until clicked
        selectedImg
      };
    },
    methods: {
      toggleBorder(imageId) {
        selectedImg = imageId; //set selectedImg value to the id of the selected image
        hasBorder = !hasBorder; // Toggle hasBorder value between true and false
        //below are just for testing functionality of the function
        console.log('imgageId:'+imageId);
        console.log('selectedImg:'+selectedImg);
        console.log('hasBorder:'+hasBorder);
        console.log(selectedImg === imageId & hasBorder ? 'addBorder' : '');
      
      }
    }
}
