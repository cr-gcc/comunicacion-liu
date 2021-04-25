<template>
  <div id="app">
    <div class="comunicados">
      <el-menu 
        id="emd"
        class="el-menu-demo" 
        mode="horizontal"
        text-color="#fff"
        active-text-color="#fff"
        background-color="#abcdef"
        default-active="2"
      >
        <el-menu-item index="1">
          <figure style="margin: 0">
            <img class="nav_mi" src=""> 
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
          <div class="nav_button_search">
            <span>Buscar</span>
            <span class="pos_icon">
              <font-awesome-icon icon="search"/>
            </span>
          </div>
        </el-menu-item>
      </el-menu>
      <el-main>
        <router-view/>
      </el-main>
      <footer>
        <p>footer</p>
        <div v-if="false" :id="'footer_'+marcaInsClass">
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
          v-if="false"
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
  </div>
</template>
<script>
  export default {
    name: "App",
    data(){
      return{

      }
    }
  }
</script>
<style lang="css">  
  @import './assets/styles/core.css';
</style>
