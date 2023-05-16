<template>
    <div class="searchbar" >
        <b-dropdown id="dropdown-1" text="시 고르기" class="m-md-2">
            <b-dropdown-item v-for="(d,i) in locationInfo" :key="i">{{ d.si }}</b-dropdown-item>
        </b-dropdown>

        <b-dropdown id="dropdown-1" text="군 구 고르기" class="m-md-2">
            <b-dropdown-item v-for="(d,i) in locationInfo" :key="i">{{ d.si }}</b-dropdown-item>
        </b-dropdown>

        <b-dropdown id="dropdown-1" text="관광지 유형 고르기" class="m-md-2">
            <b-dropdown-item v-for="(d,i) in locationInfo" :key="i">{{ d.si }}</b-dropdown-item>
        </b-dropdown>
        <b-button>검색</b-button>
      
    </div>
  </template>
  
  <script>



  export default {

    name: 'SearchBar',
      props: {
        locationInfo:Array
    }
  }
  </script>
  
  <style>
    .searchbar{
        background-color: blue;
        margin-top: 10px;
        margin-bottom: 10px;
    }
</style>