import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_LOG
} from "./Types";

// export const getLogs = () => {
//   return async dispatch => {
//     setLoading();

//     const res = await fetch("logs");
//     const data = await res.json();

//     dispatch({
//       type: GET_LOGS,
//       payload: data
//     });
//   };
// };

// function a() {
//   return function b() { try and catch };
// }

//  Below Lines are Similar To Above Explaination
//  Where Try and Catch is inside Function B
//   Function B is return from Function A

// Get Logs from Server
export const getLogs = () => async dispatch => {
  try {
    setLoading();

    const res = await fetch("logs");
    const data = await res.json();

    dispatch({
      type: GET_LOGS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data
    });
  }
};

export const addLog = log => async dispatch => {
  try {
    setLoading();
    const res = await fetch("logs", {
      method: "POST",
      body: JSON.stringify(log),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await res.json();

    dispatch({
      type: ADD_LOG,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data
    });
  }
};

// Set Current Log
export const setCurrent = log => {
  return {
    type: SET_CURRENT,
    payload: log
  };
};

// Clear Current Log
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT
  };
};

// Delete Log
export const deleteLog = id => async dispatch => {
  try {
    setLoading();
    await fetch(`logs/${id}`, {
      method: "DELETE"
    });

    dispatch({
      type: DELETE_LOG,
      payload: id
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data
    });
  }
};

// Update Log
export const updateLog = log => async dispatch => {
  try {
    setLoading();
    const res = await fetch(`logs/${log.id}`, {
      method: "PUT",
      body: JSON.stringify(log),
      headers: {
        "Content-Type": "application/json"
      }
    });

    const data = await res.json();

    dispatch({
      type: UPDATE_LOG,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data
    });
  }
};

// Set Loading To True
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
