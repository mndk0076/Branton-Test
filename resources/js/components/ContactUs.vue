<template lang="">
  <div class="contact_us">
    <div class="scroll">
      <div class="m-scroll">
        <span>Let’s start something great together.</span>
        <span>Let’s start something great together.</span>
        <span>Let’s start something great together.</span>
        <span>Let’s start something great together.</span>
      </div>
    </div>
    <div class="bottom">
      <div class="message">
        <div class="wrap">
          <h2>Explorers</h2>
          <h2>Creators</h2>
          <h2>Disruptors</h2>
        </div>
      </div>
      <div class="form">
        <div class="wrapper">
          <h1>Contact US</h1>
          <Form @submit="onSubmit">
            <div class="row">
              <div class="item">
                <Field
                  name="fname"
                  type="text"
                  placeholder="First Name*"
                  :rules="(value) => isRequired(value, 'First Name')"
                />
                <ErrorMessage name="fname" />
              </div>
              <div class="item">
                <Field
                  name="lname"
                  type="text"
                  placeholder="Last Name*"
                  :rules="(value) => isRequired(value, 'Last Name')"
                />
                <ErrorMessage name="lname" />
              </div>
            </div>
            <Field
              name="email"
              type="email"
              placeholder="Email*"
              :rules="validateEmail"
            />
            <ErrorMessage name="email" />

            <Field
              type="tel"
              name="phone"
              placeholder="Phone Number*"
              :rules="(value) => isRequired(value, 'Phone Number')"
            />
            <ErrorMessage name="phone" />
            <Field
              name="message"
              as="textarea"
              row="5"
              placeholder="Message*"
              :rules="(value) => isRequired(value, 'Message')"
            ></Field>
            <ErrorMessage name="message" />

            <label for="policy">
              <input type="checkbox" id="policy" name="policy" value="Yes" />
              By checking this box, you agree to our
              <a href="/privacy-policy">privacy policy</a> and consent to
              receive periodic updates and promotional material via our
              newsletter.
            </label>
            <div class="submit_wrapper">
              <button class="submit">SUBMIT</button>
            </div>
          </Form>
          <div
            :class="['thank_you_msg', { active: showThankYouMessage }]"
            v-if="submitted"
          >
            <div class="wrapper">
              <h1>
                Thank you <span>{{ fname }}</span> for contacting us, we will be
                in touch soon!
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Form, Field, ErrorMessage } from "vee-validate";

export default {
  data() {
    return {
      fname: "",
      submitted: false,
      showThankYouMessage: false,
    };
  },
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  methods: {
    isRequired(value, placeholder) {
      if (!value) {
        return `${placeholder} is required`;
      }
      return true;
    },
    onSubmit(values) {
      this.fname = values.fname;
      this.submitted = true;
      console.log(JSON.stringify(values, null, 2));

      this.showThankYouMessage = true;
      setTimeout(() => {
        this.showThankYouMessage = false;
      }, 6000);
    },
    validateEmail(value) {
      // if the field is empty
      if (!value) {
        return "Email is required";
      }
      // if the field is not a valid email
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!regex.test(value)) {
        return "This field must be a valid email";
      }
      // All is good
      return true;
    },
  },
};
</script>
<style lang=""></style>
