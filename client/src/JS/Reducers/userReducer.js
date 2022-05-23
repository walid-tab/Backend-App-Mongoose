import { GET_CONTACTS } from "../actionTypes";

const initialState = {
    users :[],
}

const userReducer= (state = initialState, { type, payload }) => {
  switch (type) {

  case GET_CONTACTS:
    return { ...state, users:payload.users }

  default:
    return state
  }
}

export default  userReducer;
