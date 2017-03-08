import getters 				  from "./getters.js";
import state 				    from "./state.js";


import firebase 			  from "firebase";
import instance 			  from "../config/firebaseConfig.js";

// needed to make vuexfire work
import { bind }				  from "../main.js";

export default {
  bindFirebase({}, payload){
		bind(payload.name, payload.ref);
	},
  toggleIsAddingMarkers({ commit }){
    commit("TOGGLE_IS_ADDING_MARKERS");
  },
  toggleIsShowingNotfication({ commit }, message){
    commit("TOGGLE_IS_SHOWING_NOTIFICATION");
    commit("SET_NOTIFICATION_MESSAGE", message);
    setTimeout(() => {
      commit("TOGGLE_IS_SHOWING_NOTIFICATION");
    }, 1500);
    setTimeout(() => {
      commit("SET_NOTIFICATION_MESSAGE", "");
    }, 2000)
  }
};
