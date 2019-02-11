<template>
  <div class="input-form">
    <input class="pts-10" placeholder="Activity..." type="text" v-on:keyup.enter='newActivity' v-model.trim="text">
    <button class="pts-10 button" type="button" @click='newActivity'>
      + NEW
      </button><br>
    <label class="error" v-if="error"> Actividad vacia</label>
  </div>
</template>

<script>
export default {
  name: 'NewTask',
  data () {
    return { 
      text: '',
      error: false
    }
  },

  methods: {
    newActivity: function () {
      this.error =  false
      if(this.text){
        this.$store.commit('addTask', this.text)
        this.$emit('newTask')
        this.text = ''
      }else{
        this.error = true
      }
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.pts-10{
  height: 35px;
}

.button {
  background-color: #35495e;;
  color: white;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  font-weight: 900;
}

.error {
  margin: 5px;
  color: red;
}
</style>