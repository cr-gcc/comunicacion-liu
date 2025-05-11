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
              <div v-if="postOk">
                <div v-if="post[0]['doc_type'] == 'html'">
                  <iframe id="postHMTL" :src="post[0]['page']"></iframe>  
                </div>
                <div v-else-if="post[0]['doc_type'] == 'img'">
                  <img width="100%" :src="post[0]['page']" alt="">
                </div>
                <div v-else>
                  <h2>Ha ocurrido un error al momento de hacer la consulta</h2><h3>Por favor regrese a la página de inicio para buscar otro post o intentalo más tarde.</h3>
                </div>
              </div>
              <div 
                class="msg" 
                v-if="postOthers" 
                v-html="post"
              >
              </div>
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
      postOthers: false,
      postOk: false,
      post: null
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
        this.$store.commit('layoutNotFound', true)
      }
      //
      let id = this.$route.params.id
      let url = process.env.VUE_APP_API_URL+"comunicado/"+id
      axios
      .get(url)
      .then((res) => {
        if(res.data.estatus===1){
          this.postOk = true
          this.postOthers = false
          this.post = res.data.msg
        }
        else{
          this.postOk = false
          this.postOthers = true
          this.post = res.data.msg
        }
      })
      .catch((error) => {
        this.postOk = false
        this.postOthers = true
        this.post = "<h2>Ha ocurrido un error al momento de hacer la consulta</h2><h3>Por favor regrese a la página de inicio para buscar otro post o intentalo más tarde.</h2>"
      })  
    }
  }
}
</script>
<style lang="css" scoped>
  @import '../assets/styles/post.css';
</style>