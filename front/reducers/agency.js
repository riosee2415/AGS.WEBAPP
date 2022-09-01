import produce from "../util/produce";

export const initailState = {
  agencyList: [],
  agencyImage: null,

  st_agencyListLoading: false, // 대리점 안내 리스트
  st_agencyListDone: false,
  st_agencyListError: null,
  //
  st_agencyCreateLoading: false, // 대리점 생성 리스트
  st_agencyCreateDone: false,
  st_agencyCreateError: null,
  //
  st_agencyUpdateLoading: false, // 대리점 수정 리스트
  st_agencyUpdateDone: false,
  st_agencyUpdateError: null,
  //
  st_agencyDeleteLoading: false, // 대리점 삭제 리스트
  st_agencyDeleteDone: false,
  st_agencyDeleteError: null,
  //
  st_agencyImageUploadLoading: false, // 대리점 이미지 업로드
  st_agencyImageUploadDone: false,
  st_agencyImageUploadError: null,
};

export const AGENCY_LIST_REQUEST = "AGENCY_LIST_REQUEST";
export const AGENCY_LIST_SUCCESS = "AGENCY_LIST_SUCCESS";
export const AGENCY_LIST_FAILURE = "AGENCY_LIST_FAILURE";

export const AGENCY_CREATE_REQUEST = "AGENCY_CREATE_REQUEST";
export const AGENCY_CREATE_SUCCESS = "AGENCY_CREATE_SUCCESS";
export const AGENCY_CREATE_FAILURE = "AGENCY_CREATE_FAILURE";

export const AGENCY_UPDATE_REQUEST = "AGENCY_UPDATE_REQUEST";
export const AGENCY_UPDATE_SUCCESS = "AGENCY_UPDATE_SUCCESS";
export const AGENCY_UPDATE_FAILURE = "AGENCY_UPDATE_FAILURE";

export const AGENCY_DELETE_REQUEST = "AGENCY_DELETE_REQUEST";
export const AGENCY_DELETE_SUCCESS = "AGENCY_DELETE_SUCCESS";
export const AGENCY_DELETE_FAILURE = "AGENCY_DELETE_FAILURE";

export const AGENCY_IMAGE_UPLOAD_REQUEST = "AGENCY_IMAGE_UPLOAD_REQUEST";
export const AGENCY_IMAGE_UPLOAD_SUCCESS = "AGENCY_IMAGE_UPLOAD_SUCCESS";
export const AGENCY_IMAGE_UPLOAD_FAILURE = "AGENCY_IMAGE_UPLOAD_FAILURE";

export const AGENCY_IMAGE_RESET = "AGENCY_IMAGE_RESET";

const reducer = (state = initailState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      ///////////////////////////////////////////////////////

      case AGENCY_LIST_REQUEST: {
        draft.st_agencyListLoading = true;
        draft.st_agencyListDone = false;
        draft.st_agencyListError = null;
        break;
      }
      case AGENCY_LIST_SUCCESS: {
        draft.st_agencyListLoading = false;
        draft.st_agencyListDone = true;
        draft.st_agencyListError = null;
        draft.agencyList = action.data;
        break;
      }
      case AGENCY_LIST_FAILURE: {
        draft.st_agencyListLoading = false;
        draft.st_agencyListDone = false;
        draft.st_agencyListError = action.error;
        break;
      }

      ///////////////////////////////////////////////////////

      case AGENCY_CREATE_REQUEST: {
        draft.st_agencyCreateLoading = true;
        draft.st_agencyCreateDone = false;
        draft.st_agencyCreateError = null;
        break;
      }
      case AGENCY_CREATE_SUCCESS: {
        draft.st_agencyCreateLoading = false;
        draft.st_agencyCreateDone = true;
        draft.st_agencyCreateError = null;
        break;
      }
      case AGENCY_CREATE_FAILURE: {
        draft.st_agencyCreateLoading = false;
        draft.st_agencyCreateDone = false;
        draft.st_agencyCreateError = action.error;
        break;
      }

      ///////////////////////////////////////////////////////

      case AGENCY_UPDATE_REQUEST: {
        draft.st_agencyUpdateLoading = true;
        draft.st_agencyUpdateDone = false;
        draft.st_agencyUpdateError = null;
        break;
      }
      case AGENCY_UPDATE_SUCCESS: {
        draft.st_agencyUpdateLoading = false;
        draft.st_agencyUpdateDone = true;
        draft.st_agencyUpdateError = null;
        break;
      }
      case AGENCY_UPDATE_FAILURE: {
        draft.st_agencyUpdateLoading = false;
        draft.st_agencyUpdateDone = false;
        draft.st_agencyUpdateError = action.error;
        break;
      }

      ///////////////////////////////////////////////////////

      case AGENCY_DELETE_REQUEST: {
        draft.st_agencyDeleteLoading = true;
        draft.st_agencyDeleteDone = false;
        draft.st_agencyDeleteError = null;
        break;
      }
      case AGENCY_DELETE_SUCCESS: {
        draft.st_agencyDeleteLoading = false;
        draft.st_agencyDeleteDone = true;
        draft.st_agencyDeleteError = null;
        break;
      }
      case AGENCY_DELETE_FAILURE: {
        draft.st_agencyDeleteLoading = false;
        draft.st_agencyDeleteDone = false;
        draft.st_agencyDeleteError = action.error;
        break;
      }

      ///////////////////////////////////////////////////////

      case AGENCY_IMAGE_UPLOAD_REQUEST: {
        draft.st_agencyImageUploadLoading = true;
        draft.st_agencyImageUploadDone = false;
        draft.st_agencyImageUploadError = null;
        break;
      }
      case AGENCY_IMAGE_UPLOAD_SUCCESS: {
        draft.st_agencyImageUploadLoading = false;
        draft.st_agencyImageUploadDone = true;
        draft.st_agencyImageUploadError = null;
        draft.agencyImage = action.data.path;
        break;
      }
      case AGENCY_IMAGE_UPLOAD_FAILURE: {
        draft.st_agencyImageUploadLoading = false;
        draft.st_agencyImageUploadDone = false;
        draft.st_agencyImageUploadError = action.error;
        break;
      }

      ///////////////////////////////////////////////////////

      case AGENCY_IMAGE_RESET: {
        draft.agencyImage = action.data;
        break;
      }

      ///////////////////////////////////////////////////////

      default:
        break;
    }
  });

export default reducer;
