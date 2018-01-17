<template>
  <div id="app">
    <b-navbar toggleable type="dark" variant="primary">
      <b-navbar-brand href="#">{{ title }}</b-navbar-brand>
        <b-navbar-nav>
          <b-nav-item exact to="/">Home</b-nav-item>
          <b-nav-item to="/saldo">Saldo</b-nav-item>
          <b-nav-item to="/movimientos">Movimientos</b-nav-item>
        </b-navbar-nav>
    </b-navbar>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      title: "Clase 08"
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

h1, h2 {
  font-weight: normal;
}

a {
  color: #42b983;
}
</style>
