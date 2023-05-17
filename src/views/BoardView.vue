<template>
    <div class="home">
      <the-side-navbar></the-side-navbar>
      <b-container class="bv-example-row mt-3">
    <b-row>
      <b-col>
        <b-alert show><h3>글보기</h3></b-alert>
      </b-col>
    </b-row>
    <b-row class="mb-1">
      <b-col class="text-left">
        <b-button variant="outline-primary" @click="moveList">목록</b-button>
      </b-col>
      <b-col class="text-right" v-if="userInfo.userid === article.userid">
        <b-button variant="outline-info" size="sm" @click="moveModifyArticle" class="mr-2">글수정</b-button>
        <b-button variant="outline-danger" size="sm" @click="deleteArticle">글삭제</b-button>
      </b-col>
    </b-row>
    <b-row class="mb-1">
      <b-col>
        <b-card
          :header-html="`<h3>${article.articleno}.
          ${article.subject} [${article.hit}]</h3><div><h6>${article.userid}</div><div>${article.regtime}</h6></div>`"
          class="mb-2"
          border-variant="dark"
          no-body
        >
          <b-card-body class="text-left">
            <div v-html="message"></div>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </b-container>

      <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
      <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    </div>
  </template>
  
  <script>
// import TheHeaderNavbar from "../components/TheHeaderNavbar.vue"
  // @ is an alias to /src
//   import HelloWorld from '@/components/HelloWorld.vue'
  import TheSideNavbar from "@/components/TheSideNavbar.vue";
  
  export default {
  components: { TheSideNavbar },
    name: 'BoardView',

  }
  
  </script>
  