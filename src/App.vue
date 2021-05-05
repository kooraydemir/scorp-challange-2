<template>
  <div id="app">
      <scorpHeader id='nav'></scorpHeader>
    <router-view/>
    <scorpFooter class="position-absolute w-100" style="bottom:0"></scorpFooter>
  </div>
</template>
<script>
import scorpHeader from '@/components/Header.vue'
import scorpFooter from '@/components/Footer.vue'

export default {
  name: '',
  components: {
    scorpHeader,
    scorpFooter
  }
}
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  a {
    font-weight: bold;
    color: rgb(131, 131, 131);
    text-decoration: none;

    &.router-link-exact-active {
      color: #ff9900;
      text-decoration: none;
    }
       &.router-link-exact-hover {
      color: #ff9900;
      text-decoration: none;
    }

  }
}
</style>
