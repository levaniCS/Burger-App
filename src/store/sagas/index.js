import { takeEvery, all } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import {
  logoutSaga,
  checkAuthTimeoutSaga,
  authUserSaga,
  authCheckStateSaga
} from './auth';
import { initIngredientsSaga } from './burgerBuilder';
import { fetchOrdersSaga, purchaseBurgerSaga } from './order';

// takeEvery => will allow us to listen to certain actions
// and do something when they occur
// translated : " take every action,  and execute function of second parameter"

// all => used if we want to run multiple generators or tasks simultaneously
export function* watchAuth() {
  yield all([
    takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga),
    takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga),
    takeEvery(actionTypes.AUTH_USER, authUserSaga),
    takeEvery(actionTypes.AUTH_CHECK_INITIAL_STATE, authCheckStateSaga)
  ]);
}

export function* watchBurgerBuilder() {
  yield takeEvery(actionTypes.START_INIT_INGREDIENTS, initIngredientsSaga);
}

export function* watchOrders() {
  yield takeEvery(actionTypes.PURCHASE_BURGER_INIT_START, purchaseBurgerSaga);
  yield takeEvery(actionTypes.FETCH_ORDERS_INIT, fetchOrdersSaga);
}
