<template>

  <div>this is tutor view</div>

</template>

<script>
  import Auth from '../services/auth';
  export default{
    route: {
      canActivate() {
        return Auth.user.authenticated;
      }
    }
  };
</script>
