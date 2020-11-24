import { action, observable } from 'mobx';
import { autobind } from 'core-decorators';
import AuthApi from '../../assets/api/AuthApi';

@autobind
class AuthStore {
  @observable isLogin = false;

  @action
  tryLogin = async (email, pw) => {
    try {
      const response = await AuthApi.Login(email, pw);

      if (response.status === 200) {
        this.isLogin = true;
        localStorage.setItem('accessToken', response.access_token);
      }

      return new Promise((resolve, reject) => {
        resolve(response);
      });
    } catch (error) {
      this.login = false;
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
  };

  @action
  tryLogOut = () => {
    this.isLogin = false;
    console.log(this.isLogin);
  };
}

export default AuthStore;
