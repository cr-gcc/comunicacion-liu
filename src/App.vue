<template>
  <div id="app">
    <!--
    <div 
      class="main"
      :style='{
        backgroundImage: "url("+back_img+")",
        backgroundPosition: "center center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        minHeight: mh
      }'
    ></div>
  -->
      <router-view/>
    
  </div>
</template>
<script>
  export default {
    name: "App",
    /*
    data(){
      return{
        mh: "100vh"
      }
    },
    created() {
      if(this.$msal.isAuthenticated()){
        this.back_img = "https://wallpaperaccess.com/full/492167.png"
        this.mh = ""
      }
      else{
        this.back_img = "https://miespaciolaureate.com/pruebas_media/comunicacion-corporativa1.jpg"
        this.mh = "100vh"
      }
    }
    */
  }
</script>
<style lang="css">  
  @import './assets/styles/core.css';
</style>
