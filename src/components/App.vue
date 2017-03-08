<template>
	<div>
		<router-view></router-view>
	</div>
</template>

<script>
	import { mapGetters }	from "vuex";

	export default {
    name: "app"
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
