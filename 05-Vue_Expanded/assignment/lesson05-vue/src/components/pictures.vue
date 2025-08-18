<script setup>
    import {ref} from "vue";
    import PicturesGallery from "./picturesGallery.vue";

    //object of image info
    const imagesTopRow = ref([
        { id: 1, src: "src/assets/images/hike-7.jpg", alt: "Image of tall, snowy mountain peaks on a cloudy day.", title: "Rugged peaks of Slovenia" },
        { id: 2, src: "src/assets/images/hike-9.jpg", alt: "Image of torquoise river flowing through a green mountainous landscape.", title: "Socha Valley in Slovenia" }
    ]) 
    const imagesSecondRow =ref([    { id: 3, src: "src/assets/images/hike-1.jpg", alt: "Image of vast mountain ridges and a deep valley with trees.", title: "Views from Silver Star Mountain in Washington" },
        { id: 4, src: "src/assets/images/hike-3.jpg", alt: "Image of a person looking into a large rocky canyon.", title: "Slot canyon in Arizona" }
    ])  
    const imagesThirdRow = ref([    { id: 5, src: "src/assets/images/hike-4.jpg", alt: "Image of a waterfall with lush surroundings and a small bridge over it.", title: "Trail of Ten Falls in Oregon" },
        { id: 6,src: "src/assets/images/hike-2.jpg", alt: "Image of pink flower growing out of the rocks with mountains and a lake in the background.", title: "Views from Harry's Ridge Trail on Mount Saint Helens" }
    ])  
    const imagesFourthRow = ref([    { id: 7, src: "src/assets/images/hike-6.jpg", alt: "Image of a mountain lake with bright green grasses growing around it's edge.", title: "Views from Stuart Lake in the Enchantments in Washington" },
        { id: 8, src: "src/assets/images/hike-8.jpg", alt: "Image of an owl sitting on a tree branch.", title: "An owl spotted near our campsite at Pardise Creek" }
    ])
    const imagesFifthRow = ref([ { id: 9, src: "src/assets/images/hike-5.jpg", alt: "Image of a large waterfall and a trail behind it.", title: "Trail of Ten Falls in Oregon" },
        { id: 10, src: "src/assets/images/hike-10.jpg", alt: "Image of two tents amongst black, ashy rocks with a pink sky in the background.", title: "Camping at Craters of the Moon in Idaho" }
    ])

    /*import composable - not working 
    import {toggle} from "../composable.js";

    export default {
        setup() {
            const {hasBorder, toggle} = toggle();

            return {
                hasBorder,
                toggle
            }
        }
    };*/
</script>

<template>
    <div class="main">
        <div id="gallery">
            <h2>Pictures From My Hikes</h2>
            <div class="row">
                <!--use a "v-for" loop to iterate through an object of images (imagesTopRow) leveraging the imported picturesGallery component.
                Attempted to add border when image is clicked with this addition to to images :style="hasBorder ? 'border: 2px solid black' : 'border: none'" @click="toggle()"-->
                <PicturesGallery v-for="image in imagesTopRow" :key="image.id" :src="image.src" :title="image.title" :alt="image.alt" class="col-lg-6 img-fluid rounded mb-4"></PicturesGallery>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
                    <PicturesGallery v-for="image in imagesSecondRow" :key="image.id" :src="image.src" :title="image.title" :alt="image.alt" class="img-fluid rounded mb-4"></PicturesGallery>
                </div>
                <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
                    <PicturesGallery v-for="image in imagesThirdRow" :key="image.id" :src="image.src" :title="image.title" :alt="image.alt" class="img-fluid rounded mb-4"></PicturesGallery>
                </div>
                <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
                    <PicturesGallery v-for="image in imagesFourthRow" :key="image.id" :src="image.src" :title="image.title" :alt="image.alt" class="img-fluid rounded mb-4"></PicturesGallery>
                </div>
            </div>
            <div class="row">
                <PicturesGallery v-for="image in imagesFifthRow" :key="image.id" :src="image.src" :title="image.title" :alt="image.alt" class="col-lg-6 img-fluid rounded mb-4"></PicturesGallery>
            </div>
        </div>
    </div>
</template>

