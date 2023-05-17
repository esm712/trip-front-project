<template>
    <div class="home">
      <!-- <the-header-navbar/> -->
        <user-login/>
    </div>
  </template>
  
  <script>
import UserLogin from "../components/user/UserLogin.vue";

  // @ is an alias to /src
  export default {
    name: 'MainView',
    components: {
        UserLogin

      // TheHeaderNavbar
    },
    data() {

      return {
          

      };
    },
  
  }
  </script>
  