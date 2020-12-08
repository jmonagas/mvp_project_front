<template>
  <div id="box1">
    <img class="images" alt="Header" src="../assets/head.png" />
    <div id="nav" class="navigation">
      <a href="#home" class="active">Home</a> |
      <a href="#benefits">Benefits</a> | <a href="#register">Register</a> |
      <a href="#contact">Contact</a>
    </div>
    <div id="box2">
      <div id="b_left" class="pads">
        <h2>Web Development Learner</h2>
        <h3>In Order To Qualify</h3>
        <ul class="fa-ul">
          <li>
            You must be a student enrolled in a web development program in
            Canada
          </li>
          <li>
            You must be of legal age and willing to be subjected to a background
            check
          </li>
          <li>
            You must submit a monthly report of your progress both at your
            college/university and the assignments given by your tutor
          </li>
          <li>
            <b>Disclaimer:</b> This is not a dating site. We cannot guarantee
            that a tutor will accept your candidacy. We do not hire participants
          </li>
        </ul>
      </div>
      <div id="b_right" class="pads">
        <h2>Web Development Tutor</h2>
        <h3>In Order To Qualify</h3>
        <ul class="fa-ul">
          <li>
            You must be currently a professional in web development in Canada
          </li>
          <li>
            You must be of legal age and willing to be subjected to a background
            check
          </li>
          <li>
            You must submit a monthly report of your student's progress and the
            assignments given by you
          </li>
          <li>
            <b>Disclaimer:</b> This is not a dating site. We cannot guarantee
            that a student will accept your candidacy. We do not hire
            participants
          </li>
        </ul>
      </div>
    </div>
    <img class="images" alt="Footer" src="../assets/foot.png" />
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
#box1 {
  font-family: Arial, sans-serif;
  text-align: justify;
  line-height: 3;
  font-size: 16px;
}
.images {
  width: 100%;
}
.navigation {
  text-align: center;
  padding: 0.5vw;
  background-color: rgb(254, 255, 212);
}
h1,
h2,
h3 {
  text-align: center;
}
ul {
  list-style-type: circle;
}
#box2 {
  display: grid;
  grid-template-columns: repeat(2, 50%);
}
.pads {
  padding: 1.5vw 3vw;
}
</style>
