<template>
  <div class="not-found">
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
      <el-col id="nf-card">
        <el-card>
          <h1 class="">Error 404</h1>
          <h3 class="title-card-error">No se encontro alguna página que corresponda con esta dirección</h3>
          <h3 class="title-card-return">
            <router-link to="/home">Regresar la inicio <font-awesome-icon :icon="['fas', 'home']"/></router-link>
          </h3>
        </el-card>
      </el-col>
    </el-main>
  </div>
</template>

<script>export default {
  name: 'NotFound',
}
</script>