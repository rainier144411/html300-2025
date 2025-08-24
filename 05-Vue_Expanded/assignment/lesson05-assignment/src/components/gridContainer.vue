<script setup>

    import { defineProps } from "vue";

    //props for item attributes with prop validation on first 4 attributes
    const containerItem = defineProps ({
        id: {type: Number, required: true },
        title: { type: String, required: true},
        src: { type: String, required: true },
        alt: { type: String, required: true },
        href: { type: String },
        hrefTitle: {type: String }
    })

</script>

<template>
    <!--Bind props to elements and create reusable component for the container items-->
    <div>
        <li> 
            {{ containerItem.title }}
            <div class="img-container">
                <img :src="containerItem.src" class="img-fluid img-thumbnail" :alt="containerItem.alt">
            </div>
            <a :href="containerItem.href">{{ containerItem.hrefTitle }}</a>
        </li>
    </div>
</template>