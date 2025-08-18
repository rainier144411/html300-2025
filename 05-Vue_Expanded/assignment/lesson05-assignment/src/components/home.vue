<script>
import borderMixin from "../mixin.js";

export default {
    mixins: [borderMixin]
}
</script>

<template>
    <div class="main">
        <article>
            <h2>Hikes</h2>
            <ul class="list-container">
                <li> 
                    Latourell Falls
                    <div class="img-container">
                        <img src="../assets/images/latourell-falls.jpeg" class="img-fluid img-thumbnail" height="200" width="250" alt="Image of waterfall surrounded by tall mossy green rock formations." :style="borderStyle" @click="toggleBorder()">
                    </div>
                    <a href="https://www.oregonhikers.org/field_guide/Latourell_Falls_Loop_Hike">Latourell Falls Loop Hike</a>
                </li>
                <li> 
                    Salmon River
                    <div class="img-container">
                        <img src="../assets/images/salmon-river.jpeg" class="img-fluid img-thumbnail" height="200" width="250" alt="Image of river and evergreen trees and nearby road as the clouds clear and blue skies appear." :style="borderStyle" @click="toggleBorder()">
                    </div>
                    <a href="https://www.oregonhikers.org/field_guide/Old_Salmon_River_Hike">Old Salmon River Hike</a>
                </li>
                <li> 
                    Powell Butte
                    <div class="img-container">
                        <img src="../assets/images/powell-butte.jpeg" class="img-fluid img-thumbnail" height="200" width="250" alt="Image of field with forests and Mt.Hood in the distance." :style="borderStyle" @click="toggleBorder()">
                    </div>
                    <a href="https://www.oregonhikers.org/field_guide/Powell_Butte_Summit_Loop_Hike">Powell Butte Summit Loop Hike</a>
                </li>
            </ul>
        </article>

        <article>
            <h2>Backpacking Trips</h2>
            <ul class="list-container">
                <li> 
                    Mount Jefferson (2 Nights)
                    <div class = "img-container">
                        <img src="../assets/images/mount-jefferson.jpg" class="img-fluid img-thumbnail" height="200" width="250" alt="Image of rock formation and alpine lake with Mt.Jefferson behind them." :style="borderStyle" @click="toggleBorder()">
                    </div>
                    <a href="https://www.alltrails.com/trail/us/oregon/pamelia-lake-hunts-creek-and-hunts-cove-trail-loop-to-hanks-lake">Pamelia Lake, Hunt's Creek and Hunt's Cove Trail Loop to Hank's Lake</a>
                </li>
                <li> 
                    Lewis River (1 Night)
                    <div class="img-container">
                        <img src="../assets/images/lewis-river.jpg" class="img-fluid img-thumbnail" height="200" width="250" alt="Image of dirt trail surrounded by moss and evergreens with a small waterfall in the background." :style="borderStyle" @click="toggleBorder()">
                    </div>
                    <a href="https://www.fs.usda.gov/recarea/giffordpinchot/recarea/?recid=31580">Lewis River Trail</a>
                </li>
            </ul>
        </article>
    </div>
</template>
