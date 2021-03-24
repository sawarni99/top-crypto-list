<template>
  <div class="column">
    <b class="table-heading">{{ head }}</b>
    <div v-for="item in list" :key="item.id">
      {{ pre }} {{ item[name] }} {{ post }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: Array,
    name: String,
    head: String,
    pre: String,
    post: String,
  },
};
</script>

<style>
.column {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgb(46, 46, 46);
  margin: 3%;
}
.table-heading {
  font-size: 20px;
  margin-bottom: 15px;
}
</style>