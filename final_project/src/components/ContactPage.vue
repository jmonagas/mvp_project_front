<template>
  <div id="box1">
    <header-page />
    <div id="box2">
      <div id="b_left" class="pads">
        <div class="frame">
          <h2>About Me</h2>
        </div>
        <h3>Why I Am Doing This</h3>
        <ul>
          <li>
            My name is Jose G. Monagas
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
          <h2>Contact Me</h2>
        </div>
        <h3>Let's Start A Conversation</h3>
        <ul>
          <li>
            To get in touch with Jose G. Monagas
          </li>
          <li>
            Please send a brief email at: jmonagas@hotmail.ca
          </li>
          <li>
            I live in Calgary, Alberta, Canada
          </li>
          <li>
            This is unconditionally a volunteer work
          </li>
          <li>
            As I do not get paid for this activism
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
