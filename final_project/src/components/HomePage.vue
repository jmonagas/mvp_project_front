<template>
  <div id="box1">
    <header-page />
    <div id="box2">
      <div id="b_left" class="pads">
        <div class="frame">
          <h3>Web Development Learner</h3>
        </div>
        <h4>In Order To Qualify</h4>
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
        <div class="frame">
          <h3>Web Development Tutor</h3>
        </div>
        <h4>In Order To Qualify</h4>
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
    <footer-page />
  </div>
</template>

<script>
import HeaderPage from "@/components/HeaderPage.vue";
import FooterPage from "@/components/FooterPage.vue";

export default {
  name: "HomePage",
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
  background-color: #ffffcc;
}
h1,
h2,
h3,
h4 {
  text-align: center;
  padding: 1vw 0;
}
ul {
  list-style-type: "\2751";
  margin-right: 2vh;
  margin-left: 1.5vh;
}
li {
  padding: 1vw;
}
#box2 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  column-gap: 1vw;
  row-gap: 1vw;
  background-color: #ffffcc;
}
.frame {
  background-color: #3333ff;
  border-radius: 25px 25px 0px 0px;
  color: white;
}
.frame:hover {
  border: 1px solid black;
}
.pads {
  padding: 1vw;
  background-color: white;
}
</style>
