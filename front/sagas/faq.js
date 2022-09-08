import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  FAQ_ADMIN_LIST_REQUEST,
  FAQ_ADMIN_LIST_SUCCESS,
  FAQ_ADMIN_LIST_FAILURE,
  //
  FAQ_UPDATE_REQUEST,
  FAQ_UPDATE_SUCCESS,
  FAQ_UPDATE_FAILURE,
  //
  FAQ_CREATE_REQUEST,
  FAQ_CREATE_SUCCESS,
  FAQ_CREATE_FAILURE,
  //
  FAQ_DELETE_REQUEST,
  FAQ_DELETE_SUCCESS,
  FAQ_DELETE_FAILURE,
  //
  FAQ_LIST_REQUEST,
  FAQ_LIST_SUCCESS,
  FAQ_LIST_FAILURE,
} from "../reducers/faq";

// ******************************************************************************************************************
// SAGA AREA ********************************************************************************************************
// ******************************************************************************************************************
async function faqAdminListAPI(data) {
  return await axios.post(`/api/faq/admin/list`, data);
}

function* faqAdminList(action) {
  try {
    const result = yield call(faqAdminListAPI, action.data);

    yield put({
      type: FAQ_ADMIN_LIST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: FAQ_ADMIN_LIST_FAILURE,
      data: err.response.data,
    });
  }
}

// ******************************************************************************************************************
// ******************************************************************************************************************
// ******************************************************************************************************************

// ******************************************************************************************************************
// SAGA AREA ********************************************************************************************************
// ******************************************************************************************************************
async function faqUpdateAPI(data) {
  return await axios.patch(`/api/faq/update`, data);
}

function* faqUpdate(action) {
  try {
    const result = yield call(faqUpdateAPI, action.data);

    yield put({
      type: FAQ_UPDATE_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: FAQ_UPDATE_FAILURE,
      data: err.response.data,
    });
  }
}

// ******************************************************************************************************************
// ******************************************************************************************************************
// ******************************************************************************************************************

// ******************************************************************************************************************
// SAGA AREA ********************************************************************************************************
// ******************************************************************************************************************
async function faqCreateAPI(data) {
  return await axios.post(`/api/faq/create`, data);
}

function* faqCreate(action) {
  try {
    const result = yield call(faqCreateAPI, action.data);

    yield put({
      type: FAQ_CREATE_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: FAQ_CREATE_FAILURE,
      data: err.response.data,
    });
  }
}

// ******************************************************************************************************************
// ******************************************************************************************************************
// ******************************************************************************************************************

// ******************************************************************************************************************
// SAGA AREA ********************************************************************************************************
// ******************************************************************************************************************
async function faqDeleteAPI(data) {
  return await axios.patch(`/api/faq/delete`, data);
}

function* faqDelete(action) {
  try {
    const result = yield call(faqDeleteAPI, action.data);

    yield put({
      type: FAQ_DELETE_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: FAQ_DELETE_FAILURE,
      data: err.response.data,
    });
  }
}

// ******************************************************************************************************************
// ******************************************************************************************************************
// ******************************************************************************************************************

// ******************************************************************************************************************
// SAGA AREA ********************************************************************************************************
// ******************************************************************************************************************
async function faqListAPI(data) {
  return await axios.post(`/api/faq/list`, data);
}

function* faqList(action) {
  try {
    const result = yield call(faqListAPI, action.data);

    yield put({
      type: FAQ_LIST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: FAQ_LIST_FAILURE,
      data: err.response.data,
    });
  }
}

// ******************************************************************************************************************
// ******************************************************************************************************************
// ******************************************************************************************************************

//////////////////////////////////////////////////////////////

function* watchFaqAdminList() {
  yield takeLatest(FAQ_ADMIN_LIST_REQUEST, faqAdminList);
}

function* watchFaqUpdate() {
  yield takeLatest(FAQ_UPDATE_REQUEST, faqUpdate);
}

function* watchFaqCreate() {
  yield takeLatest(FAQ_CREATE_REQUEST, faqCreate);
}

function* watchFaqDelete() {
  yield takeLatest(FAQ_DELETE_REQUEST, faqDelete);
}

function* watchFaqList() {
  yield takeLatest(FAQ_LIST_REQUEST, faqList);
}

//////////////////////////////////////////////////////////////
export default function* faqSaga() {
  yield all([
    fork(watchFaqAdminList),
    fork(watchFaqUpdate),
    fork(watchFaqCreate),
    fork(watchFaqDelete),
    fork(watchFaqList),
    //
  ]);
}
