import getters 				  from "./getters.js";
import state 				    from "./state.js";


export default {
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
