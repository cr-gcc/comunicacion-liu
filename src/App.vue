<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
  export default {
    name: "App",
    created() {
      if(this.$msal.isAuthenticated()){
        //localStorage.setItem('msalE', this.$msal.data.graph.profile.email)
      }
    }
  }
</script>
<style lang="css">  
  @import './assets/styles/core.css';
</style>
