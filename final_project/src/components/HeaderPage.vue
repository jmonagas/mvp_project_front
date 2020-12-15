<template>
  <div id="head_box">
    <img class="images" alt="Web Development Match" src="../assets/head.png" />
    <div id="sub_box">
      <div id="one" class="light1">
        Acquire or Master Web Development Skills
      </div>
      <div id="two" class="light2">Pay No Fees for Registration or Tuition</div>
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
  box-shadow: 0 4px 8px 0 gray, 0 6px 20px 0 gray;
}
.images:hover {
  border: 1px solid rgb(6, 186, 247);
}
#sub_box {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  font-size: 14px;
}
#one {
  background-color: black;
  color: white;
  box-shadow: 0 4px 8px 0 gray, 0 6px 20px 0 gray;
}
#one:hover {
  background-color: gold;
  color: black;
  font-weight: bolder;
}
#two {
  background-color: gold;
  color: black;
  box-shadow: 0 4px 8px 0 gray, 0 6px 20px 0 gray;
}
#two:hover {
  background-color: black;
  color: white;
  font-weight: bolder;
}
</style>
