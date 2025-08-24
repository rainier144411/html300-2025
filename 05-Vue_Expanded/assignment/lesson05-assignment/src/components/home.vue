<script setup>
import { ref } from "vue";

//import component
import gridContainer from "./gridContainer.vue";

//objects with container item elements
const hikeItems = ref([
    { id: 1, title: "Latourell Falls", src: "latourell-falls.jpeg", alt: "Image of waterfall surrounded by tall mossy green rock formations.", href: "https://www.oregonhikers.org/field_guide/Latourell_Falls_Loop_Hike", hrefTitle: "Latourell Falls Loop Hike" },
    { id: 2, title: "Salmon River", src: "salmon-river.jpeg", alt: "Image of river and evergreen trees and nearby road as the clouds clear and blue skies appear.", href: "https://www.oregonhikers.org/field_guide/Old_Salmon_River_Hike", hrefTitle: "Old Salmon River Hike" },
    { id: 3, title: "Powell Butte", src: "powell-butte.jpeg", alt: "Image of field with forests and Mt.Hood in the distance.", href: "https://www.oregonhikers.org/field_guide/Powell_Butte_Summit_Loop_Hike", hrefTitle: "Powell Butte Summit Loop Hike"}
])
const backpackingItems = ref([ 
    { id: 1, title: "Mount Jefferson (2 Nights)", src: "mount-jefferson.jpg", alt: "Image of rock formation and alpine lake with Mt.Jefferson behind them.", href: "https://www.alltrails.com/trail/us/oregon/pamelia-lake-hunts-creek-and-hunts-cove-trail-loop-to-hanks-lake", hrefTitle: "Pamelia Lake, Hunt's Creek and Hunt's Cove Trail Loop to Hank's Lake" },
    { id: 2, title: "Lewis River (1 Night)", src: "lewis-river.jpg", alt: "Image of dirt trail surrounded by moss and evergreens with a small waterfall in the background.", href: "https://www.fs.usda.gov/recarea/giffordpinchot/recarea/?recid=31580", hrefTitle: "Lewis River Trail" }
])
</script>

<template>
    <div class="main">
        <article>
            <h2>Hikes</h2>
            <!--Bootstrap grid-->
            <div class="row">
                <ul class="list-container">
                    <!--Bring in grid container and assign attributes to hikeItems values-->
                    <gridContainer v-for="item in hikeItems" :key="item.id" :title="item.title" :src="require(`../assets/images/` + item.src )" :alt="item.alt" :href="item.href" :hrefTitle="item.hrefTitle" class="col-lg-3 col-md-4 m-4">
                    </gridContainer>
                </ul>
            </div>
        </article>

        <article>
            <h2>Backpacking Trips</h2>
            <!--Bootstrap grid-->
            <div class="row">
                <ul class="list-container">
                    <!--Bring in grid container and assign attributes to backpackingItems values-->
                    <gridContainer v-for="item in backpackingItems" :key="item.id" :title="item.title" :src="require(`../assets/images/` + item.src )" :alt="item.alt" :href="item.href" :hrefTitle="item.hrefTitle" class="col-lg-3 col-md-4 m-4">
                    </gridContainer>
                </ul>
            </div>
        </article>
    </div>
</template>
