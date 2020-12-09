<template>
  <div id="box1">
    <img class="images" alt="Header" src="../assets/head.png" />
    <div id="nav" class="navigation">
      <a href="/components/Home.vue">Home</a> |
      <a href="/components/Benefits.vue">Benefits</a> |
      <a href="/components/Register.vue">Register</a> |
      <a href="/components/Contact.vue">Contact</a>
    </div>
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
  name: "Benefits",
};
</script>

<style scoped>
#box1 {
  font-family: Arial, sans-serif;
  text-align: justify;
  line-height: 3;
  font-size: 16px;
  background-color: #f5f5f0;
}
.images {
  width: 100%;
}
.navigation {
  text-align: center;
  padding: 0.5vw;
}
h1,
h2,
h3 {
  text-align: center;
  color: orangered;
}
a {
  color: orangered;
  padding: 0 1vw;
}
ul {
  list-style-type: "\1F44D";
}
li {
  padding: 0 1vw;
}
#box2 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  column-gap: 8vh;
}
.pads {
  padding: 2vw 3vw;
  background-color: white;
  border: solid 1px rgb(250, 250, 246);
  border-radius: 20px;
}
</style>
