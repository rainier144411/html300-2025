<template>
    <i class="fa-solid fa-shoe-prints"></i><i class="fa-solid fa-shoe-prints"></i><i class="fa-solid fa-shoe-prints"></i><i class="fa-solid fa-shoe-prints"></i>
</template>

<style scoped>
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
</style>
