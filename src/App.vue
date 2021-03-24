<template>
  <div id="app">
    <Home name="Mayur" />
  </div>
</template>

<script>
import Home from "./components/Home";
export default {
  name: "App",
  components: {
    Home,
  },
};
</script>

<style>
body {
  background: rgba(237, 255, 249, 0.733);
}
</style>
