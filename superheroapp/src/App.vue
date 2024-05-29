<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <div id="layout">
    <h1>Superhero App</h1>
    <nav>
      <RouterLink to="/">Home</RouterLink> |
      <RouterLink to="/about">About</RouterLink>
    </nav>
    <RouterView />
  </div>
</template>


<style scoped>
  #layout {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
  }
</style>