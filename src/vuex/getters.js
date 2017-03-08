import state from "./state.js";

export default {
	locations: (state) => state.locations,
  isAddingMarkers: (state) => state.isAddingMarkers,
  isShowingNotification: (state) => state.isShowingNotification,
  notificationMessageText: (state) => state.notificationMessageText
}
