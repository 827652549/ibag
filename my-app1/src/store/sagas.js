import { put, takeEvery } from 'redux-saga/effects'

// worker Saga : 将在 ACTION_TYPE_NAME action 被 dispatch 时调用
function* fetchUser(action) {
  yield put({type: 'ACTION_TYPE_NAME'})
}

/*
  在每个 `ACTION_TYPE_NAME` action 被 dispatch 时调用 fetchUser
  允许并发（译注：即同时处理多个相同的 action）
*/
function* mySaga() {
  yield takeEvery('ACTION_TYPE_NAME', fetchUser);
}

/*
  也可以使用 takeLatest

  不允许并发，dispatch 一个 `ACTION_TYPE_NAME` action 时，
  如果在这之前已经有一个 `ACTION_TYPE_NAME` action 在处理中，
  那么处理中的 action 会被取消，只会执行当前的
*/
// function* mySaga() {
//   yield takeLatest("ACTION_TYPE_NAME", fetchUser);
// }

export default mySaga;
