import axios from 'axios';

const baseURL = 'http://127.0.0.1:8000/';
const userData = {
  token: '',
}

function makeCall(method, url, body) {
  return axios({
    method,
    url:baseURL + url,
    headers: {
      'Authorization': 'Bearer ' + userData.token
    },
    data: body
  })
}


export function login(userId, password) {
  return makeCall('post', 'user/login/', {
    id:userId,
    pw:password,
  }).then((result) => {
    userData.token = result.data.token;
    return Promise.resolve(result.data);
  }).catch((err) => {
    return Promise.reject(err);
  })
};

export function writeComment(comment, postId) {
  return makeCall('post', 'blog/comment/', {
    comment,
    post: postId
  }).then(() => {
    return Promise.resolve(); 
  }).catch((err) => {
    return Promise.reject();
  })
};