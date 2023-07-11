<template>
  <v-container class="grid">
    <v-row>
      <v-col cols="4" v-for="(city,index) in cities" v-bind:key="index">
        <City v-bind:city="city"/>
      </v-col>
    </v-row>
  </v-container>
</template>
<router-view v-bind:cities="cities"/>
<script>
import axios from "axios"
import db from "@/firebase/firebaseinit"
import { collection,onSnapshot} from "firebase/firestore";
import City from "@/views/components/City.vue";
export default {
  components:{
    City,
  },
  name: 'weather',
  data(){
    return{
      cities: [],
      APIkey:"d410796959d43e43284d166783af3b4b",
    }
  },
  created: async function() {
    await this.getCityWeather();
  },
  /*mounted: async function(){
    await this.getApi();
  },*/

  methods:{
    async getCityWeather() {
      let firebaseDb = collection(db, "cities");
      onSnapshot(firebaseDb,(snap)=> {
        snap.docChanges().forEach(async (ref)=>{
          if(ref.type==="added"){
            try {
              const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${ref.doc.data().city}&appid=${this.APIkey}`);
              const data = response.data;
              this.cities.push(data);
              console.log(this.cities)
            }catch(err){
              console.log(err);
            }
          }
        });
      });

      /* const db= getFirestore();
       const dbRef = collection(db, 'cities')
       onSnapshot(dbRef,(docsSnap) =>{
         docsSnap.docChanges().forEach(async (doc)=>{
          if(doc.type === "added"){
            try {
              const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${doc.doc.data().city}&appid=${this.data.APIkey}`);
              const data = response.data;
              console.log(data)
              db.doc(doc.doc.id).update({
                currentWeather: data,
              })
                  .then(()=> {
                this.cities.push(doc.doc.data());
              }).then(()=>{
                console.log(this.cities);
              })
              console.log(data);
            }catch(err){
              console.log(err);
            }
          }
         });

           });*/
    },
    /* async getApi(){
       const getWeather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${this.data.city}&appid=${this.data.APIkey}`)
       console.log(getWeather.data);
     }*/
  }
}
</script>
<style lang="scss" scoped>
.grid{
  padding-top: 64px;
  width: 100%;
};
</style>