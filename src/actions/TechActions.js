import {GET_TECHS, ADD_TECHS, DELETE_TECHS, TECHS_ERROR} from "./Types";

export const addTech = tech => async dispatch => {
  try {
    const res = await fetch("techs", {
      method: "POST",
      body: JSON.stringify(tech),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await res.json();

    dispatch({
      type: ADD_TECHS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: error.response.data
    });
  }
};

export const deleteTech = id => async dispatch => {
  try {
    await fetch(`techs/${id}`, {
      method: "DELETE"
    });

    dispatch({
      type: DELETE_TECHS,
      payload: id
    });
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: error.response.data
    });
  }
};

export const getTech = () => async dispatch => {
  try {
    const res = await fetch("techs");
    const data = await res.json();

    dispatch({
      type: GET_TECHS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: error.response.data
    });
  }
};
