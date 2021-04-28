<template>
  <div class="login">
    <el-col id="login-card">
      <el-card>
        <h2 id="title-card">Comuniacación Laureate</h2>
        <p class="text-card">Por favor inicia sesión con tu cuenta y contraseña institucional. Recuerda que solo podrás entrar con cuentas corporativas (@uvmnet.edu, @mail.unitec.mx, @laureate.mx) con la excepción de los colegios. Para una mejor experiencia utiliza <strong>Firefox</strong> o <strong>Chrome</strong>. Si usas <strong>Safari</strong> da clic <a href="#" id="textLink" @click="dialog_safari = true">aquí</a></p> 
        <p class="text-card">Si tienes algún problema con tu cuenta comunicate con <a href="mailto:mesadeayuda@laureate.mx" id="textLink">Mesa de ayuda</a>. O reinicia tu contraseña a travéz de <a href="https://passwordreset.microsoftonline.com" id="textLink">Office356</a></p>
        <el-button type="info" size="mini" plain @click="login()">
          <font-awesome-icon :icon="['fab', 'microsoft']"/> <span class="text-button">Iniciar sesión</span> 
        </el-button>
      </el-card>
    </el-col>
    <!---->
      <el-dialog
      id="m_safari"
      title="Safari"
      :visible.sync="dialog_safari"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      :show-close="false"
      width="40%"
      center
    >
      <p>Para el correcto funcionamiento en el navegador <strong>Safari</strong> vaya a <strong>Preferences -> Privacy</strong> y desabilite la opción <strong>Prevent cross-site tracking</strong> como se muestra en la imagen de abajo.</p>
      <img style="max-width: 100%" :src="require('@/assets/images/general/safari-help.jpg')"> 
      <span slot="footer" class="dialog-footer">
        <el-button type="info" @click="dialog_safari = false" size="mini" plain>Aceptar</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: 'Login',
  data(){
    return{
      dialog_safari: false
    }
  },
  //
  methods: {
    login(){
      this.$msal.signIn();
    }
  },
  //
  created(){
    if(this.$msal.isAuthenticated()){
      this.$router.replace('home')
    }
  }
}
</script>
<style lang="css" scoped>  
  @import '../assets/styles/login.css';
</style>