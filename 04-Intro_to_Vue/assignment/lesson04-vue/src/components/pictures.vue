<script setup>
    import {ref} from "vue";

    //object of image info
    const imagesTopRow = ref([
        { src: "src/assets/images/hike-7.jpg", alt: "Image of tall, snowy mountain peaks on a cloudy day.", popover: "Rugged peaks of Slovenia" },
        { src: "src/assets/images/hike-9.jpg", alt: "Image of torquoise river flowing through a green mountainous landscape.", popover: "Socha Valley in Slovenia" },
    ]) 
    const imagesSecondRow =ref([    { src: "src/assets/images/hike-1.jpg", alt: "Image of vast mountain ridges and a deep valley with trees.", popover: "Views from Silver Star Mountain in Washington" },
        { src: "src/assets/images/hike-3.jpg", alt: "Image of a person looking into a large rocky canyon.", popover: "Slot canyon in Arizona" },
    ])  
    const imagesThirdRow = ref([    { src: "src/assets/images/hike-4.jpg", alt: "Image of a waterfall with lush surroundings and a small bridge over it.", popover: "Trail of Ten Falls in Oregon" },
        { src: "src/assets/images/hike-2.jpg", alt: "Image of pink flower growing out of the rocks with mountains and a lake in the background.", popover: "Views from Harry's Ridge Trail on Mount Saint Helens" },
    ])  
    const imagesFourthRow = ref([    { src: "src/assets/images/hike-6.jpg", alt: "Image of a mountain lake with bright green grasses growing around it's edge.", popover: "Views from Stuart Lake in the Enchantments in Washington" },
        { src: "src/assets/images/hike-8.jpg", alt: "Image of an owl sitting on a tree branch.", popover: "An owl spotted near our campsite at Pardise Creek" },
    ])
    const imagesFifthRow = ref([ { src: "src/assets/images/hike-5.jpg", alt: "Image of a large waterfall and a trail behind it.", popover: "Trail of Ten Falls in Oregon" },
        { src: "src/assets/images/hike-10.jpg", alt: "Image of two tents amongst black, ashy rocks with a pink sky in the background.", popover: "Camping at Craters of the Moon in Idaho" }
    ])
</script>

<template>
    <div class="main">
        <div id="gallery">
            <h2>Pictures From My Hikes</h2>
            <div class="row">
                <!--use a "v-for" loop to iterate through an object of images (imagesTopRow), note popovers not working-->
                <img v-for="image in imagesTopRow" :src="image.src" class="col-lg-6 img-fluid rounded mb-4" data-toggle="popover" data-placement="bottom" :data-content="image.popover" :alt="image.alt">
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
                    <img v-for="image in imagesSecondRow" :src="image.src" class="img-fluid rounded mb-4" data-toggle="popover" data-placement="bottom" :data-content="image.popover" :alt="image.alt">
                </div>
                <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
                    <img v-for="image in imagesThirdRow" :src="image.src" class="img-fluid rounded mb-4" data-toggle="popover" data-placement="bottom" :data-content="image.popover" :alt="image.alt">
                </div>
                <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
                    <img v-for="image in imagesFourthRow" :src="image.src" class="img-fluid rounded mb-4" data-toggle="popover" data-placement="bottom" :data-content="image.popover" :alt="image.alt">
                </div>
            </div>
            <div class="row">
                <img v-for="image in imagesFifthRow" :src="image.src" class="col-lg-6 img-fluid rounded mb-4" data-toggle="popover" data-placement="bottom" :data-content="image.popover" :alt="image.alt">
            </div>
        </div>
    </div>
</template>