import { createApp } from "vue";
import $ from "jquery";
import parsley from "parsleyjs";
import ContactUs from "./components/ContactUs.vue";

const app = createApp();

app.component("contact-us", ContactUs);

app.mount("#app");
