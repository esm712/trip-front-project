<template>
    <div class="tourlist" >
        관광지 정보 list
        <div>

            <tour-list-item v-for="(d,i) in tourlistData" :key="i" :tourlistItem ='d'/>
        </div>
    </div>
  </template>
  
  <script>
import TourListItem from "./TourListItem.vue";



  export default {
    data(){
      return {
          
        
    };
  },
    name: 'TourList',
    components: {
        TourListItem
      
    },
      props: {
        tourlistData:Array
    }
  }
  </script>
  
  <style>
    .kakaomap{
        background-color: darkcyan;
        margin-top: 10px;
        margin-bottom: 10px;
    }
</style>