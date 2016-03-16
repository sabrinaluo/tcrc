import {router} from '../main';

export default{
  user: {
    username: '',
    authenticated: false,
    type: null
  },
  login(context, credentials) {
    context.$http.post('/api/login', credentials)
      .then((response) => {
        var data = response.data.data;
        this.user = data.user;
        this.user.authenticated = true;
        localStorage.setItem('token', data.token);
        var redirect = '/' + this.user.type;
        router.go(redirect);
      })
      .catch((e) => {
        context.error = e.data.error;
      });
  },
  checkAuth() {
    var token = localStorage.getItem('token');
    this.user.authenticated = token !== null;
  },
  logout() {
    localStorage.removeItem('token');
    router.go('/login');
  }
};
