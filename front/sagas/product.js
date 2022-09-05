import { all, call, delay, fork, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAILURE,
  //
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_CREATE_FAILURE,
  //
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_UPDATE_FAILURE,
  //
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_FAILURE,
  //
  PRODUCT_FRONT_LIST_REQUEST,
  PRODUCT_FRONT_LIST_SUCCESS,
  PRODUCT_FRONT_LIST_FAILURE,
} from "../reducers/product";

// SAGA AREA ********************************************************************************************************
// ******************************************************************************************************************
async function productListAPI(data) {
  return await axios.post(`/api/product/list`, data);
}

function* productList(action) {
  try {
    const result = yield call(productListAPI, action.data);

    yield put({
      type: PRODUCT_LIST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: PRODUCT_LIST_FAILURE,
      error: err.response.data,
    });
  }
}

// ******************************************************************************************************************
// ******************************************************************************************************************
// ******************************************************************************************************************

// SAGA AREA ********************************************************************************************************
// ******************************************************************************************************************
async function productFrontListAPI(data) {
  return await axios.post(`/api/product/mainList`, data);
}

function* productFrontList(action) {
  try {
    const result = yield call(productFrontListAPI, action.data);

    yield put({
      type: PRODUCT_FRONT_LIST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: PRODUCT_FRONT_LIST_FAILURE,
      error: err.response.data,
    });
  }
}

// ******************************************************************************************************************
// ******************************************************************************************************************
// ******************************************************************************************************************

// SAGA AREA ********************************************************************************************************
// ******************************************************************************************************************
async function productCreateAPI(data) {
  return await axios.post(`/api/product/create`, data);
}

function* productCreate(action) {
  try {
    const result = yield call(productCreateAPI, action.data);

    yield put({
      type: PRODUCT_CREATE_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: PRODUCT_CREATE_FAILURE,
      error: err.response.data,
    });
  }
}

// ******************************************************************************************************************
// ******************************************************************************************************************
// ******************************************************************************************************************

// SAGA AREA ********************************************************************************************************
// ******************************************************************************************************************
async function productUpdateAPI(data) {
  return await axios.patch(`/api/product/update`, data);
}

function* productUpdate(action) {
  try {
    const result = yield call(productUpdateAPI, action.data);

    yield put({
      type: PRODUCT_UPDATE_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: PRODUCT_UPDATE_FAILURE,
      error: err.response.data,
    });
  }
}

// ******************************************************************************************************************
// ******************************************************************************************************************
// ******************************************************************************************************************

// SAGA AREA ********************************************************************************************************
// ******************************************************************************************************************
async function productDeleteAPI(data) {
  return await axios.delete(`/api/product/delete/${data}`);
}

function* productDelete(action) {
  try {
    const result = yield call(productDeleteAPI, action.data);

    yield put({
      type: PRODUCT_DELETE_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: PRODUCT_DELETE_FAILURE,
      error: err.response.data,
    });
  }
}

// ******************************************************************************************************************
// ******************************************************************************************************************
// ******************************************************************************************************************

//////////////////////////////////////////////////////////////
function* watchProductList() {
  yield takeLatest(PRODUCT_LIST_REQUEST, productList);
}
function* watchProductFrontList() {
  yield takeLatest(PRODUCT_FRONT_LIST_REQUEST, productFrontList);
}
function* watchProductCreate() {
  yield takeLatest(PRODUCT_CREATE_REQUEST, productCreate);
}
function* watchProductUpdate() {
  yield takeLatest(PRODUCT_UPDATE_REQUEST, productUpdate);
}
function* watchProductDelete() {
  yield takeLatest(PRODUCT_DELETE_REQUEST, productDelete);
}

//////////////////////////////////////////////////////////////
export default function* productSaga() {
  yield all([
    fork(watchProductList),
    fork(watchProductFrontList),

    fork(watchProductCreate),
    fork(watchProductUpdate),
    fork(watchProductDelete),

    //
  ]);
}
