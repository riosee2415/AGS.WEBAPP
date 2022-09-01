import { all, call, delay, fork, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  AGENCY_LIST_REQUEST,
  AGENCY_LIST_SUCCESS,
  AGENCY_LIST_FAILURE,
  //
  AGENCY_CREATE_REQUEST,
  AGENCY_CREATE_SUCCESS,
  AGENCY_CREATE_FAILURE,
  //
  AGENCY_UPDATE_REQUEST,
  AGENCY_UPDATE_SUCCESS,
  AGENCY_UPDATE_FAILURE,
  //
  AGENCY_DELETE_REQUEST,
  AGENCY_DELETE_SUCCESS,
  AGENCY_DELETE_FAILURE,
  //
  AGENCY_IMAGE_UPLOAD_REQUEST,
  AGENCY_IMAGE_UPLOAD_SUCCESS,
  AGENCY_IMAGE_UPLOAD_FAILURE,
} from "../reducers/agency";

// ******************************************************************************************************************
// SAGA AREA ********************************************************************************************************
// ******************************************************************************************************************
async function agencyListAPI() {
  return await axios.get(`/api/agency/list`);
}

function* agencyList() {
  try {
    const result = yield call(agencyListAPI);

    yield put({
      type: AGENCY_LIST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: AGENCY_LIST_FAILURE,
      error: err.response.data,
    });
  }
}

// ******************************************************************************************************************
// ******************************************************************************************************************
// ******************************************************************************************************************

// ******************************************************************************************************************
// SAGA AREA ********************************************************************************************************
// ******************************************************************************************************************
async function agencyCreateAPI(data) {
  return await axios.post(`/api/agency/create`, data);
}

function* agencyCreate(action) {
  try {
    const result = yield call(agencyCreateAPI, action.data);

    yield put({
      type: AGENCY_CREATE_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: AGENCY_CREATE_FAILURE,
      error: err.response.data,
    });
  }
}

// ******************************************************************************************************************
// ******************************************************************************************************************
// ******************************************************************************************************************

// ******************************************************************************************************************
// SAGA AREA ********************************************************************************************************
// ******************************************************************************************************************
async function agencyUpdateAPI(data) {
  return await axios.patch(`/api/agency/update`, data);
}

function* agencyUpdate(action) {
  try {
    const result = yield call(agencyUpdateAPI, action.data);

    yield put({
      type: AGENCY_UPDATE_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: AGENCY_UPDATE_FAILURE,
      error: err.response.data,
    });
  }
}

// ******************************************************************************************************************
// ******************************************************************************************************************
// ******************************************************************************************************************

// ******************************************************************************************************************
// SAGA AREA ********************************************************************************************************
// ******************************************************************************************************************
async function agencyDeleteAPI(data) {
  return await axios.delete(`/api/agency/delete/${data.agencyId}`);
}

function* agencyDelete(action) {
  try {
    const result = yield call(agencyDeleteAPI, action.data);

    yield put({
      type: AGENCY_DELETE_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: AGENCY_DELETE_FAILURE,
      error: err.response.data,
    });
  }
}

// ******************************************************************************************************************
// ******************************************************************************************************************
// ******************************************************************************************************************

// ******************************************************************************************************************
// SAGA AREA ********************************************************************************************************
// ******************************************************************************************************************
async function agencyImageUploadAPI(data) {
  return await axios.post(`/api/agency/image`, data);
}

function* agencyImageUpload(action) {
  try {
    const result = yield call(agencyImageUploadAPI, action.data);

    yield put({
      type: AGENCY_IMAGE_UPLOAD_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: AGENCY_IMAGE_UPLOAD_FAILURE,
      error: err.response.data,
    });
  }
}
// ******************************************************************************************************************
// ******************************************************************************************************************
// ******************************************************************************************************************

//////////////////////////////////////////////////////////////
function* watchAgencyList() {
  yield takeLatest(AGENCY_LIST_REQUEST, agencyList);
}

function* watchAgencyCreate() {
  yield takeLatest(AGENCY_CREATE_REQUEST, agencyCreate);
}

function* watchAgencyUpdate() {
  yield takeLatest(AGENCY_UPDATE_REQUEST, agencyUpdate);
}

function* watchAgencyDelete() {
  yield takeLatest(AGENCY_DELETE_REQUEST, agencyDelete);
}

function* watchAgencyImageUpload() {
  yield takeLatest(AGENCY_IMAGE_UPLOAD_REQUEST, agencyImageUpload);
}

//////////////////////////////////////////////////////////////
export default function* agencySaga() {
  yield all([
    fork(watchAgencyList),
    fork(watchAgencyCreate),
    fork(watchAgencyUpdate),
    fork(watchAgencyDelete),
    fork(watchAgencyImageUpload),
    //
  ]);
}
