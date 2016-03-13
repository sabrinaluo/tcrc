<template>
  <div class="row">
    <div class="col-lg-4 col-md-6 col-sm-12 col-lg-offset-4 col-md-offset-3">
      <div class="panel panel-default">
        <div class="panel-heading">Login</div>
        <div class="panel-body">
          <h4>Welcome to TCRC!</h4>
          <form id="login">
            <div class="form-group">
              <label for="username">Username</label>
              <input type="text" class="form-control" id="username"
                     placeholder="Username"
                     v-model="credentials.username">
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" class="form-control" id="password"
                     placeholder="Password"
                     v-model="credentials.password">
            </div>
            <button class="btn btn-primary"
                    @click="submit()">Submit
            </button>
          </form>
        </div>
      </div>
      <div v-if="error" class="alert alert-danger" role="alert">
        {{error}}
      </div>
    </div>
  </div>
</template>

<script>
  import Auth from '../services/auth';
  import ERROR from '../config/error.json';
  export default{
    data() {
      return {
        credentials: {
          username: '',
          password: ''
        },
        error: ''
      };
    },
    methods: {
      submit() {
        var username = this.credentials.username;
        var password = this.credentials.password;
        var isValid = username !== '' && password !== '';
        if (isValid) {
          var credentials = {
            username: username,
            password: password
          };
          Auth.login(this, credentials);
        } else {
          this.error = ERROR.validation;
        }
      }
    }
  };
</script>
