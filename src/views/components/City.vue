<template>
  <!--<v-card-item :title="this.city.name">
  </v-card-item>
  <v-card-text class="py-0">
    <v-row align="center" no-gutters>
      <v-col class="text-h2" cols="6">
        {{ Math.round(city.main.temp) }}&deg
      </v-col>
    </v-row>
  </v-card-text>-->
  <v-container class="city">
<span>{{this.city.name}}</span>
  <div class="weather">
   <span>{{Math.round(city.main.temp)}}&deg;</span>
    <img :src="(`../../public/conditions/${city.weather[0].icon}.svg`)" alt="" />
  </div>
  <div class="video">
    <video
      autoplay
      loop
      muted
      :src="(`../../public/videos/${city.weather[0].icon}.mp4`)" alt=""/>
    <div class="bg-overlay"></div>
  </div>
</v-container>
</template>

<script>
export default {
  name:"city",
  props:["city"],
}
</script>
<style lang="scss" scoped>
.city {
  display: flex;
  position: relative;
  flex-direction: column;
  padding: 20px;
  flex-basis: 50%;
  min-height: 250px;
  color: #fff;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

  .edit {
    border-radius: 0px 15px 0 0;

    z-index: 1;
    font-size: 20px;
    position: absolute;
    bottom: 0px;
    left: 0px;
  }

  span {
    z-index: 1;
    text-transform: capitalize;
    display: block;
    font-size: 25px;
    font-weight: 600;
  }

  .weather {
    display: flex;
    z-index: 1;
    justify-content: flex-end;
    align-items: flex-end;
    flex: 1;
    span {
      font-size: 35px;
      margin-right: 8px;
    }
    img {
      height: 20px;
      width: auto;
    }
  }

  .video {
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    video {
      height: 100%;
      @media (min-width: 900px) {
        height: auto;
        width: 100%;
      }
    }
    .bg-overlay {
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0;
      background-color: rgba(0, 0, 0, 0.2);
    }
  }
}
</style>