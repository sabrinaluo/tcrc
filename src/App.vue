<template>
  <main class="container">
    <router-view
      keep-alive
    ></router-view>
  </main>
</template>

<script>
  import LoginView from './components/LoginView';
  import Auth from './services/auth';

  export default {
    data() {
      return {
        user: Auth.user
      };
    },
    components: {
      LoginView
    },
    methods: {
    }
  };
</script>
