import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    company: "",
    location: "",
    todate: "",
    slides: "",
    flag_slides: false,
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
    fullscreenLoading: false,
    vsInfo: false,
    vsInfoMsg: '',
    msg:"",
    dialog_msg: false
  },
  mutations: {
    //USER COMMUNIQUE
    checkUC(state, dataUC){
      //
      if(dataUC.estatus==0){
        state.msg = dataUC.msg
        state.dialog_msg = true
        state.slides = []
        state.marcaInsClass = ""
        state.navIns = "#fff"
        state.logoIns = ""
        state.landingIns = ""
        state.marca = ""
      }
      else{
        let ins = dataUC.ins
        state.company = ins
        state.location = dataUC.loc
        //
        if(ins==1){
          state.marcaInsClass="uvm"
          state.navIns = "#b32218"
          state.logoIns = "uvm.png"
          state.landingIns = "uvm.jpg"
          state.marca = "Universidad Del Valle De México"
        }
        else if(ins==2){
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
        //
        if(dataUC.estatus==1){
          state.flag_slides = false
          state.slides = dataUC.msg
        }
        else if(dataUC.estatus==2){
          state.flag_slides = true
          state.msg = dataUC.msg
          state.slides = []
        }
        state.todate = new Date()
      }
    },
    //UPDATE COMMUNIQUE
    updateCom(state, dataNC){
      let dateSeacrh = new Date(dataNC.msg[0].updated_at)
      state.todate = dateSeacrh
      state.slides = dataNC.msg
    },
    //LOAD COMMUNIQUE
    loadCom(state, flag){
      state.fullscreenLoading = flag
    },
    OpenMessageError(state, flag){

    },
    closeMessageError(state, flag){
      state.dialog_msg = flag
    }
  },
  actions: {
    getUCAsinc(context, payload){
      context.commit('loadCom', true)
      let url = "http://localhost/api-comunicacion/comunicados"
      let domain = localStorage.getItem('msalgD')
      let location = localStorage.getItem('msalgL')
      let location_type = 0
      let institution = 0
      let form = []
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
      //API
      form = {
        locacion: location_type,
        institucion: institution
      }
      //
      axios
      .post(url, form)
      .then((res) => {
        context.commit('loadCom', false)
        context.commit('checkUC', res.data);
      })
      .catch(error => {
        let dataError = {
          estatus: 0,
          msg: "Ha ocurrido un error al momento de consultar la información. Por favor intentelo de nuevo."
        }
        context.commit('loadCom', false)
        context.commit('checkUC', dataError);
      })
    },
    getComByDateAsic(context, payload){

    }
  }
})
