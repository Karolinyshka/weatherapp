<script setup>
import Header from "./components/layout/Header.vue";
</script>
<template>
  <v-container>
    <RouterView/>
    <Header/>
  </v-container>
</template>
<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Quicksand',sans-serif;
}
</style>

