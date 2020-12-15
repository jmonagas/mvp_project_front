<template>
  <div>
    <div class="navigation">
      <router-link to="/">Home</router-link> |
      <router-link to="/Benefits">Benefits</router-link> |
      <router-link to="/Register">Register</router-link> |
      <router-link to="/Contact">Contact</router-link> |
      <router-link to="/Resources">Resources</router-link>
    </div>
    <router-view />
  </div>
</template>

<style scoped>
.navigation {
  text-align: center;
  font-size: 14px;
  padding: 20px 0;
  background-color: #ffffcc;
  color: black;
}
a:hover {
  background-color: #ffcc00;
  color: white;
  padding: 0.5vw;
  text-decoration: none;
}
</style>
