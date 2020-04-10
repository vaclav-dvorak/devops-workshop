<template>
  <div id="app">
    <Home msg="DevOps workshop" />
  </div>
</template>

<script>
import Home from "./components/Home.vue";

export default {
  name: "App",
  components: {
    Home
  }
};
</script>

<style>
html,
body {
  height: 100%;
  margin: 0;
}
#app {
  height: 100%;
  width: 100%;
  font-family: Anodina, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.05em;
  color: rgb(230, 230, 230);
  background: linear-gradient(rgb(85, 85, 85) 0%, rgb(101, 101, 101) 100%);
}

@font-face {
  font-family: "Anodina";
  src: local("Anodina Light"), local("Anodina-Light"),
    url("./assets/fonts/Anodina-Light.woff2") format("woff2"),
    url("./assets/fonts/Anodina-Light.woff") format("woff");
  font-weight: 300;
  font-style: normal;
}
</style>
