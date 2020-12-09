<template>
  <div>
    <div class="navigation">
      <router-link to="/">Home</router-link> |
      <router-link to="/Benefits">Benefits</router-link> |
      <router-link to="/Register">Register</router-link> |
      <router-link to="/Contact">Contact</router-link>
    </div>
    <router-view />
  </div>
</template>

<style scoped>
.navigation {
  text-align: right;
  padding: 2vw;
  background-color: #ffffcc;
  color: black;
}
</style>
