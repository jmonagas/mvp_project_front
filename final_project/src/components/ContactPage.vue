<template>
  <div id="box1">
    <header-page />
    <div id="box2">
      <div id="b_left" class="pads">
        <div class="frame">
          <h3>About Me</h3>
        </div>
        <h4>Why I Am Doing This</h4>
        <ul>
          <li>
            My name is Jose G. Monagas. Currently, I am a student
          </li>
          <li>
            This is the final project to get my web developer diploma
          </li>
          <li>
            Also, this is my way to thank all those who helped me
          </li>
          <li>
            During my training, I saw there’s a need for this venture
          </li>
          <li>
            In order to advance, one should be generous to others
          </li>
        </ul>
      </div>
      <div id="b_right" class="pads">
        <div class="frame">
          <h3>Contact Me</h3>
        </div>
        <h4>Let's Start A Conversation</h4>
        <ul>
          <li>
            To get in touch with the author of this website
          </li>
          <li>Please send a brief email at <b>jmonagas@hotmail.ca</b></li>
          <li>
            I live in Calgary, Alberta, Canada since June 2009
          </li>
          <li>
            Please note this is unconditionally a volunteer work
          </li>
          <li>
            As such, I do not get paid for this kind of activism
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
  name: "ContactPage",
  components: {
    HeaderPage,
    FooterPage,
  },
};
</script>

<style scoped>
#box1 {
  font-family: "Spartan", Arial, sans-serif;
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
  box-shadow: 0 4px 8px 0 gray, 0 6px 20px 0 gray;
}
.frame:hover {
  border: 1px solid black;
}
.pads {
  padding: 1vw;
  background-color: white;
}
</style>
