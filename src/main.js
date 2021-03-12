import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import msal from 'vue-msal'
//FRONT
  import ElementUI from 'element-ui';
  import 'element-ui/lib/theme-chalk/index.css';
  import 'element-ui/lib/theme-chalk/display.css';
  import locale from 'element-ui/lib/locale/lang/en'
  import VueFilterDateFormat from '@vuejs-community/vue-filter-date-format';
//FONT AWESOME
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import { library, config } from '@fortawesome/fontawesome-svg-core';
  import { fab } from '@fortawesome/free-brands-svg-icons';
  import { far } from '@fortawesome/free-regular-svg-icons';
  import { fas } from '@fortawesome/free-solid-svg-icons';
  library.add(fab);
  library.add(far);
  library.add(fas);
//MANSONRY CSS
  import VueMasonry from 'vue-masonry-css';
//USE
  Vue.use(ElementUI, { locale });
  Vue.use(VueMasonry);
  Vue.use(VueFilterDateFormat,{
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
  });
  Vue.use(msal, {
    auth: {
      authority: 'https://login.microsoftonline.com/346a1d1d-e75b-4753-902b-74ed60ae77a1',
      clientId: '0b368afc-a7f9-45fb-9b99-4d729836e071',
      redirectUri: 'http://localhost:8080/'
      /*
      clientId: 'aa611fe1-33ad-4929-8717-be5a029daef2',
      redirectUri: 'https://miespaciolaureate.com/vue-azure/'
      */
    },
    cache: {
      cacheLocation: 'localStorage',
      storeAuthStateInCookie: false
    },
    graph: {
      callAfterInit: true,
      endpoints: {
        profile: '/me',
      }
    },
  });
//COMPONENTS 
  Vue.component('font-awesome-icon', FontAwesomeIcon);
//
Vue.config.productionTip = false
//
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
