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
  }

  .show-messaging-component {
    margin-top: -200px;
  }

</style>
