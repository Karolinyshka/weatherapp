<template>
<div class="current-weather">
  <div class="container">
    <div class="weather-info">
      <span class="city">{{this.currentWeather.name}}</span>
      <span class="current-temperature">{{Math.round(this.currentWeather.main.temp)}}</span>
    </div>
    <div class="high-low-temperature">
      <div class="high">
        <i class="fas fa-chevron-up"></i>
        <span>{{Math.round(this.currentWeather.main.temp_max)}}&deg</span>
      </div>
    </div>
    <div class="low">
      <i class="fas fa-chevron-down"></i>
      <span>{{Math.round(this.currentWeather.main.feels_like)}}&deg;;</span>
      <div class="weather-icon">
        <img v-if="isDay" src="../../public/sun.png" alt=""/>
        <img v-if="isNight" src="../../public/moon.png" alt=""/>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: "CurrentWeather",
  props:["isDay","isNight","currentWeather"]
}
</script>

<style scoped>
.current-weather{
  margin-top: 90px;
  border-bottom: 1px solid rgba(255,225,255,0.7);
}
.container{
  margin: 30px 0;
  min-height: 366px;
  position: relative;
  display: flex;
  color: #fff;
}
.span{
  display: block;
}

</style>