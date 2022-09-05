import produce from "../util/produce";

export const initailState = {
  products: [],
  lastPage: 1,
  //
  st_productListLoading: false, //  제품관련영상 가져오기
  st_productListDone: false,
  st_productListError: null,
  //
  st_productCreateLoading: false, //  제품관련영상 생성
  st_productCreateDone: false,
  st_productCreateError: null,
  //
  st_productUpdateLoading: false, //  제품관련영상 수정
  st_productUpdateDone: false,
  st_productUpdateError: null,
  //
  st_productDeleteLoading: false, //  제품관련영상 삭제
  st_productDeleteDone: false,
  st_productDeleteError: null,
  //
};

export const PRODUCT_LIST_REQUEST = "PRODUCT_LIST_REQUEST";
export const PRODUCT_LIST_SUCCESS = "PRODUCT_LIST_SUCCESS";
export const PRODUCT_LIST_FAILURE = "PRODUCT_LIST_FAILURE";

export const PRODUCT_CREATE_REQUEST = "PRODUCT_CREATE_REQUEST";
export const PRODUCT_CREATE_SUCCESS = "PRODUCT_CREATE_SUCCESS";
export const PRODUCT_CREATE_FAILURE = "PRODUCT_CREATE_FAILURE";

export const PRODUCT_UPDATE_REQUEST = "PRODUCT_UPDATE_REQUEST";
export const PRODUCT_UPDATE_SUCCESS = "PRODUCT_UPDATE_SUCCESS";
export const PRODUCT_UPDATE_FAILURE = "PRODUCT_UPDATE_FAILURE";

export const PRODUCT_DELETE_REQUEST = "PRODUCT_DELETE_REQUEST";
export const PRODUCT_DELETE_SUCCESS = "PRODUCT_DELETE_SUCCESS";
export const PRODUCT_DELETE_FAILURE = "PRODUCT_DELETE_FAILURE";

const reducer = (state = initailState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case PRODUCT_LIST_REQUEST:
        draft.st_productListLoading = true;
        draft.st_productListDone = false;
        draft.st_productListError = null;
        break;
      case PRODUCT_LIST_SUCCESS:
        draft.st_productListLoading = false;
        draft.st_productListDone = true;
        draft.st_productListError = null;
        draft.products = action.data.products;
        draft.lastPage = action.data.lastPage;
        break;
      case PRODUCT_LIST_FAILURE:
        draft.st_productListLoading = false;
        draft.st_productListDone = false;
        draft.st_productListError = null;
        break;
      ///////////////////////////////////////////////////////

      case PRODUCT_CREATE_REQUEST:
        draft.st_productCreateLoading = true;
        draft.st_productCreateDone = false;
        draft.st_productCreateError = null;
        break;
      case PRODUCT_CREATE_SUCCESS:
        draft.st_productCreateLoading = false;
        draft.st_productCreateDone = true;
        draft.st_productCreateError = null;
        break;
      case PRODUCT_CREATE_FAILURE:
        draft.st_productCreateLoading = false;
        draft.st_productCreateDone = false;
        draft.st_productCreateError = null;
        break;
      ///////////////////////////////////////////////////////

      case PRODUCT_UPDATE_REQUEST:
        draft.st_productUpdateLoading = true;
        draft.st_productUpdateDone = false;
        draft.st_productUpdateError = null;
        break;
      case PRODUCT_UPDATE_SUCCESS:
        draft.st_productUpdateLoading = false;
        draft.st_productUpdateDone = true;
        draft.st_productUpdateError = null;
        break;
      case PRODUCT_UPDATE_FAILURE:
        draft.st_productUpdateLoading = false;
        draft.st_productUpdateDone = false;
        draft.st_productUpdateError = null;
        break;
      ///////////////////////////////////////////////////////

      case PRODUCT_DELETE_REQUEST:
        draft.st_productDeleteLoading = true;
        draft.st_productDeleteDone = false;
        draft.st_productDeleteError = null;
        break;
      case PRODUCT_DELETE_SUCCESS:
        draft.st_productDeleteLoading = false;
        draft.st_productDeleteDone = true;
        draft.st_productDeleteError = null;
        break;
      case PRODUCT_DELETE_FAILURE:
        draft.st_productDeleteLoading = false;
        draft.st_productDeleteDone = false;
        draft.st_productDeleteError = null;
        break;

      default:
        break;
    }
  });

export default reducer;
