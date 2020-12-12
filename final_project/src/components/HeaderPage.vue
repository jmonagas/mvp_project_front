<template>
  <div id="head_box">
    <img class="images" alt="Web Development Match" src="../assets/head.png" />
    <div id="sub_box">
      <div class="light">Acquire or Master Web Development Skills</div>
      <div class="light">Pay No Fees for Registration or Tuition</div>
    </div>
  </div>
</template>

<script>
export default { name: "HeaderPage" };
</script>

<style scoped>
#head_box {
  text-align: center;
}
.images {
  width: 100%;
}
.images:hover {
  background-color: #ffcc00;
  border: 1px solid #6666ff;
}
#sub_box {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: black;
  font-size: 14px;
  color: white;
}
.light:hover {
  background-color: #ffcc00;
  color: black;
  font-weight: bold;
  border: 1px solid black;
}
</style>
