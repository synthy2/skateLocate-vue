<template>
	<div>
		<router-view></router-view>
    <messaging-component />
	</div>
</template>

<script>
	import { mapGetters }	from "vuex";

  import Messaging from "./Messaging/Messaging.vue";

	export default {
    name: "app",
    components: {
      "messaging-component": Messaging
    },
    computed: {
      ...mapGetters([
        "isAddingMarkers",
        "isShowingNotification"
      ])
    }
	}
</script>

<style lang="scss">

  $background: #ffffff;
  $fontColour: #565e75;
  $masterFont: "Lucida Sans Unicode", "Lucida Grande", sans-serif;

  body {
    background: $background;
    color: $fontColour;
    font-family: $masterFont;
    margin: 0;
    padding: 0;
  }

  h2 {
    letter-spacing: 4px;
  }


</style>
