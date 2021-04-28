<template>
  <div id="app" :class="'img'+page">
    <div class="comunicados">
      <div 
        v-if="$msal.isAuthenticated()"
        v-loading.fullscreen.lock="fullscreenLoading"
        element-loading-text="Cargando"
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0, 0, 0, 0.6)"
        >
      </div>
      <el-menu 
        v-if="$msal.isAuthenticated()"
        id="emd"
        class="el-menu-demo" 
        mode="horizontal"
        text-color="#fff"
        active-text-color="#fff"
        :background-color="navIns"
        default-active="3"
      >
        <el-menu-item index="1">
          <figure style="margin: 0">
            <img v-if="logoIns" class="nav_mi" :src="require(`@/assets/images/comunicados/${logoIns}`)"> 
          </figure>  
        </el-menu-item>
        <el-menu-item index="3">
          <div class="nav_button_ss" @click="logout()">
            <span>Salir</span>
            <span class="pos_icon">
              <font-awesome-icon icon="sign-out-alt"/>
            </span>
          </div>
        </el-menu-item>
        <el-menu-item index="2" v-if="vsFS">
          <div class="nav_button_search" @click="vsSearch =! vsSearch">
            <span>Buscar</span>
            <span class="pos_icon">
              <font-awesome-icon icon="search"/>
            </span>
          </div>
        </el-menu-item>
      </el-menu>
      <section
        v-if="$msal.isAuthenticated()" 
        :class="'search_container_'+marcaInsClass" 
        v-show="vsSearch"
      >
        <div class="sc-position">
          <div class="block">
            <div class="input_mounth">
              <el-date-picker
                v-model="fecha"
                type="month"
                format="MM yyyy"
                size="mini"
                placeholder="Seleccione un mes">
              </el-date-picker>
              <el-button type="info" size="mini" plain @click="searchCom()">
                <span>Enviar</span>
                <span class="pos_icon">
                  <font-awesome-icon icon="paper-plane"/>
                </span>
              </el-button>  
            </div>
          </div>
        </div>
      </section>
      <el-main id="mainContent">
        <router-view/>
      </el-main>
      <footer v-if="$msal.isAuthenticated()">
        <div :id="'footer_'+marcaInsClass">
          <el-row>
            <el-col :xs="24" :sm="12" class="footer_space">
              <span class="footer_made">Mantente en contacto a través de nuestras redes sociales, o visita el sitio oficial dando clic en <span class="footer_marca"><a id="fm" href="#">{{marca}}</a></span></span>
            </el-col>
            <el-col :xs="24" :sm="12" class="footer_space text-right">
              <div class="footer_sn">
                <div class="footer_icon">
                  <a :href="instagram">
                    <font-awesome-icon :icon='["fab", "instagram-square"]'/>
                  </a>
                </div>
                <div class="footer_icon">
                  <a :href="facebook">
                    <font-awesome-icon :icon='["fab", "facebook-square"]'/>
                  </a>
                </div>
                <div class="footer_icon">
                  <a :href="twitter">
                    <font-awesome-icon :icon='["fab", "twitter-square"]'/>
                  </a>
                </div>
                <div class="footer_icon">
                  <a :href="youtube">
                    <font-awesome-icon :icon='["fab", "youtube-square"]'/>
                  </a>
                </div>
                <div class="footer_icon">
                  <a :href="linkedin">
                    <font-awesome-icon :icon='["fab", "linkedin"]'/>
                  </a>
                </div>
              </div>
            </el-col>
          </el-row>
          <el-row class="footer_align mt-2">
            <el-col :sm="24">
              <span class="footer_made">Made By</span> <span class="footer_made_bold">HR Development Area</span>
              <br>
              <span class="footer_made">©2020 Laureate Education, Inc. Legal Information</span>
            </el-col>
          </el-row>
        </div>
      </footer>
    </div>
  </div>
</template>
<script>
  import { mapState, mapMutation, mapActions } from 'vuex'
  export default {
    name: "App",
    data(){
      return{
        fecha: "",
        vsSearch: false,
      }
    },
    //
    methods:{
      ...mapActions(['getSlidesByDate']),
      searchCom(){
        let form = {
          locacion: localStorage.getItem('msal.location'),
          institucion: localStorage.getItem('msal.institution'),
          fecha: this.fecha
        }
        this.getSlidesByDate(form)
        this.vsSearch = false
        this.fecha = ""
      },
      //
      logout(){
        this.$msal.signOut();
      },
    },
    //
    computed: {
      ...mapState([
        'fullscreenLoading',
        'navIns',
        'logoIns',
        'marcaInsClass',
        'marca',
        'instagram',
        'facebook',
        'twitter',
        'youtube',
        'linkedin',
        'vsFS'
      ])
    },
    //
    created(){
      if(this.$msal.isAuthenticated()){
        this.page = "App"
      }
      else{
        this.page = "Login"
      }
    }
  }
</script>
<style lang="css">  
  @import './assets/styles/core.css';
</style>
