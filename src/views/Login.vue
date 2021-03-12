<template>
  <div class="login">
    <el-main
      class="main"
      :style='{
        backgroundImage: "url(https://miespaciolaureate.com/pruebas_media/comunicacion-corporativa1.jpg)",
        backgroundPosition: "center center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        minHeight: "100vh"
      }'
    >
      <el-col id="login-card">
        <el-card>
          <h1 class="title-card">Comuniacación Laureate</h1>
          <p class="text-card">Por favor inicia sesión con tu cuenta y contraseña institucional. Recuerda que solo podrás entrar con cuentas corporativas (@uvmnet.edu, @mail.unitec.mx, @laureate.mx) con la excepción de los colegios. Para una mejor experiencia utiliza <strong>Firefox</strong> o <strong>Chrome</strong>. Si usas <strong>Safari</strong> da clic <a href="#" class="textLink" @click="dialog_safari = true">aquí</a></p> 
          <p class="text-card">Si tienes algún problema con tu cuenta comunicate con <a href="mailto:mesadeayuda@laureate.mx" class="textLink">Mesa de ayuda</a>. O reinicia tu contraseña a travéz de <a href="https://passwordreset.microsoftonline.com" class="textLink">Office356</a></p>
          <el-button type="info" size="mini" plain @click="login()">
            <font-awesome-icon :icon="['fab', 'microsoft']"/> <span class="text-button">Iniciar sesión</span> 
          </el-button>
        </el-card>
      </el-col>
    </el-main>
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
      <p>Descripción del problema</p>
      <span slot="footer" class="dialog-footer">
        <el-button type="info" @click="dialog_safari = false" size="mini" plain>Aceptar</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>export default {
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
  created() {
    if(this.$msal.isAuthenticated()){
      this.$router.replace('home')
    }
  }
}
</script>