<template>
    <div class="main-screen center">
    <circle9></circle9>
    <label>Loading...</label>
    </div>
</template>

<script>
import { Circle9 } from "vue-loading-spinner";

export default {
  name: "Main",
  components: {
    Circle9
  },
  data() {
    return {};
  },

  methods: {},

  mounted: function () {
    var component =  this
    setTimeout(function () {
      component.$router.push('Tasks')
    }, 3000)
  }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
