<template>
  <section class="bg-white">
    <SmallHero title="Contact Us" image="/bg1.jpg" />
    <b-container class="bg-white">
      <div class="py-5">
        <h2 class="text-center text-uppercase title">
          Give Us Some Details!
        </h2>
        <div v-if="success" class="alert alert-success text-center">
          Great! Your message has been sent successfully. I will try to respond
          quickly.
        </div>
        <div v-if="errored" class="rounded bg-red-200 text-lg p-4">
          Bummer, Something went wrong. Did you fill out all of the fields?
        </div>
        <b-form @submit.prevent="submit">
          <b-row>
            <b-col md="6">
              <b-form-group label-for="firstName">
                <b-form-input
                  id="firstName"
                  type="text"
                  placeholder="First Name"
                  v-model="firstName"
                  required
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col md="6">
              <b-form-group label-for="lastName">
                <b-form-input
                  id="lastName"
                  type="text"
                  placeholder="Last Name"
                  v-model="lastName"
                  required
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col md="6">
              <b-form-group label-for="email">
                <b-form-input
                  id="email"
                  type="email"
                  placeholder="Email"
                  v-model="email"
                  required
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col md="6">
              <b-form-group label-for="phone">
                <b-form-input
                  id="phone"
                  type="text"
                  placeholder="Phone Number"
                  v-model="phone"
                  required
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col md="6">
              <b-form-group label-for="companyName">
                <b-form-input
                  id="companyName"
                  type="text"
                  placeholder="Company Name"
                  v-model="company"
                  required
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col md="6">
              <b-form-group label-for="website">
                <b-form-input
                  id="website"
                  type="text"
                  placeholder="Website"
                  v-model="website"
                  required
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-form-group label-for="whatsup">
                <b-form-textarea
                  id="whatsup"
                  rows="10"
                  placeholder="What's Up?"
                  v-model="message"
                ></b-form-textarea>
              </b-form-group>
            </b-col>
          </b-row>
          <div class="text-center">
            <b-button type="submit" variant="success" size="lg">
              {{ loading ? "Sending Message..." : "Submit" }}</b-button
            >
          </div>
        </b-form>
      </div>
    </b-container>
    <b-container fluid>
      <b-row>
        <b-col class="p-md-5" id="contactdetail">
          <div cols="12" md="6" class="py-4 px-3 p-md-5 my-auto">
            <h3 class="text-uppercase font-weight-bold">
              <u> Diggimark Nepal </u>
            </h3>
            <p class="p-1 m-0 h4">Kaushaltar, Bhaktapur</p>
            <p class="p-1 m-0 h4">984#######</p>
            <p class="p-1 m-0 h4">info@diggimarknepal.com</p>
          </div>
        </b-col>
        <b-col cols="12" md="6" class="p-0 m-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.3827180545954!2d85.36293266552514!3d27.67456378280551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDQwJzM3LjkiTiA4NcKwMjInMDMuOCJF!5e0!3m2!1sen!2snp!4v1612270027519!5m2!1sen!2snp"
            width="100%"
            height="350"
            frameborder="0"
            style="border: 0"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </b-col>
      </b-row>
    </b-container>
    <LetsChat />
  </section>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      success: false,
      errored: false,
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      website: "",
      message: ""
    };
  },

  methods: {
    submit() {
      this.loading = true;
      var data = new FormData();
      data.append("first-name", this.firstName);
      data.append("last-name", this.lastName);
      data.append("email", this.email);
      data.append("message", this.message);
      data.append("company-name", this.company);
      data.append("website", this.website);
      data.append("phone-number", this.phone);

      this.$axios
        .post("/contact-form-7/v1/contact-forms/12/feedback", data)
        .then(response => {
          this.success = true;
          this.errored = false;
        })
        .catch(error => {
          this.errored = true;
        })
        .finally(() => {
          this.loading = false;
        });
    }
  },

  head() {
    return {
      title: "Contact Us - Diggimark Nepal"
    };
  }
};
</script>

<style lang="scss" scoped>
.title {
  margin: 0 0 50px;
  position: relative;
  &::before {
    content: "";
    width: 300px;
    height: 10px;
    color: red;
    position: absolute;
    bottom: 0;
    z-index: 10;
    display: block;
  }
}
#contactdetail {
  background: linear-gradient(0, #00000050, #00000050),
    url("/footer-background.jpg") no-repeat center;
  background-size: cover;
  color: #fff;
}
</style>
