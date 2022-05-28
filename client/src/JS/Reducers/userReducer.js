import { GET_CONTACTS } from "../actionTypes";

const initialState = {
    users :[],
    load:true,
}

const userReducer= (state = initialState, { type, payload }) => {
  switch (type) {

  case GET_CONTACTS:
    return { ...state, users:payload.users,load:false }

  default:
    return state
  }
}

export default  userReducer;
