<template>
  <div id="box1">
    <img class="images" alt="Header" src="../assets/head.png" />
    <div id="box2">
      <div id="b_left" class="pads">
        <h2>Web Development Learner</h2>
        <h3>In Order To Qualify</h3>
        <ul>
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
        <ul>
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
  name: "HomePage",
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
