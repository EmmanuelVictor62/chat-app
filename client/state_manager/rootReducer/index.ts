import { combineReducers } from "redux";

import chatReducer from "@/slices/chats";

const rootReducer = combineReducers({
  chats: chatReducer,
});

export default rootReducer;
