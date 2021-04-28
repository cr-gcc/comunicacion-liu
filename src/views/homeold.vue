<template>
  <div class="home">
    <div :id="'comunicados_'+marcaInsClass" class="comunicados">
      <div 
        v-loading.fullscreen.lock="fullscreenLoading"
        element-loading-text="Cargando"
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0, 0, 0, 0.6)"
        >
      </div>
      <el-menu 
        id="emd"
        class="el-menu-demo" 
        mode="horizontal"
        text-color="#fff"
        active-text-color="#fff"
        :background-color="navIns"
        default-active="2"
      >
        <el-menu-item index="1">
          <figure style="margin: 0">
            <img v-if="logoIns" class="nav_mi" :src="require(`@/assets/images/comunicados/${logoIns}`)"> 
          </figure> 
        </el-menu-item>
        <el-menu-item index="2">
          <div class="nav_button_ss" @click="logout()">
            <span>Salir</span>
            <span class="pos_icon">
              <font-awesome-icon icon="sign-out-alt"/>
            </span>
          </div>
        </el-menu-item>
        <el-menu-item index="3" >
          <div class="nav_button_search" @click="vsSearch =! vsSearch">
            <span>Buscar</span>
            <span class="pos_icon">
              <font-awesome-icon icon="search"/>
            </span>
          </div>
        </el-menu-item>
      </el-menu>
      <div class="sections" >
        
      </div>
      <section :class="'search_container_'+marcaInsClass" v-show="vsSearch">
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
        <div class="sc-info" v-if="vsInfo">
          <el-alert
            :title="vsInfoMsg"
            type="error"
            show-icon>
          </el-alert>
        </div>
      </section>
      <section class="parallax-container">
        <div 
          class="parallax"
          :style="bgLandingImg"
        >
          <h1 class="paralax_title">
            <span v-if="todate" class="paralax_title_date">Comunicados 
            {{ todate | dateFormat('MMMM YYYY')}}</span>
          </h1>
        </div>
      </section>
      <el-main>
        <div class="msgSlides" v-if="flag_slides">
          <h1>{{msg}}</h1>
        </div>
        <masonry
          :cols="{default: 3, 800: 2, 512: 1}"
          :gutter="{default: '10px'}"
          >
          <div 
            v-for="(slide, index) in slides"
            @click="goPost(slide.id)"
            :key="'com'+id" 
            class="item" 
          >
            <div class="item_img">
              <el-image 
                style="
                max-width: 100%; 
                border-radius: 10px"
                :src="slide.slide" 
                >
              </el-image>
            </div>
            <div class="item_info">
              <div class="item_date">
                {{ new Date(slide.date) | dateFormat('DD MMMM, YYYY') }}
              </div>
              <div class="item_title">
                <h3 class="item_txt item_tt">{{ slide.desc }}</h3>
              </div>
            </div>
          </div>
        </masonry>
      </el-main>
      <footer>
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
      <!--  MODAL WELCOME  -->
        <el-dialog
          id="m_welcome"
          title="Bienvenido"
          :visible.sync="dialog_welcome"
          :close-on-click-modal="false"
          :close-on-press-escape="false"
          :show-close="false"
          width="40%"
          center
        >
          <p>A continuación podrás consultar los comunicados correspondientes al mes actual. O si lo prefieres puedes puedes buscar comunicados anteriores.</p>
          <span slot="footer" class="dialog-footer">
            <el-button type="info" @click="welcome()" size="mini" plain>Aceptar</el-button>
          </span>
        </el-dialog>
      <!--  MODAL ERROR  -->
        <el-dialog
          id="m_error"
          title="Mensaje"
          :visible.sync="dialog_msg"
          :close-on-click-modal="false"
          :close-on-press-escape="false"
          :show-close="false"
          width="30%"
          center
        >
          <p>{{msg}}</p>
          <span slot="footer" class="dialog-footer">
            <el-button type="info" @click="closeMsg()" size="mini" plain>Aceptar</el-button>
          </span>
        </el-dialog>
    </div>
  </div>
</template>
<script>
  import { mapState, mapMutation, mapActions } from 'vuex'
  export default {
    name: 'Home',
    data(){
      return{
        //TIME
          fecha: "",
        //VANISH
          vsSearch: false,
        //act
          dialog_welcome: false,
      }
    },
    //
    methods:{
      ...mapActions([
        'getUCAsinc',
        'getComByDateAsic'
      ]),
      //SEARCH COM
      /*
      searchCom(){
        let form = {
          locacion: this.location,
          marca: this.company,
          fecha: this.fecha
        }
        this.getComByDateAsic(form);
        this.fecha = "";
      },
      */
      //
      goPost(id){
        this.$router.push('/post/'+id)
      },
      //
      logout(){
        this.$msal.signOut();
      },
      //
      welcome(){
        this.getUCAsinc(true)
        this.dialog_welcome = false;
      },
      //
      closeMsg(){
        this.$store.commit('closeMessageError', false)
        location.reload()
      }
    },
    //
    computed: {
      ...mapState([
        'company',
        'location',
        'todate',
        'dateSearch',
        'marcaInsClass',
        'navIns',
        'logoIns',
        'landingIns',
        'slides',
        'slides_imgs',
        'marca',
        'instagram',
        'facebook',
        'twitter',
        'youtube',
        'linkedin',
        'fullscreenLoading',
        'flag_slides',
        'msg',
        'dialog_msg',
        'vsInfo',
        'vsInfoMsg'
      ]),
      bgli(){
        if(this.landingIns){
          return require("@/assets/images/landings/"+this.landingIns)
        }
      },
      bgLandingImg(){
        if(this.landingIns){
          return {
            backgroundImage: `url(${this.bgli})`
          }
        }
      }
    },
    //
    mounted(){
      if(this.company=="" && this.location==""){
        this.dialog_welcome = true;
      }
    },
    //
    created(){
      if(!this.$msal.isAuthenticated()){
        this.$router.replace('login')
      }
    }
  }
</script>