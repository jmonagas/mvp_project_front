<template>
  <div id="box1">
    <header-page />
    <footer-page />
  </div>
</template>

<script>
import HeaderPage from "@/components/HeaderPage.vue";
import FooterPage from "@/components/FooterPage.vue";

export default {
  name: "RegisterPage",
  components: {
    HeaderPage,
    FooterPage,
  },
};
</script>

<style scoped>
#box1 {
  font-family: Arial, sans-serif;
  text-align: justify;
  line-height: 2;
  font-size: 16px;
  background-color: rgb(255, 255, 230);
}
.images {
  width: 100%;
}
h1,
h2,
h3 {
  text-align: center;
  color: orangered;
}
ul {
  list-style-type: "\1F44D";
}
li {
  padding: 1vw;
}
#box2 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  column-gap: 1vw;
  row-gap: 1vw;
}
.pads {
  padding: 1vw;
  background-color: white;
}
</style>
