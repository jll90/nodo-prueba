<template>
  <div id="app">
    <div class="fixed-bg">
    <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>

  body {
    margin: 0;
    padding: 0;
  }

  h1 {
    text-align: center;
  }

  .fixed-bg {
    position: fixed;
    box-sizing: border-box;
    color: white;
    padding: 10px;
    z-index: 1;
    width: 100%;
    height: 100vh;
    background: url('https://www.hbo.com/content/dam/hbodata/series/game-of-thrones/episodes/1/game-of-thrones-1-1920x1080.jpg/_jcr_content/renditions/cq5dam.web.1200.675.jpeg');
    background-repeat: no-repeat;
    background-size: cover;
    overflow-y: scroll;
  }

</style>
