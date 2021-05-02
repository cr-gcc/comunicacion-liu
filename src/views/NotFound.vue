<template>
  <div class="not-found">
    <el-col id="nf-card">
      <el-card>
        <h1 class="">Error 404</h1>
        <h3 class="title-card-error">No se encontro alguna página que corresponda con esta dirección</h3>
        <h3 class="title-card-return">
          <a href="/home" class="reloadPage" v-if="reloadPage">Regresar al inicio <font-awesome-icon :icon="['fas', 'home']"/></a>
          <router-link to="/home" class="returnPage" v-if="returnPage">Regresar la inicio <font-awesome-icon :icon="['fas', 'home']"/></router-link>
        </h3>
      </el-card>
    </el-col>
  </div>
</template>
<script>
  import { mapState } from 'vuex'
  export default {
  name: 'NotFound',
  data(){
    return{
      reloadPage: false,
      returnPage: false
    }
  },
  //
  computed: {
    ...mapState(['hf', 'marcaInsClass'])
  },
  created(){
    if(!this.$msal.isAuthenticated()){
      this.$router.replace('login')
    }
    else{
      this.$store.commit('layoutNotFound', false)
      if(!this.marcaInsClass){
        this.reloadPage = true
        this.returnPage = false
      }
      else{
        this.reloadPage = false
        this.returnPage = true
      }
    }
  }
}
</script>