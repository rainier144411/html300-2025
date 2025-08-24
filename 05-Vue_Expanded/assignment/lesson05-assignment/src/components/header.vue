<script setup>
//import animatedFootprints component
import animatedFootprints from './animatedFootprints.vue';
</script>

<template>
    <!--Header component with named slots, header and animatedFootptints-->
    <header class="header-container">
        <h1>
            <slot name="header"></slot>
        </h1>
        <slot name="animatedFootprints">
            <!--animatedFootprints component-->
            <animatedFootprints></animatedFootprints>
        </slot>
    </header>
    <!--Default slot used for subheader (h3) text-->
    <slot></slot>
    
</template>

<style scoped>
    .header-container {
        display: flex;
        align-items: center;
        gap: 20px;
    }
    h1 {
        font-family: "Barlow Condensed", Arial, sans-serif;
        font-weight: bold;
    }

    i:nth-of-type(1) {
    color: rgb(255,255,255);
    transform: scale(1.5);
    animation: changeColor 5s ease 0s 1;
    }
    i:nth-of-type(2) {
    color: rgb(255,255,255);
    transform: scale(1.5);
    animation: changeColor 5s ease 1s;
    }
    i:nth-of-type(3) {
    color: rgb(255,255,255);
    transform: scale(1.5);
    animation: changeColor 5s ease 3s;
    }
    i:nth-of-type(4) {
    color: rgb(255,255,255);
    transform: scale(1.5);
    animation: changeColor 5s ease 5s 1;
    }

    @keyframes changeColor {
        from{
            color: rgba(47,79,79,.9);
        }
        to {
            color: rgba(47,79,79,.1);
        }
    }

    h3 {
        font-family: Domine, serif;
        font-weight: lighter;
        font-style: italic;
    }
</style>