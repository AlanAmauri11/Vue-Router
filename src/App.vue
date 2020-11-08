<template>
  <div id="app">
    <h1>holoo</h1>
    <nav>
      <ul>
        <li>
          <router-link to="/">* Inicio</router-link>
        </li>
        <li>
          <router-link to="/test">* Test</router-link>
        </li>
        <li>
          <router-link to="/user">* Users</router-link>
        </li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>


<script>
import Test from "./components/Tetst.vue";
import User from "./components/User.vue";

export default {
    name: "App",
    components: {
        Test,
        User,
    },
};
</script>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
