<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#">
        <router-link :to="{ name: 'home' }">
          <b-img
            :src="require('@/assets/adventure-time-gunter.gif')"
            id="logo"
            class="d-inline-block align-top"
            alt="logo"
          ></b-img>
        </router-link>
        
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">
            <router-link :to="{ name: 'home' }" class="link">
              <b-icon icon="house-door" animation="fade" font-scale="2"></b-icon>
              홈
            </router-link>
            <!-- <router-link :to="{ name: 'insta' }" class="m-2 link">
              <b-icon icon="instagram" animation="fade" font-scale="2"></b-icon>
              인별그램
            </router-link> -->
            <router-link :to="{ name: 'board' }" class="m-2 link">
              <b-icon icon="journal" animation="fade" font-scale="2"></b-icon>
              게시판
            </router-link>

      

          </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <router-link :to="{ name: 'login' }" class="link">
                <b-icon icon="key"></b-icon> 마이페이지
              </router-link>
              <router-link :to="{ name: 'login' }" class="link" @click="logout">
                <b-icon icon="key"></b-icon> 로그아웃
              </router-link>
        </b-navbar-nav>
      </b-collapse>
      <b-img
            :src="require('@/assets/adventure-time-gunter.gif')"
            id="logo"
            class="d-inline-block align-top"
            alt="logo"
          ></b-img>
    </b-navbar>

  </div>
</template>

<script>
export default {
  name: "TheHeaderNavbar",
  data() {
    return {};
  },
  methods: {
    logout() {
      // this.$router.push({ name: "boardwrite" });
      console.log("oejgowrigjwojo");
      alert("hihihi")
    },

  },
};


</script>

<style scoped>
#logo {
  width: 120px;
}

.link {
  text-decoration: none;
}
</style>
