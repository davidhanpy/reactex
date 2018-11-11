import * as api from '../api';
import * as types from '../types';

export function tryToLogin(userId, pw) {
  return (dispatch) => {
    return api.login(userId, pw).then((userData) => {
      dispatch(successToLogin(userData));
      return Promise.resolve();
    }).catch(() => {
      return Promise.reject('로그인에 실패하였습니다.');
    })
  }
}
export function successToLogin(userData) {
  return {
    type: types.SUCCESS_TO_LOGIN,
    userData,
  }
}