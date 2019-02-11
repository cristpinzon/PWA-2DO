<template>
  <div class>
    <task v-if="!isEmpty" v-for="task in tasks" :key="task.id" :text="task.text" @click="complete(task.id)"></task>
    <span v-if="isEmpty" >All done! Take a break.</span>
  </div>
</template>

<script>
import Task from "@/components/Task";

export default {
  name: "TaskLists",
  data() {
    return {
      tasks: []
    };
  },
  components: {
    Task
  },
  computed:{
      isEmpty: function () {
          if (this.tasks.length){
              return false
          }
          return true
      }
  },

  mounted: function () {
      this.tasks = this.$store.getters.getTasks
  },

  methods:{
    complete: function (id) {
      this.$store.commit('deleteTask',id)
      this.tasks = this.$store.getters.getTasks
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.pts-10 {
  height: 35px;
}
</style>