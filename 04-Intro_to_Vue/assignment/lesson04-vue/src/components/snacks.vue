<script setup>
import {ref} from "vue";
const accordianItems = ref([
    { id: "headingOne", target: "#collapseOne", aria: "collapseOne", title: "Snacks", content: "Lighter options to keep you going between meals." },
    { id: "headingTwo", target: "#collapseTwo", aria: "collapseTwo", title: "No Cook Meals", content: "Meals that require no stove and are great options for lunch along the trail." },
    { id: "headingThree", target: "#collapseThree", aria: "collapseThree", title: "Simple Stovetop Meals", content: "Simple meals require minimal preparation, and you just need to boil water when you get to camp. They are a great option for single-night backpacking trips." },
    { id: "headingFour", target: "#collapseFour", aria: "collapseFour", title: "Dehydrated Meals", content: "Dehydrated meals take a good bit of preparation at home but make for lighter packs. They are the best option for multi-night treks." }
])

const mark = ref(null);

function updateMark() {
    mark.value = document.getElementbyId('sweet').textContent;
}
</script>

<template>
    <button @click="updateMark" id="sweet">Mark Sweet Treats</button>
    <button @click="updateMark" id="caloric">Mark Highly Caloric Meals</button>
    <button @click="updateMark" id="healthy">Mark Healthy Meals</button>

    <div class="main">
        <div class="recipes-list">
            <section>
                <h2>Snacks</h2>
                <div class="list-group list-group-flush">
                    <a href="https://www.freshoffthegrid.com/vegan-smores-granola-bar/" class="list-group-item list-group-item-action" :style="[mark=== 'Mark Sweet Treats' ? 'color: purple ; font-weight: 700' : 'color: black ; font-weight: 400']">S'mores Granola Bars</a>
                    <a href="https://www.freshoffthegrid.com/mango-strawberry-fruit-leathers/" class="list-group-item list-group-item-action">Mango Strawberry Fruit Leather </a>
                </div>
            </section>

            <section>
                <h2>No Cook Meals</h2>
                <div class="list-group list-group-flush">
                    <a href="https://www.freshoffthegrid.com/cashew-chicken-salad-wrap/" class="list-group-item list-group-item-action">Cashew Chicken Salad Wraps</a>
                    <a href="https://www.freshoffthegrid.com/cold-soaked-pasta-salad/" class="list-group-item list-group-item-action">Cold Soaked Pasta Salad</a>
                </div>
            </section>

            <section>
                <h2>Simple Stovetop Meals</h2>
                <div class="list-group list-group-flush">
                    <a href="https://www.the-hungry-hiker.com/2023/03/05/cheap-easy-backpacking-meal-ideas/" class="list-group-item list-group-item-action">BBQ Mac N Cheese</a>
                    <a href="https://blackwoodspress.com/blog/14385/backpacking-dinner-recipes/?srsltid=AfmBOopwdsocXX31SXS8GO8bBBfxg9zufytmP6Tkn3EAHAOsDMYlZzif" class="list-group-item list-group-item-action">Cheesy Bacon Mashed Potatoes</a>
                </div>
            </section>

            <section>
                <h2>Dehydrated Meals</h2>
                <div class="list-group list-group-flush">
                    <a href="https://trail.recipes/recipes/unstuffed-peppers/" class="list-group-item list-group-item-action">Unstuffed Peppers</a>
                    <a href="https://www.backpackingchef.com/backpacking-recipe-mexican-beef-rice.html" class="list-group-item list-group-item-action">Mexican Beef & Rice Bowls</a>
                </div>
            </section>
        </div>
    </div>
</template>