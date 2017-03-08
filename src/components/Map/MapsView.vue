<template lang="html">
  <main>
    <section id="map"></section>
    <map-controls class="controls" />
  </main>
</template>

<script>
/*
 * LEAFLET STUFF
 */
import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-control-geocoder";

import "leaflet.locatecontrol";
import "leaflet/dist/leaflet.css";

/*
 * CUSTOM LEAFLET COMPONENTS
 */
import Controls from "./Controls.vue";

/*
 * FIREBASE
 */
import firebase from "firebase";
import firebaseInstance from "../config/firebaseInstance.js";

const database = firebaseInstance.database();

export default {
    components: {
      "map-controls": Controls
    },
    data(){
      return {
        map: undefined,
      }
    },
    mounted(){
      this.init();
    },
    methods: {
      init(){
        this.map = L.map("map").setView([51.505, -0.09], 13);
        this.addMapTiles();
        this.bindToFirebase();
        this.addControls();
        this.disableZoom();
      },
      addControls(){

        //this.addRoutingMachine();
        //this.addGeolocation();

      },
      addMapTiles(){
        L.tileLayer("https://api.mapbox.com/styles/v1/intheon/cippeqrwl003me9nliwhu6mtz/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaW50aGVvbiIsImEiOiJjaW5lZ3RkaDUwMDc2d2FseHhldHl0Y3dyIn0.L1RWCbggwqkNegUc1ZIwJw")
          .addTo(this.map);
      },
      addRoutingMachine(){
        // third party: http://www.liedman.net/leaflet-routing-machine/
        L.Routing.control({
          waypoints: [
            L.latLng(57.74, 11.94),
            L.latLng(57.6792, 11.949)
          ],
          routeWhileDragging: true,
          geocoder: L.Control.Geocoder.nominatim()
        }).addTo(this.map);
      },
      addGeolocation(){
        let geo = L.control.locate();
        geo.addTo(this.map);
      },
      bindToFirebase(){
        // this automagically populates the `locations` array in the state which is then used leaflet to draw the markers
      },
      disableZoom(){
        this.map.zoomControl.remove();
      }

    }
}
</script>

<style lang="scss">

  #map {
    height: 100vh;
  }

  .leaflet-shadow-pane {
    display: none;
  }

  .controls {
    position: absolute;
    z-index: 1000;
    top: 0;
    left:0;
    background: white;
  }

  .controls button {
    display: block;
  }

</style>
