import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import msal from 'vue-msal'
import axios from 'axios';
//FRONT
  import ElementUI from 'element-ui'
  import 'element-ui/lib/theme-chalk/index.css'
  import 'element-ui/lib/theme-chalk/display.css'
  import locale from 'element-ui/lib/locale/lang/en'
  import VueFilterDateFormat from '@vuejs-community/vue-filter-date-format'
  //import filterDateFormat from './plugins/filterDateFormat'
  //import msalConfig from './auth/msalConfig'
//FONT AWESOME
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import { library, config } from '@fortawesome/fontawesome-svg-core'
  import { fab } from '@fortawesome/free-brands-svg-icons'
  import { far } from '@fortawesome/free-regular-svg-icons'
  import { fas } from '@fortawesome/free-solid-svg-icons'
  library.add(fab)
  library.add(far)
  library.add(fas)
//MANSONRY CSS
  import VueMasonry from 'vue-masonry-css'
//USE
  Vue.use(ElementUI, { locale })
  Vue.use(VueFilterDateFormat, { 
    dayOfWeekNames: [
      'Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves',
      'Viernes', 'Sabado'
    ],
    dayOfWeekNamesShort: [
      'Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'
    ],
    monthNames: [
      'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
      'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ],
    monthNamesShort: [
      'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun',
      'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'
    ] 
  })
  Vue.use(msal, {
    auth: {
      authority: process.env.VUE_APP_AUTHORITY,
      clientId: process.env.VUE_APP_CLIENT_ID,
      redirectUri: process.env.VUE_APP_REDIRECT_URI
    },
    cache: {
      cacheLocation: 'localStorage',
      storeAuthStateInCookie: false
    },
    graph: {
      callAfterInit: true,
    } 
  })
  Vue.use(VueMasonry)
//COMPONENTS 
  Vue.component('font-awesome-icon', FontAwesomeIcon)
//
Vue.config.productionTip = false
//
window.axios = require('axios');
//
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
