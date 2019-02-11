<template>
  <div class="main-screen">
    <div class="container">
      <new-task class="m-10"></new-task>
      <h3 class="m-20">Tasks:</h3>
      <task-list></task-list>
    </div>
  </div>
</template>

<script>
import NewTask from "@/components/New-task";
import TaskList from "@/components/Task-list";
export default {
  name: "Tasks",
  data() {
    return {
      text: ""
    };
  },

  components: {
    NewTask,
    TaskList
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.m-200 {
  margin: 20px;
}
</style>