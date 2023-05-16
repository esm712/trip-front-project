<template>
    <div class="tourlistitem" >

        {{ tourlistItem.name }} 
        {{ tourlistItem.des }}
    </div>
  </template>
  
  <script>



  export default {
    data(){
      return {
          
        
    };
  },
    name: 'TourListItem',
    components: {
      
    },
    props: {
        tourlistItem:Object
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