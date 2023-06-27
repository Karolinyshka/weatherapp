<template>
  <v-app>
    <Home/>
    <v-app-bar color="white" >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>WEATHER APP</v-toolbar-title>
      <v-col cols="3" class="mr-2">
        <v-text-field
            v-model="search"
            @keyup.enter="addCity"
            class="pt-5 mr-10 field-center"
            placeholder="AddCity"
            dense
            filled
        >
          <v-btn
            icon="mdi-magnify"
            @click="showInput"
        >
        </v-btn>
        </v-text-field>
      </v-col>
     <!-- <v-btn icon="mdi-plus" ></v-btn>-->
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" :mobile-breakpoint="768">
      <v-divider></v-divider>
      <v-list density="compact" nav>
        <v-list-item
            v-for="item in links"
            :key="item.text"
            :to="item.route"
            link
        >
          <v-list-item
              :prepend-icon="item.icon"
              :title="item.text"
          ></v-list-item>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app>

</template>

<script setup>
import { ref } from 'vue'

let drawer = ref(null)
</script>

<script>
export default {
  data() {
    return {
      search: null,
      drawer: true,
      links: [
        {
          icon: "mdi-calendar-blank",
          text: "Home",
          route: "/" },
        {
          icon: "mdi-calendar-blank",
          text: "Daily Weather",
          route: "/dailyWeather",
        },
        {
          icon: "mdi-clock-time-five-outline",
          text: "Hourly Weather",
          route: "/hourlyWeather" },
      ],
    };
  },
}
</script>
<style>
</style>