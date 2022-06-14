import * as types from "./CategoryTypes";

const INITIAL_STATE = {
  name: "Tüm Kategoriler",
  type: 0,
};

const categoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SELECT_CATEGORY:
      return { ...action.payload };

    default:
      return state;
  }
};

export default categoryReducer;
