import state from "./state.js";

export default {
  TOGGLE_IS_ADDING_MARKERS(state){
    state.isAddingMarkers = !state.isAddingMarkers;
  },
  TOGGLE_IS_SHOWING_NOTIFICATION(state){
    state.isShowingNotification = !state.isShowingNotification;
  },
  SET_NOTIFICATION_MESSAGE(state, message){
    state.notificationMessageText = message;
  }
};
