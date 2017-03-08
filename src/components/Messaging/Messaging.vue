<template lang="html">
  <section class="messaging-component" v-bind:class="{ 'show-messaging-component': isShowingNotification }">
    {{ notificationMessageText }}
  </section>
</template>

<script>
	import { mapGetters }	from "vuex";

	export default {
    computed: {
      ...mapGetters([
        "isShowingNotification",
        "notificationMessageText"
      ])
    }
	}
</script>

<style lang="scss" scoped>

  .messaging-component {
    position: absolute;
    transition: 0.5s all;
    z-index: 2000;
    padding: 16px;
    border-radius: 8px;
    background: black;
    margin: 8px;
  }

  .show-messaging-component {
    margin-top: -200px;
  }

</style>
