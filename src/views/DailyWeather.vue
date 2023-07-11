<template>
  <v-container>
    <v-row>
      <v-col cols="4" v-for="(city,index) in cities" :key="index">
        <v-card class="mx-auto" max-width="368" variant="tonal">
          <v-card-item :title="this.city.name"> </v-card-item>
          <v-list class="bg-transparent">
            <v-list-item
            >
              <div d-flex justify-space-evenly>
                <v-row>
                  <v-col class="text-left">
                    <v-card-subtitle>
                      <v-icon small icon="mdi-calendar"></v-icon>

                    </v-card-subtitle>
                  </v-col>
                  <v-col class="text-center ml-7">
                   kjghkj
                  </v-col>

                </v-row>
              </div>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "DailyPage",
  props:["cities"],

  data() {
    return {
    };
  },

};
</script>
