<template>
  <div id="box1">
    <header-page />
    <div id="box2">
      <div id="b_left" class="pads">
        <div class="frame">
          <h3>Register as a Learner</h3>
        </div>
        <h4>Please Fill Out All Fields</h4>
        <ul>
          <li>
            <input class="registry" placeholder="First Name" type="text" />
          </li>
          <li>
            <input class="registry" placeholder="Middle Name" type="text" />
          </li>
          <li>
            <input class="registry" placeholder="Last Name" type="text" />
          </li>
          <li>
            <input
              class="registry"
              placeholder="University/College"
              type="text"
            />
          </li>
          <li>
            <input
              class="registry"
              placeholder="Program/Specialty"
              type="text"
            />
          </li>
          <li>
            <input
              class="registry"
              placeholder="Short Bio (max 250 chars)"
              type="text"
            />
          </li>
          <li>
            <input class="registry" placeholder="Email Address" type="text" />
          </li>
          <li>
            <input class="registry" placeholder="Phone Number" type="text" />
          </li>
        </ul>
      </div>
      <div id="b_right" class="pads">
        <div class="frame">
          <h3>Register as a Tutor</h3>
        </div>
        <h4>Please Fill Out All Fields</h4>
        <ul>
          <li>
            <input class="registry" placeholder="First Name" type="text" />
          </li>
          <li>
            <input class="registry" placeholder="Middle Name" type="text" />
          </li>
          <li>
            <input class="registry" placeholder="Last Name" type="text" />
          </li>
          <li>
            <input
              class="registry"
              placeholder="University/College"
              type="text"
            />
          </li>
          <li>
            <input
              class="registry"
              placeholder="Program/Specialty"
              type="text"
            />
          </li>
          <li>
            <input
              class="registry"
              placeholder="Short Bio (max 250 chars)"
              type="text"
            />
          </li>
          <li>
            <input class="registry" placeholder="Email Address" type="text" />
          </li>
          <li>
            <input class="registry" placeholder="Phone Number" type="text" />
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
  name: "RegisterPage",
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
  list-style-type: none;
  margin-right: 2vh;
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
.registry {
  padding: 1vh;
  width: 90%;
  background-color: #f8f8f8;
}
</style>
