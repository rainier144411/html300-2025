<script setup>

    import { defineProps } from "vue";

    //props for img attributes with prop validation on the last 3 props
    const galleryProps = defineProps ({
        id: { type: Number},
        src: { type: String, required: true },
        alt: { type: String, required: true },
        title: { type: String, required: true }
    })

</script>

<template>
    <!--Bind props to image elements and create reusable img component-->
    <img :key="galleryProps.id" :src="galleryProps.src" :title="galleryProps.title" :alt="galleryProps.alt">
</template>