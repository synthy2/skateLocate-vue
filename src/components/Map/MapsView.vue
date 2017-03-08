<template lang="html">
  <main>
    <section id="map">
    </section>
  </main>
</template>

<script>

import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default {
    mounted(){
      this.buildMap();
    },
    methods: {
      buildMap(){
        let map = L.map("map").setView([51.505, -0.09], 13);

        console.log(L);
        L.tileLayer("https://api.mapbox.com/styles/v1/intheon/cippeqrwl003me9nliwhu6mtz/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaW50aGVvbiIsImEiOiJjaW5lZ3RkaDUwMDc2d2FseHhldHl0Y3dyIn0.L1RWCbggwqkNegUc1ZIwJw")
          .addTo(map);

      }
    }
}
</script>

<style lang="scss">

  #map {
    height: 100vh;
  }

</style>
