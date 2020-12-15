<template>
  <div id="foot_box">
    <div id="lefty">Copyright &copy; 2021 Jose G. Monagas</div>
    <div id="righty"></div>
  </div>
</template>

<script>
export default { name: "FooterPage" };
</script>

<style scoped>
#foot_box {
  background-color: #ffffcc;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
#lefty {
  background-color: gold;
  padding: 1vw 0;
  text-align: center;
  font-size: 14px;
  color: black;
  border-radius: 25px 25px 0 0;
  box-shadow: 0 4px 8px 0 gray, 0 6px 20px 0 gray;
}
#righty {
  border-bottom: solid 3px gold;
}
</style>
