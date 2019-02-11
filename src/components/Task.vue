<template>
  <div class="card" @click="click">
    <h3>{{text}}</h3>
  </div>
</template>

<script>
export default {
  name: "TaskLists",
  data() {
    return {};
  },

  props: ["text"],

    methods:{
        click: function () {
            this.$emit('click')
        }
    }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.card {
  margin: 10px;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  text-transform: capitalize;
}

.card:hover{
    cursor: pointer;
}

.card:active{
    cursor: pointer;
    background-color: #35495e;
    color: #fff;
}



</style>