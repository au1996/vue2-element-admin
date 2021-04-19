<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <keep-alive :include="cachedViews" :exclude="notAliveViews">
        <router-view :key="key"></router-view>
      </keep-alive>
    </transition>
  </section>
</template>

<script>
export default {
  name: "AppMain",
  computed: {
    cachedViews() {
      return this.$store.state.tagsView.cachedViews;
    },
    notAliveViews() {
      return this.$store.state.tagsView.notAliveViews;
    },
    key() {
      return this.$route.fullPath;
    }
  }
};
</script>

<style scoped>
#app .app-main {
  /*84 = navbar + tags-view = 50 +34 */
  height: calc(100vh - 84px);
  position: relative;
  overflow-x: hidden;
  padding: 32px;
}
</style>

