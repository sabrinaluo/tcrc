<template>
  <button class="btn btn-sm btn-default"
          @click="logout()"
  >Logout
  </button>
</template>

<script>
  import Auth from './../services/auth';
  export default{
    methods: {
      logout() {
        Auth.user.authenticated = false;
        Auth.logout();
      }
    }
  };
</script>
