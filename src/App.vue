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
button {
  outline: none;
  border: 1px solid rgb(198, 198, 247);
  cursor: pointer;
  padding: 7px;
  background-color: rgb(198, 198, 247);
  border-radius: 5px;
  margin-left: 1px;
  margin-right: 1px;
}
</style>
