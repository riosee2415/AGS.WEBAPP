import produce from "../util/produce";

export const initailState = {
  hiddenAcceMenu: false,
  hiddenProdMenu: false,
};

export const HIDDEN_ACC_MENU = "HIDDEN_ACC_MENU";

export const HIDDEN_PRO_MENU = "HIDDEN_PRO_MENU";

const reducer = (state = initailState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      //////////////////////////////////////////////

      case HIDDEN_ACC_MENU:
        draft.hiddenAcceMenu = action.data;
        break;

      //////////////////////////////////////////////

      case HIDDEN_PRO_MENU:
        draft.hiddenProdMenu = action.data;
        break;

      //////////////////////////////////////////////

      default:
        break;
    }
  });

export default reducer;
