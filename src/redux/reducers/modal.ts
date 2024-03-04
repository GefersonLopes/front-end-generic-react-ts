import { IAction } from "../../types/reducers";

const initialState = {
  open: false,
  type: "",
  data: {},
};

const modalReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case "SET_MODAL":
      return { ...state, ...action.payload };
    case "RESET_MODAL":
      return initialState;
    default:
      return state;
  }
};

export default modalReducer;
