
<template>
  <div style="margin-bottom: 50px;">
    <router-link to="/">home</router-link>
    <router-link to="/about" style="padding: 20px;">about</router-link>
    <router-link to="/test1">/test1</router-link>
    <router-link to="/lang" style="padding: 20px;">lang</router-link>
  </div>
  <div style="padding: 0 10%;">
    <RouterView />
  </div>
  <ModalsContainer />
</template>

<script setup lang="ts">

import { ModalsContainer } from 'vue-final-modal'
import { RouterLink, RouterView } from 'vue-router'
</script>



<style>
header {
  line-height: 1.5;
  max-height: 100vh;
}




.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
