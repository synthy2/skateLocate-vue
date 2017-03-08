<template lang="html">
  <section class="controls">
    <button type="button" name="button" v-if="!isAddingMarkers" v-on:click="toggleAddingMarkers">Enable Marker Addition</button>
    <button type="button" name="button" v-if="isAddingMarkers" v-on:click="toggleAddingMarkers">Disable Marker Addition</button>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters([
      "isAddingMarkers",
      "isShowingNotification"
    ])
  },
  methods: {
    toggleAddingMarkers(){
      this.$store.dispatch("toggleIsAddingMarkers");
      if (this.isAddingMarkers) this.$store.dispatch("toggleIsShowingNotfication", "Click anywhere on the map to add a marker! :D");
    }
  }
}
</script>

<style lang="css">
</style>
