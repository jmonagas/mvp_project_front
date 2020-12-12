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
            <input
              class="registry"
              placeholder="First Name"
              type="text"
              v-model="learner_first_name"
            />
          </li>
          <li>
            <input
              class="registry"
              placeholder="Middle Name"
              type="text"
              v-model="learner_middle_name"
            />
          </li>
          <li>
            <input
              class="registry"
              placeholder="Last Name"
              type="text"
              v-model="learner_last_name"
            />
          </li>
          <li>
            <input
              class="registry"
              placeholder="University/College"
              type="text"
              v-model="learner_university"
            />
          </li>
          <li>
            <input
              class="registry"
              placeholder="Program/Specialty"
              type="text"
              v-model="learner_program"
            />
          </li>
          <li>
            <input
              class="registry"
              placeholder="Short Bio (max 250 chars)"
              type="text"
              v-model="learner_bio"
            />
          </li>
          <li>
            <input
              class="registry"
              placeholder="Email Address"
              type="text"
              v-model="learner_email"
            />
          </li>
          <li>
            <input
              class="registry"
              placeholder="Phone Number"
              type="text"
              v-model="learner_phone"
            />
          </li>
          <li>
            <button class="btn" @click="RegisterLearner">
              Submit Form
            </button>
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
            <input
              class="registry"
              placeholder="First Name"
              type="text"
              v-model="tutor_first_name"
            />
          </li>
          <li>
            <input
              class="registry"
              placeholder="Middle Name"
              type="text"
              v-model="tutor_middle_name"
            />
          </li>
          <li>
            <input
              class="registry"
              placeholder="Last Name"
              type="text"
              v-model="tutor_last_name"
            />
          </li>
          <li>
            <input
              class="registry"
              placeholder="University/College"
              type="text"
              v-model="tutor_university"
            />
          </li>
          <li>
            <input
              class="registry"
              placeholder="Program/Specialty"
              type="text"
              v-model="tutor_program"
            />
          </li>
          <li>
            <input
              class="registry"
              placeholder="Short Bio (max 250 chars)"
              type="text"
              v-model="tutor_bio"
            />
          </li>
          <li>
            <input
              class="registry"
              placeholder="Email Address"
              type="text"
              v-model="tutor_email"
            />
          </li>
          <li>
            <input
              class="registry"
              placeholder="Phone Number"
              type="text"
              v-model="tutor_phone"
            />
          </li>
          <li>
            <button class="btn" @click="RegisterTutor">Submit Form</button>
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
import axios from "axios";

export default {
  name: "RegisterPage",
  components: {
    HeaderPage,
    FooterPage,
  },
  data() {
    return {
      learner_first_name: "",
      learner_middle_name: "",
      learner_last_name: "",
      learner_university: "",
      learner_program: "",
      learner_bio: "",
      learner_email: "",
      learner_phone: "",

      tutor_first_name: "",
      tutor_middle_name: "",
      tutor_last_name: "",
      tutor_university: "",
      tutor_program: "",
      tutor_bio: "",
      tutor_email: "",
      tutor_phone: "",
    };
  },
  methods: {
    RegisterLearner: function() {
      axios
        .request({
          method: "POST",
          url: "http://127.0.0.1:5000/api/learners",
          headers: {
            "Content-Type": "application/json",
          },
          data: {
            learner_first_name: this.learner_first_name,
            learner_middle_name: this.learner_middle_name,
            learner_last_name: this.learner_last_name,
            learner_university: this.learner_university,
            learner_program: this.learner_program,
            learner_bio: this.learner_bio,
            learner_email: this.learner_email,
            learner_phone: this.learner_phone,
          },
        })
        .then((response) => {
          alert("You Have Registered Yourself As A Learner");
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
          alert("Your Learner Registration Failed");
        });
    },
    RegisterTutor: function() {
      axios
        .request({
          method: "POST",
          url: "http://127.0.0.1:5000/api/tutors",
          headers: {
            "Content-Type": "application/json",
          },
          data: {
            tutor_first_name: this.tutor_first_name,
            tutor_middle_name: this.tutor_middle_name,
            tutor_last_name: this.tutor_last_name,
            tutor_university: this.tutor_university,
            tutor_program: this.tutor_program,
            tutor_bio: this.tutor_bio,
            tutor_email: this.tutor_email,
            tutor_phone: this.tutor_phone,
          },
        })
        .then((response) => {
          alert("You Have Registered Yourself As A Tutor");
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
          alert("Your Tutor Registration Failed");
        });
    },
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
.registry {
  padding: 1vh;
  width: 90%;
  background-color: #f8f8f8;
}
.btn {
  padding: 1vh;
  text-align: center;
}
</style>
