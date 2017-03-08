<template lang="html">
  <section class="controls">

    <div class="toggle-adding">
      <button type="button" name="button" v-if="!isAddingMarkers" v-on:click="toggleAddingMarkers">Add New Park</button>
      <button type="button" name="button" v-if="isAddingMarkers" v-on:click="toggleAddingMarkers">Stop</button>
    </div>

    <div class="toggle-adding">

    </div>

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

<style lang="scss">

  .controls {
    height: 100vh;
    width: 128px;
    background: white;
    border-right: 2px solid #c6c9b8;
  }

</style>
