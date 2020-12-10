<template>
  <div id="box1">
    <header-page />
    <div id="box2">
      <div id="b_left" class="pads">
        <div class="frame">
          <h3>Benefits for the Learner</h3>
        </div>
        <h4>What Are The Key Advantages</h4>
        <ul>
          <li>
            Develop your
            <a
              href="https://www.thinkful.com/blog/web-development-career-path/"
              target="_blank"
              >web development skills</a
            >
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
        <div class="frame">
          <h3>Benefits for the Tutor</h3>
        </div>
        <h4>Why You Should Participate</h4>
        <ul>
          <li>
            Be recognized as a socially responsible professional
          </li>
          <li>
            Connect with like-minded web development professionals
          </li>
          <li>
            Build a professional
            <a
              href="https://leadershipfreak.blog/2014/03/04/10-ways-to-build-powerful-legacy-now/"
              target="_blank"
              >web development legacy</a
            >
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
    <footer-page />
  </div>
</template>

<script>
import HeaderPage from "@/components/HeaderPage.vue";
import FooterPage from "@/components/FooterPage.vue";

export default {
  name: "BenefitsPage",
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
  background-color: #0077e6;
  border-radius: 25px 25px 0px 0px;
  color: white;
}
.pads {
  padding: 1vw;
  background-color: white;
}
</style>
