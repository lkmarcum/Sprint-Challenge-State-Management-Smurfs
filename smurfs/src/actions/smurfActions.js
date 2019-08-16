import axios from "axios";

export const FETCH_SMURFS_START = "FETCH_SMURFS_START";
export const FETCH_SMURFS_SUCCEESS = "FETCH_SMURFS_SUCCEESS";
export const FETCH_SMURFS_FAIL = "FETCH_SMURFS_FAIL";

export const ADD_SMURF_START = "ADD_SMURF_START";
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";
export const ADD_SMURF_FAIL = "ADD_SMURF_FAIL";

export const DELETE_SMURF = "DELETE_SMURF";

export const getSmurfs = () => {
  return dispatch => {
    dispatch({ type: FETCH_SMURFS_START });
    axios
      .get(`http://localhost:3333/smurfs`)
      .then(res => {
        dispatch({ type: FETCH_SMURFS_SUCCEESS, payload: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const addSmurf = smurf => {
  return dispatch => {
    dispatch({ type: ADD_SMURF_START });
    axios
      .post(`http://localhost:3333/smurfs`, smurf)
      .then(res => {
        dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const deleteSmurf = id => {
  return dispatch => {
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => {
        dispatch({ type: DELETE_SMURF, payload: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };
};
