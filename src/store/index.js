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
    vsInfoMsg: "",
    vsInfo: false,
    fullscreenLoading: false
  },
  mutations: {
    //USER COMMUNIQUE
    checkUC(state, dataUC){
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
      //state.slides = dataUC.com
      state.todate = new Date()
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
    //INFO MSG
    openInfoMsg(state, msg){
      state.vsInfoMsg = msg
      state.vsInfo = true
    },
    //INFO MSG
    closeInfoMsg(state, msg){
      state.vsInfoMsg = msg
      state.vsInfo = false
    }
  },
  actions: {
    getUCAsinc(context, payload){
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
      //llamado api
      setTimeout(context.commit('checkUC', {ins: institution, loc:location_type}), 2000)

      //console.log(location_type)
      //console.log(institution)
    },
    getComByDateAsic(context, payload){

    }
  }
})
