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
        localStorage.setItem('tcrc_type', data.user.type);
        var redirect = '/' + this.user.type;
        router.go(redirect);
      })
      .catch((e) => {
        context.error = e.data.error;
      });
  },
  checkAuth() {
    var token = localStorage.getItem('token');
    var type = localStorage.getItem('tcrc_type');
    this.user.authenticated = token !== null;
    this.user.type = type;
    console.log(this.user.authenticated);
  },
  logout() {
    localStorage.removeItem('token');
    router.go('/login');
  }
};
