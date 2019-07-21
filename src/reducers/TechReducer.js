import {
  GET_TECHS,
  ADD_TECHS,
  DELETE_TECHS,
  TECHS_ERROR
} from "../actions/Types";

const initialState = {
  techs: null,
  current: null,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TECHS:
      return {
        ...state,
        techs: action.payload
      };
    case ADD_TECHS:
      return {
        ...state,
        techs: [...state.techs, action.payload]
      };
    case DELETE_TECHS:
      return {
        ...state,
        techs: state.techs.filter(t => t.id != action.payload)
      };
    default:
      return state;
  }
};
