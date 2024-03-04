import { IAction } from "../../types/reducers";

const initialState = {};

const studentsReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case "SET_STUDENTS":
      return { ...state, ...action.payload };
    case "RESET_STUDENTS":
      return initialState;
    default:
      return state;
  }
};

export default studentsReducer;
