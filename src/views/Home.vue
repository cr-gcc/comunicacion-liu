<template>
  <div class="home">
    <div :id="'comunicados_'+marcaInsClass">
      <!--INTITUTION-->
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
      <!--MESSAGE-->
        <div class="msgSlides" v-if="flag_slides">
          <h2>{{msg}}</h2>
        </div>
      <!--SLIDES-->
        <div class="contentSlides">
          <masonry
            :cols="{default: 3, 800: 2, 512: 1}"
            :gutter="{default: '10px'}"
            >
            <div 
              v-for="(slide, index) in slides"
              @click="goPost(slide.id)"
              :key="'com'+slide.id" 
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
        </div>
      <br>
    </div>
    
    <!--  MODAL WELCOME -->
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
  </div>
</template>
<script>
  import { mapState, mapActions } from 'vuex'
  export default {
    name: 'Home',
    data(){
      return{
        dialog_welcome: false
      }
    },
    //
    methods:{
      ...mapActions(['getSlides']),
      //
      welcome(){
        let email = ""
        let location = 0
        let domain = ""
        let location_type = 0
        let institution = 0
        let at = this.$msal.data.accessToken
        //
        axios
        .get("https://graph.microsoft.com/v1.0/me", {
          headers: {
            Authorization: 'Bearer '+at,
            'Content-Type': 'application/json'
          }
        })
        .then((res) => {
          email = res.data.mail
          location = res.data.officeLocation
          domain = email.split('@')[1]
          //CORPORATIVOS
          //UVM
            if(location==="Oficinas Corporativas" || location==="Corporativo Santa Fe"){
              location_type = 2
              institution = 1
            }
          //UNITEC
            else if(location==="Oficina Corporativa" || location==="Unitec Corp Atizapan"){
              location_type = 2
              institution = 2
            }
          //CAMPUS
            else{
              location_type = 1
              //UVM
                if(domain==="uvmnet.edu" || domain==="villarica.edu.mx"){
                  institution = 1
                }
              //UNITEC
                else if(domain==="mail.unitec.mx"){
                  institution = 2
                }
                else if(domain==="laureate.mx"){
                  if(location === "Atizapan" || 
                     location === "Cuitlahuac" || 
                     location === "Ecatepec" || 
                     location === "Los Reyes" || 
                     location === "Marina" || 
                     location === "On-Line Virtual" || 
                     location === "UNTC Guadalajara" || 
                     location === "UNTC Leon" || 
                     location === "UNTC Monterrey" || 
                     location === "UNTC Queretaro" || 
                     location === "Unitec Toluca"){
                    institution = 2
                  }
                  else{
                    institution = 1
                  }
                }
            }
          //LS
            localStorage.setItem('msal.location', location_type)
            localStorage.setItem('msal.institution', institution)
            this.$store.commit('layoutUser', true)
            this.dialog_welcome = false;
            this.getSlides(true)
        })
        .catch((error) => {
          console.log("getUserProfile loading");
        })
        //
      },
      //
      goPost(id){
        this.$router.push('/post/'+id)
      },
    },
    //
    computed: {
      ...mapState([
        'marcaInsClass',
        'landingIns',
        'msg',
        'slides',
        'flag_slides',
        'todate'
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
      this.$store.commit('flagPost', true)
      if(!this.$msal.data.accessToken){
        this.dialog_welcome = true
      }
      else{
        if(!this.slides.length){
          this.getSlides(true)
        }
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