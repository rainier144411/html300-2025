<script setup>
import {ref} from "vue";

//object with accordion info
const accordionItems = ref([
    { id: "headingOne", target: "#collapseOne", aria: "collapseOne", title: "Snacks", content: "Lighter options to keep you going between meals." },
    { id: "headingTwo", target: "#collapseTwo", aria: "collapseTwo", title: "No Cook Meals", content: "Meals that require no stove and are great options for lunch along the trail." },
    { id: "headingThree", target: "#collapseThree", aria: "collapseThree", title: "Simple Stovetop Meals", content: "Simple meals require minimal preparation, and you just need to boil water when you get to camp. They are a great option for single-night backpacking trips." },
    { id: "headingFour", target: "#collapseFour", aria: "collapseFour", title: "Dehydrated Meals", content: "Dehydrated meals take a good bit of preparation at home but make for lighter packs. They are the best option for multi-night treks." }
])

const mark = ref(null);

//updates mark value based on what button is clicked
const updateMarkSweet = () => {
    mark.value = 'Sweet';
}
const updateMarkCaloric = () => {
    mark.value = 'Caloric';
}
const updateMarkHealthy= () => {
    mark.value = 'Healthy';
}
</script>

<template>
    <div class="main">
        <article>
            <h2>Types of Meals</h2>
            <div class="accordion" id="snackTypes">
                <!--use a "v-for" to iterate through an object to fill out the content in an accordion.-->
                <div class="accordion-item" v-for="item in accordionItems" :key="item.id" :id="item.id">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="item.target" aria-expanded="false" :aria-controls="item.aria">
                            {{item.title}}
                        </button>
                    </h2>
                    <div :id="item.aria" class="accordion-collapse collapse" :aria-labelledby="item.id" data-bs-parent="#snackTypes">
                        <div class="accordion-body">
                            {{item.content}}
                        </div>
                    </div>
                </div>
            </div>
        </article>
        
        <div class="snack-buttons">
            <button type="button" class="btn btn-primary m-2" @click="updateMarkSweet">Mark Sweet Treats</button>
            <button type="button" class="btn btn-primary m-2" @click="updateMarkCaloric">Mark Highly Caloric Meals</button>
            <button type="button" class="btn btn-primary m-2" @click="updateMarkHealthy">Mark Healthy Meals</button>
            
            <!--use of "v-if v-else" statement to update message based on the button click for better UX-->
            <p v-if="mark===null">Use buttons to highlight recipes</p>
            <p v-else>{{mark}} items are marked in purple</p>
        </div>

        <div class="recipes-list">
        <!--a elements use vue to update css style to purple bolded text when relevant button is clicked-->
            <section>
                <h2>Snacks</h2>
                <div class="list-group list-group-flush">
                    <a href="https://www.freshoffthegrid.com/vegan-smores-granola-bar/" class="list-group-item list-group-item-action" :style="[mark === 'Sweet' ? 'color: purple ; font-weight: 700' : 'color: black ; font-weight: 400']">S'mores Granola Bars</a>
                    <a href="https://www.freshoffthegrid.com/mango-strawberry-fruit-leathers/" class="list-group-item list-group-item-action">Mango Strawberry Fruit Leather </a>
                </div>
            </section>

            <section>
                <h2>No Cook Meals</h2>
                <div class="list-group list-group-flush">
                    <a href="https://www.freshoffthegrid.com/cashew-chicken-salad-wrap/" class="list-group-item list-group-item-action">Cashew Chicken Salad Wraps</a>
                    <a href="https://www.freshoffthegrid.com/cold-soaked-pasta-salad/" class="list-group-item list-group-item-action" :style="[mark === 'Caloric' ? 'color: purple ; font-weight: 700' : 'color: black ; font-weight: 400']">Cold Soaked Pasta Salad</a>
                </div>
            </section>

            <section>
                <h2>Simple Stovetop Meals</h2>
                <div class="list-group list-group-flush">
                    <a href="https://www.the-hungry-hiker.com/2023/03/05/cheap-easy-backpacking-meal-ideas/" class="list-group-item list-group-item-action" :style="[mark === 'Caloric' ? 'color: purple ; font-weight: 700' : 'color: black ; font-weight: 400']">BBQ Mac N Cheese</a>
                    <a href="https://blackwoodspress.com/blog/14385/backpacking-dinner-recipes/?srsltid=AfmBOopwdsocXX31SXS8GO8bBBfxg9zufytmP6Tkn3EAHAOsDMYlZzif" class="list-group-item list-group-item-action">Cheesy Bacon Mashed Potatoes</a>
                </div>
            </section>

            <section>
                <h2>Dehydrated Meals</h2>
                <div class="list-group list-group-flush">
                    <a href="https://trail.recipes/recipes/unstuffed-peppers/" class="list-group-item list-group-item-action" :style="[mark === 'Healthy' ? 'color: purple ; font-weight: 700' : 'color: black ; font-weight: 400']">Unstuffed Peppers</a>
                    <a href="https://www.backpackingchef.com/backpacking-recipe-mexican-beef-rice.html" class="list-group-item list-group-item-action" :style="[mark === 'Healthy' ? 'color: purple ; font-weight: 700' : 'color: black ; font-weight: 400']">Mexican Beef & Rice Bowls</a>
                </div>
            </section>
        </div>
    </div>
</template>