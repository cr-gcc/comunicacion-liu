<template>
  <div class="post">
    <div :id="'comunicados_'+marcaInsClass">
      <el-row type="flex" class="row-bg postContent" justify="center">
        <el-col :span="22">
          <div class="grid-content">
            <el-card shadow="always">
              <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/home' }">Home</el-breadcrumb-item>
                <el-breadcrumb-item>Post</el-breadcrumb-item>
              </el-breadcrumb>
              <br>
              <iframe id="postHMTL" v-if="post" :src="post[0].page"></iframe>
            </el-card>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
  import { mapState } from 'vuex'
  export default {
  name: 'Post',
  props: ['id'],
  data(){
    return{
      post: null,
    }
  },
  //
  computed: {
    ...mapState(['marcaInsClass'])
  },
  //
  created(){
    if(!this.$msal.isAuthenticated()){
      this.$router.replace('login')
    }
    else{
      this.$store.commit('flagPost', false)
      if(!this.marcaInsClass){
        this.$store.commit('layoutUser', true)
      }
      //
      let id = this.$route.params.id
      let url = "http://localhost/api-comunicacion/comunicado/"+id
      axios
      .get(url)
      .then((res) => {
        this.post = res.data
      })
      .catch((error) => {
        this.post[0] = {body: "<h2>No se encontro algún post asociado a este identificador. O ha ocurrido un error al momento de realizar la consulta.</h2><h3>Por favor regrese a la página de inicio para buscar otro post o intentalo más tarde.</h3>"}
      })  
    }
  }
}
</script>
<style lang="css" scoped>
  @import '../assets/styles/post.css';
</style>