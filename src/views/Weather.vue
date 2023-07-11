<template>
  <div class="main">
    <div v-if="loading" class="loading">
      <span></span>
    </div>
    <div v-else class="weather" :class="{day: isDay, night: isNight}">
      <div class="weather-wrap">
        <CurrentWeather :isDay="isDay" :isNight="isNight" :currentWeather="currentWeather"/>
      </div>
    </div>
  </div>
<h1>Weather</h1>
</template>
<script>
import axios from "axios";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
export default {
  name: "Weather",
  //props:["city"],

  data(){
    return{
      city:"Minsk",
      APIkey:"d410796959d43e43284d166783af3b4b",
      forecast:null,
      currentWeather:null,
    };
},
  created: async function() {
    await this.getWeather();
  },
  methods: {
   async getWeather() {
     const db = firebase.firestore();
     db.collection("cities")
        // .where('city', '==', this.$router.params.this.city)
          .get()
          .then((docs) => {
            docs.forEach((doc) => {
              this.currentWeather = doc.data().currentWeather;
              axios
                  .get(
                     `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${this.city}&appid=${this.APIkey}`
                     // `https://api.openweathermap.org/data/2.5/onecall?lat=${doc.data().currentWeather.coord.lat}&lon=${
                     //     doc.data().currentWeather.coord.lon
                    //  }&exclude=current,minutely,alerts&units=imperial&appid=${this.APIkey}`
                  )
                  .then((res) => {
                    this.forecast = res.data;
                    console.log(this.forecast);
                  })
                  .then(() => {
                    //console.log(this.forecast);
                   // console.log(this.currentWeather)
                  });
            });
          });
    },
  }

}
</script>

<style scoped>
h1{
  padding-top: 100px;
}

</style>