<template>
  <div class="post">
    <div :id="'comunicados_'+marcaInsClass" class="comunicados">
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
      </el-menu>
      <el-main>
        <br>
        <el-row type="flex" class="row-bg" justify="center">
          <el-col :span="22">
            <div class="grid-content">
              <el-card shadow="always">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                  <el-breadcrumb-item :to="{ path: '/home' }">Home</el-breadcrumb-item>
                  <el-breadcrumb-item>Post</el-breadcrumb-item>
                </el-breadcrumb>
                <!--
                <div class="post_card" v-if="false">
                  <div class="post_date">
                    <span>{{ new Date() | dateFormat('DD MMMM, YYYY') }}</span>
                  </div>
                  <div class="post_title">
                    <h2 :class="'post_tt_'+marcaInsClass">Anuncia UVM reapertura de actividades presenciales en laboratorios y talleres de sus campus Saltillo y Torreón</h2>
                  </div>
                  <el-row :gutter="24">
                    <el-col :xs="24" :sm="6" :md="8" :lg="16" :xl="16">
                      <div class="post_text">
                        <p class="post_pi">
                          Coahuila, 12 de abril de 2021.- Gracias a las disposiciones estatales y a la autorización de la Secretaría de Educación del Gobierno de Coahuila, la Universidad del Valle de México reabrirá en forma parcial sus campus Saltillo y Torreón, para actividades prácticas en talleres y laboratorios, dirigidas a estudiantes de nivel Licenciatura*, a partir del próximo 19 de abril.
                        </p>
                        <p>
                          La UVM se apegará a los protocolos autorizados por la Secretaría de Salud, Secretaría de Educación, del Instituto Mexicano del Seguro Social y los de la propia institución. <a href="#"  :class="'post_ll_'+marcaInsClass">Fuente por definir.</a>
                        </p>
                        <p>
                          De este modo, llevará a cabo las prácticas en talleres y/o laboratorios, cuidando las recomendaciones de sana distancia entre asistentes, además de que para el ingreso y permanencia en campus, imperarán todas las medidas preventivas sanitarias pertinentes.
                        </p>
                        <p>
                          La operación de la institución se basará en el Modelo Semipresencial 40/20/40, una de las nuevas estrategias de enseñanza diseñadas por UVM ante las restricciones impuestas por la pandemia de COVID-19; mismas que permiten cuidar la salud de estudiantes, docentes y colaboradores, al tiempo que se asegura el avance académico, el logro de competencias y el perfil de egreso de los planes y programas de estudio.
                        </p>
                        <p>
                          El Modelo Semipresencial 40/20/40 está dirigido a estudiantes que no enfrentan necesidades especiales y, su funcionamiento se ajusta a las condiciones sanitarias de la ciudad en que se encuentra el campus, como sucederá en el Estado de Coahuila.
                        </p>
                        <p>
                          Este modelo tiene las siguientes características:
                        </p>
                        <p>
                          <ul>
                            <li>40% Clases Síncronas a Distancia: Continúan las clases teóricas a distancia desde la plataforma Microsoft Teams, enriqueciendo las materias con simuladores, Learning Management System, bibliografía digital; así como con foros, clases magistrales y eventos en línea.</li>
                            <li>20% Clases Online: Clases full online en la plataforma Blackboard, donde se tiene acceso a la materia desde el primer día de clases para revisión, consulta y trabajo semanal del estudiante, acompañado por un docente con experiencia profesional y un aula virtual semanal de una hora como espacio didáctico.</li>
                            <li>40% Clases Prácticas: En este modelo se da preferencia a las clases prácticas presenciales, donde se pueden complementar los aprendizajes teóricos.</li>
                          </ul>
                        </p>
                        <p>
                          Serán estudiantes de nivel Licenciatura*, que cursen materias con componentes prácticos, cuyo escenario de impartición sea un taller o laboratorio, quienes serán aplicables para integrarse a este modelo. No podrán asistir quienes tengan una condición de salud que los haga vulnerables ante el COVID-19; mientras que, quienes vivan en una ciudad o estado diferente a la ubicación del Campus, podrán elegir no sumarse a las prácticas presenciales.
                        </p> 
                        <p>
                          Los estudiantes que se encuentren inscritos en las materias seleccionadas, recibirán una encuesta “Forms” por parte de sus coordinadores de programa, donde podrán informar si desean tomar sus clases de manera presencial o prefieren mantenerse a distancia. Quienes decidan tomar las materias seleccionadas de forma presencial, serán contactados de forma inmediata por sus coordinadores de programa, para capacitarse antes del viernes 16 de abril sobre el protocolo de seguridad que deberán seguir. Además, deberán firmar y entregar una Carta de Consentimiento Informado.
                        </p>
                        <p>
                          Los alumnos que decidan mantenerse en casa podrán hacerlo y tomar sus clases vía Microsoft Teams, ya que el equipamiento de Broadcasting que la institución instaló, permite que las clases sean transmitidas desde los escenarios académicos.
                        </p>
                        <p>
                          Cabe enfatizar que, la decisión de asistir será absolutamente voluntaria y ningún estudiante tendrá consecuencia alguna en sus calificaciones o expediente académico si prefiere continuar tomando sus clases a distancia.
                        </p>
                      </div>
                    </el-col>
                    <el-col :xs="24" :sm="6" :md="4" :lg="8" :xl="8">
                      <el-image src="https://laureate-comunicacion.com/prensa/wp-content/uploads/2021/04/9263770640_3d52627788_o.jpg">
                        <div slot="placeholder" class="image-slot">
                          Loading<span class="dot">...</span>
                        </div>
                      </el-image>
                      <br>
                      <el-image src="https://laureate-comunicacion.com/prensa/wp-content/uploads/2021/04/9263770640_3d52627788_o.jpg">
                        <div slot="placeholder" class="image-slot">
                          Loading<span class="dot">...</span>
                        </div>
                      </el-image>
                      <br>
                      <iframe width="100%" height="auto" src="https://www.youtube.com/embed/vU_wkguq95Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      <br>
                      <iframe width="100%" height="auto" src="https://www.youtube.com/embed/vU_wkguq95Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      <br>
                      <div class="post_links">
                        <p>
                          <a href="#" :class="'post_ll_'+marcaInsClass">Desarrollarán en UVM Campus Torreón, Invernadero automatizado para Hortalizas</a>
                        </p>
                        <p>
                          <a href="#" :class="'post_ll_'+marcaInsClass">Egresados de UVM Torreón prueban con éxito Sistema de Alimentación y Ahorro de Combustible en Motocicletas</a>
                        </p>
                        <p>
                          <a href="#" :class="'post_ll_'+marcaInsClass">Ernesto Boardman, con la mira y el corazón puestos en el sueño olímpico</a>
                        </p>
                        <p>
                          <a href="#" :class="'post_ll_'+marcaInsClass">La UVM Campus Saltillo Tiene Talento para Desarrollar Tecnología Aeroespacial</a>
                        </p>
                      </div>
                    </el-col>
                  </el-row>
                </div>
                -->
                <div class="post_view" v-html="postHTML">
                </div>
              </el-card>
              <br>
            </div>
          </el-col>
        </el-row>
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
    </div>
    
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
  name: 'Post',
  data(){
    return{
      postHTML: []
    }
  },
  //
  computed: {
    ...mapState([
      'marcaInsClass',
      'navIns',
      'logoIns',
      'marca',
      'instagram',
      'facebook',
      'twitter',
      'youtube',
      'linkedin'
    ])
  },
  //
  created(){
    if(!this.$msal.isAuthenticated()){
      this.$router.replace('login')
    }
  }

}
</script>
<style lang="css">
  h1 {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  color: #F25B22;
}
.areas {
  font-family: 'Open Sans', sans-serif;
  font-size: 24px;
  color: #808080;
}
.asunto {
  font-family: 'Open Sans', sans-serif;
  font-size: 1.5em;
  color: #333;
  text-align:center;
    padding-top: 15px;
}
.fecha {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  font-weight: bold;
  color: #000;
}
.dirigido {
  font-family: 'Open Sans', sans-serif;
  font-size: 1.5em;
  color: #333;
  text-align:center;
    padding: 15px;
}
.direccion {
  font-family: 'Open Sans', sans-serif;
  font-size: 3em;
    font-weight: bold;
  color: #E5B000;
  text-align:right;
    padding-right: 15px;
    padding-bottom: 5px;
}
.texto {
  font-family: 'Open Sans', sans-serif;
  font-size: 0.875em;
  font-weight: 300;
    line-height: 2em;
  color: #000;
  text-align:justify;
    padding-left: 20px;
    padding-right: 20px;
}.texto-right {
  font-family: 'Open Sans', sans-serif;
  font-size: 0.875em;
  font-weight: 300;
    line-height: 2em;
  color: #000;
  text-align:right;
    padding-left: 20px;
    padding-right: 20px;
}
.bold {
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #000;
}
.titulo3 {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 10px;
  font-style: normal;
  font-weight: bold;
  color: #FFFFFF;
}

a:link {
  color: #F25B22;
}
</style>