<template>
    <div class="">
        <TheSideNavbar/>
        <!-- <div> -->
          <MainScreen></MainScreen>
          <router-view/>
        <!-- </div> -->
      
    </div>
  </template>
  
  <script>

  // @ is an alias to /src
  import TheSideNavbar from "../components/TheSideNavbar.vue"
  import MainScreen from "@/components/MainScreen.vue";
  export default {
 
    name: 'MainView',
    components: {
        TheSideNavbar,
        MainScreen
  
    },
    data() {

      return {
          

      };
    },
  
  }
  </script>
  