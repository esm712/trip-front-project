<template>
  <div class="home">
    <!-- <the-header-navbar/> -->
   <search-bar :locationInfo ='si'/>
    <kakao-map/>
    <tour-list :tourlistData='tourlistData'/>
  </div>
</template>

<script>
import KakaoMap from "../components/tour/KakaoMap.vue"
import SearchBar from "../components/tour/SearchBar.vue"
import TourList from "@/components/tour/TourList.vue";
// @ is an alias to /src
export default {
  name: 'HomeView',
  components: {
    SearchBar,
    KakaoMap,
    TourList,
    // TheHeaderNavbar
  },
  data() {
    //여기서 searchBar si do gun 정보 관리. 
    //list 정보도 여기서 관리 
    return {
        
          si: [ //searchbar data. 어떤 형식이였는지 다시 정해야됨
            {si:"hi"},{si:"hello"},{si:"hey"}
              
      ],
      tourlistData: [
        { name: "hi1", des: "des1" },
        { name: "hi2", des: "des2" },
        { name: "hi3", des: "des3" },
        {name:"hi4",des:"des4"},
          ]
    };
  },

}
</script>
