<template>
  <div id="app">
    <!-- <GlobalHeader /> -->
    <router-view />
    <!-- <GlobalFooter /> -->
  </div>
</template>

<script>
// import GlobalHeader from "@/components/GlobalHeader.vue";
// import GlobalFooter from "@/components/GlobalFooter.vue";

export default {
  name: "app",
  components: {
    // GlobalHeader,
    // GlobalFooter,
  },
  methods: {
    goto() {
      this.$router.push("/about");
    },
  },
};
</script>

<style lang="less">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html {
  height: 100%;
}
body {
  width: 100%;
  height: 100%;
  overflow-y: hidden;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
.happy-scroll-container {
  width: 100% !important;
  height: 100% !important;
}
.happy-scroll-content {
  width: 100% !important;
}
img {
  -webkit-user-drag: none;
}
// @media only screen and (min-width: 1200px) {
//   html {
//     font-size: 130% !important;
//   }
// }
</style>
