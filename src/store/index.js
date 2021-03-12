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
    navIns: '#1f1f1f',
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
      let ins = dataUC.user[0].institution
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
        state.landingIns = "uju"
        state.navIns = "#1f1f1f"
      }
      //
      state.slides = dataUC.com
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

    },
    getComByDateAsic(context, payload){

    }
  }
})
