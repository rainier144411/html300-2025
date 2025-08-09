<script setup>
  import{ ref, computed } from 'vue';

  import home from './components/home.vue';
  import pictures from './components/pictures.vue';
  import snacks from './components/snacks.vue';
  import about from './components/about.vue';

  const routes = {
    "/": home,
    "/pictures": pictures,
    "/snacks": snacks,
    "/about": about
  };

  const currentPath = ref(window.location.hash);

  window.addEventListener("hashchange", () => {
    currentPath.value = window.location.hash;
  });

  const currentView = computed(() => {
    return routes[currentPath.value.slice(1) || "/"];
  });
</script>

<template>
  <div class="main">
    <header class="header-container">
        <h1>Outdoor Adventures on Foot</h1>
        <!-- Animated foot prints when page loads-->
        <i class="fa-solid fa-shoe-prints"></i><i class="fa-solid fa-shoe-prints"></i><i class="fa-solid fa-shoe-prints"></i><i class="fa-solid fa-shoe-prints"></i>
    </header>
    <h3>A guide to my favorite hikes and backpacking trips and yummy bites to eat along the trail.</h3>

    <!--Collapsable Bootstrap Navbar-->
    <nav class="navbar navbar-expand-lg">
      <button
      class="navbar-toggler"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
      >
          <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item px-3">
            <a class="nav-link active" aria-current="page" href="#/">Home</a>
          </li>
          <li class="nav-item px-3">
            <a class="nav-link" href="#/pictures">Pictures</a>
          </li>
          <li class="nav-item px-3">
            <a class="nav-link" href="#/snacks">Snacks & Meals</a>
          </li>
          <li class="nav-item px-3">
            <a class="nav-link" href="#/about">About</a>
          </li>
        </ul>
      </div>
    </nav>

    <component :is="currentView" id="app"/> <!--TO TOGGLE BETWEEN PAGES-->

    <footer>
      <i class="fa-solid fa-mountain-sun"></i>
      <p>Page built by Julianne.</p>
    </footer>
  </div>
</template>