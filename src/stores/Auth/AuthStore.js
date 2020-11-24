import { action, observable } from 'mobx';
import { autobind } from 'core-decorators';
import AuthApi from '../../assets/api/AuthApi';
import SERVER from '../../config/server';
import axios from 'axios';

@autobind
class AuthStore {
  @observable isLogin = false;
  @observable userIdx;
  @observable userName;

  @action
  tryLogin = async (email, pw) => {
    try {
      const response = await AuthApi.Login(email, pw);

      axios.defaults.headers.common['Authorization'] = `Bearer ${response.accessToken}`;

      if (response.status === 200) {
        this.isLogin = true;
        localStorage.setItem('accessToken', response.accessToken);
      }

      return new Promise((resolve, reject) => {
        resolve(response);
      });
    } catch (error) {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
  };

  @action
  handleIsLogin = login => {
    this.isLogin = login;
  };

  @action
  tryLogOut = () => {
    this.isLogin = false;
    console.log(this.isLogin);
  };

  @action
  getInfo = async () => {
    const config = { headers: { Authorization: '' } };

    if (localStorage.getItem('accessToken')) {
      config.headers.Authorization = 'Bearer ' + localStorage.getItem('accessToken');
    }

    await axios.get(`${SERVER}/auth/getMyInfo`, config).then(res => {
      if (res.data.data.user.isAdmin === true) {
        this.userIdx = res.data.data.user.idx;
        this.userName = res.data.data.user.name;
        this.isLogin = true;
      } else {
        this.isLogin = false;
        this.userIdx = null;
        this.userName = null;
        throw new Error('');
      }
    });
  };
}

export default AuthStore;
