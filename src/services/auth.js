import {router} from '../main';
import ERROR from '../config/error.json';
import DB from '../db.json';

export default{
  user: {
    username: '',
    authenticated: false,
    type: null
  },
  login(context, credentials) {
    var users = DB.users;
    var creds = DB.creds;
    if (creds[credentials.username] === credentials.password) {
      this.user = users[credentials.username];
      this.user.authenticated = true;
      var redirect = '/' + this.user.type;
      router.go(redirect);
    } else {
      context.error = ERROR.auth;
    }
  }
};
