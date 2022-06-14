import * as types from "./CategoryTypes";

export const selectCategory = (category) => ({
  type: types.SELECT_CATEGORY,
  payload: category,
});
