<template>
    <section class="bg-white">
        <SmallHero title="Contact Us" image="bg1.jpg" />
        <b-container class="bg-white">
            <div class="py-5">
                <h2 class="text-center text-uppercase title">
                    Give Us Some Details!
                </h2>
                <b-form @submit="onSubmit">
                    <b-row>
                        <b-col md="6">
                            <b-form-group label-for="fname">
                                <b-form-input
                                    id="fname"
                                    type="text"
                                    placeholder="First Name"
                                    required
                                ></b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col md="6">
                            <b-form-group label-for="lname">
                                <b-form-input
                                    id="lname"
                                    type="text"
                                    placeholder="Last Name"
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
                                    required
                                ></b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col md="6">
                            <b-form-group label-for="phone">
                                <b-form-input
                                    id="phone"
                                    type="number"
                                    placeholder="Phone Number"
                                    required
                                ></b-form-input>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col md="6">
                            <b-form-group label-for="cname">
                                <b-form-input
                                    id="caname"
                                    type="text"
                                    placeholder="Company Name"
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
                                ></b-form-textarea>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <div class="text-center">
                        <b-button type="submit" variant="info" size="lg"
                            >Send A Message</b-button
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
    methods: {
        onSubmit() {},
    },
    head() {
        return {
            title: "Contact Us | Diggimark Nepal",
        };
    },
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