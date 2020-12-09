<template>
  <div id="box1">
    <img class="images" alt="Header" src="../assets/head.png" />
    <div id="box2">
      <div id="b_left" class="pads">
        <h2>Benefits for the Learner</h2>
        <ul>
          <li>
            Develop your web development skills
          </li>
          <li>
            Learn new web development technologies
          </li>
          <li>
            Create a professional web development portfolio
          </li>
          <li>
            Network with web development professionals
          </li>
          <li>
            Acquire professional experience without stress
          </li>
        </ul>
      </div>
      <div id="b_right" class="pads">
        <h2>Benefits for the Tutor</h2>
        <ul>
          <li>
            Be recognized as a socially responsible professional
          </li>
          <li>
            Connect with like-minded web development professionals
          </li>
          <li>
            Build a professional web development legacy
          </li>
          <li>
            Network with potential web development trainees
          </li>
          <li>
            Help shape the future of the web development industry
          </li>
        </ul>
      </div>
    </div>
    <img class="images" alt="Footer" src="../assets/foot.png" />
  </div>
</template>

<script>
export default {
  name: "BenefitsPage",
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
  list-style-type: "\1F341";
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
