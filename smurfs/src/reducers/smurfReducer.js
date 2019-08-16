import {
  FETCH_SMURFS_START,
  FETCH_SMURFS_SUCCEESS,
  FETCH_SMURFS_FAIL,
  ADD_SMURF_START,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAIL,
  DELETE_SMURF
} from "../actions";

const initialState = {
  smurfs: [],
  isLoading: false,
  error: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURFS_SUCCEESS:
      return {
        ...state,
        smurfs: action.payload,
        error: "",
        isLoading: false
      };
    case ADD_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        error: "",
        isLoading: false
      };
    case DELETE_SMURF:
      return {
        ...state,
        smurfs: action.payload,
        error: "",
        isLoading: false
      };
    default:
      return state;
  }
};
