import store from 'store2';
import API from './../utils/api';
export default class Store {
  constructor() {
    const TOKEN = store.get('TOKEN');
    this.api = new API();
    this.headers = [
      { header: 'Content-Type', value: 'application/json' },
      { header: 'Authorization', value: `BEARER ${TOKEN}` },
      { header: 'Access-Control-Allow-Origin', value: `*` },
      { header: 'Access-Control-Allow-Credentials', value: 'true' },
      { header: 'Access-Control-Allow-Headers', value: 'Authorization' },
      {
        header: 'Access-Control-Allow-Methods',
        value: 'GET, POST, PUT, DELETE',
      },
    ];
    this.headersLogin = [
      { header: 'Content-Type', value: 'application/json' },
    ];
  }
  Login(email, password, callback) {
    this.api.Request({
      method: 'POST',
      url: '/user/login',
      data: {
        email: email,
        password: password,
      },
      headers: this.headersLogin,
      callback: callback,
    });
  }
  SimpleRequest(type, url, data, callback) {
    this.api.Request({
      method: type,
      url: url,
      data: data,
      headers: this.headers,
      callback: callback,
    });
  }

  getProducts({ data = {}, callback }) {
    SimpleRequest('GET', '/products', data, callback);
  }
}
