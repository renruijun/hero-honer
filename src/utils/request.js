import fetch from 'dva/fetch';

function request(url, options) {
  return fetch(url, options).then(response => {
    const res = response.json();
    return res;
  });
}

export default request;
