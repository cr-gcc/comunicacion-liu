import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  //STATE
    state: {
      fullscreenLoading: false,
      flag_slides: false,
      flag_tc: 0,
      hf: true,
      vsFS: true,
      slides: [],
      areas: [],
      area: null,
      landingIns: "",
      logoIns: "",
      navIns: '#fff',
      marcaInsClass: "",
      marca: "",
      instagram: "",
      facebook: "",
      twitter: "",
      youtube: "",
      linkedin: "",
      fdt: true,
      fat: false,
      date_title: "",
      area_title: "",
      msg:""
    },
  //MUTATIONS
    //
    mutations: {
      //LOADING
        loadCom(state, flag){
          state.fullscreenLoading = flag
        },
      //USERS STYLE
        layoutUser(state, status){
          let location = localStorage.getItem('msal.location')
          let institution = localStorage.getItem('msal.institution')
          if(institution==1){
            state.marcaInsClass="uvm"
            //state.navIns = "#b32218"
            state.navIns = "#d82f36"
            state.logoIns = "uvm.png"
            state.landingIns = "uvm.jpg"
            state.marca = "Universidad Del Valle De México"
          }
          else if(institution==2){
            state.marcaInsClass="unitec"
            state.navIns = "#0f406b"
            state.logoIns = "unitec.png"
            state.landingIns = "unitec.jpg"
            state.marca = "Universidad Tecnológica De México"
          }
          else{
            state.marcaInsClass=""
            state.navIns = "#fff"
            state.logoIns = ""
            state.landingIns = ""
            state.marca = ""
          }
        },
      //NF STYLE
        layoutNotFound(state, status){
          state.hf = status
        },
      //AREAS
        areas(state, data){
          state.areas = data
        },
      //SET AREAS
        setArea(state, val){
          state.area = val
        },
      //SLIDES
        slides(state, data){
          if(data.estatus==0){
            state.msg = data.msg
            state.slides = []
            state.flag_slides = true
          }
          else if(data.estatus==1){
            state.slides = data.msg
          }
          else if(data.estatus==2){
            state.msg = data.msg
            state.slides = []
            state.flag_slides = true
          }
          state.date_title = new Date()
        },
      //UPDATE SLIDES
        updateCom(state, data){
          state.flag_slides = false
          state.flag_tc = data.ftc
          state.msg = ""
          state.slides = data.msg
          state.area_title = data.area
          state.date_title = new Date(data.date)
          state.fat = data.fat
          state.fdt = data.fdt
        },
      //FLAG POST
        flagPost(state, status){
          state.vsFS = status;
        },
      //MSG INFO
        openInfoMsg(state, msg){
          state.msg = msg
          state.flag_slides = true
        },
        closeInfoMsg(state, msg){
          state.msg = msg
          state.flag_slides = false
        }
    },
  //ACTIONS
    actions: {
      getAreas(context, payload){
        let url = process.env.VUE_APP_API_URL+"areas"
        //
        axios
        .get(url)
        .then((res) => {
          context.commit('areas', res.data)
        })
        .catch(error => {
          //console.log(error)
        })
      },
      getSlides(context, payload){
        context.commit('loadCom', true)
        let url = process.env.VUE_APP_API_URL+"comunicados"
        let form = {
          locacion: localStorage.getItem('msal.location'),
          institucion: localStorage.getItem('msal.institution')
        }
        let dataError = null;
        //
        axios
        .post(url, form)
        .then((res) => {
          context.commit('loadCom', false)
          if(res.data.estatus==0){
            dataError = {
              estatus: 0,
              msg: "Ha ocurrido un error al momento de consultar la información. Por favor intentelo de nuevo."
            }
            context.commit('slides', dataError)
          }
          else{
            context.commit('slides', res.data)
          }
        })
        .catch(error => {
          dataError = {
            estatus: 0,
            msg: "Ha ocurrido un error al momento de consultar la información. Por favor intentelo de nuevo."
          }
          context.commit('loadCom', false)
          context.commit('slides', dataError)
        })   
      },
      getSlidesByDate(context, payload){
        let url = process.env.VUE_APP_API_URL+"filtroComunicados"
        let msg = ""
        context.commit('closeInfoMsg', msg)
        //SI AMBOS CAMPOS SON VACIOS
        if(payload.area==null && payload.fecha==null){
          msg = "Por favor seleccione al menos un campo de filtrado."
            context.commit('openInfoMsg', msg)
        }
        //SI HAY ALMENOS UN CAMPO
        else{
          context.commit('loadCom', true);
          let url = process.env.VUE_APP_API_URL+"filtroComunicados"
          //
          axios
          .post(url, payload)
          .then((res) => {
            context.commit('loadCom', false)
            if(res.data.estatus==1){
              context.commit('updateCom', res.data);
            }
            else if(res.data.estatus==2){
              context.commit('openInfoMsg', res.data.msg);
            }
            else if(res.data.estatus==0){
              msg = "Por favor introduzca una fecha para iniciar la busqueda"
              context.commit('openInfoMsg', msg)
            }
          })
          .catch(error => {
            context.commit('loadCom', false)
            msg = "Ha ocurrido un error al momento de traer la información, por favor intentelo más tardes. "+error
            context.commit('openInfoMsg', msg)
          })
        }
      }
    }
})
