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
          <p class="text-card">Por favor inicia sesión con tu cuenta y contraseña institucional. Recuerda que solo podrás entrar con cuentas corporativas (@uvmnet.edu, @mail.unitec.mx, @laureate.mx) con la excepción de los colegios. Para una mejor experiencia utiliza Firefox o Chrome. Si usas Safari da clic aquí</p>
          <p class="text-card">Si tienes algún problema con tu cuenta comunicate con Mesa de ayuda. O reinicia tu contraseña a travéz de Office356</p>
          <el-button type="info" size="mini" plain @click="login()">
            <font-awesome-icon :icon="['fab', 'microsoft']"/> <span class="text-button">Iniciar sesión</span> 
          </el-button>
        </el-card>
      </el-col>
    </el-main>
  </div>
</template>

<script>export default {
  name: 'Login',
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