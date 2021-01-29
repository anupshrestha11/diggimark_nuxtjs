<template>
    <footer class="bg-dark text-white text-center text-uppercase pt-5">
        <b-container class="pt-lg-5">
            <b-row>
                <b-col cols="12" md="6" lg="3" class="p-3">
                    <h5>CONTACT</h5>
                    <p class="text-white-50 mb-0">Kaushaltar, Bhaktapur</p>
                    <p>(+977) 98########</p>
                </b-col>
                <b-col cols="12" md="6" lg="3" class="p-3">
                    <h5>BROwSE</h5>
                    <div class="py-1">
                        <b-button
                            variant="link"
                            class="m-0 p-0 text-muted"
                            to="#"
                            >Work</b-button
                        >
                    </div>
                    <div class="py-1">
                        <b-button
                            variant="link"
                            class="m-0 p-0 text-muted"
                            to="#"
                            >Blog</b-button
                        >
                    </div>
                    <div class="py-1">
                        <b-button
                            variant="link"
                            class="m-0 p-0 text-muted"
                            to="#"
                            >Contact</b-button
                        >
                    </div>
                    <div class="py-1">
                        <b-button
                            variant="link"
                            class="m-0 p-0 text-muted"
                            to="#"
                            >Careers</b-button
                        >
                    </div>
                </b-col>
                <b-col cols="12" md="6" lg="3" class="p-3">
                    <h5>SERVICES</h5>
                    <div class="py-1">
                        <b-button
                            variant="link"
                            class="m-0 p-0 text-muted"
                            to="#"
                            >EXCLUSIV SEO</b-button
                        >
                    </div>
                    <div class="py-1">
                        <b-button
                            variant="link"
                            class="m-0 p-0 text-muted"
                            to="#"
                            >WEB DESGIN + DEVELOPMENT</b-button
                        >
                    </div>
                    <div class="py-1">
                        <b-button
                            variant="link"
                            class="m-0 p-0 text-muted"
                            to="#"
                            >PAID MARKETING</b-button
                        >
                    </div>
                    <div class="py-1">
                        <b-button
                            variant="link"
                            class="m-0 p-0 text-muted"
                            to="#"
                            >DF</b-button
                        >
                    </div>
                </b-col>
                <b-col cols="12" md="6" lg="3" class="p-3">
                    <h5>SOCIAL MEDIA</h5>
                    <div class="py-2 social-media">
                        <a href="" class="m-1 btn">
                            <b-icon-facebook></b-icon-facebook>
                        </a>
                        <a href="" class="m-1 btn">
                            <b-icon-instagram></b-icon-instagram>
                        </a>
                        <a href="" class="m-1 btn">
                            <b-icon-twitter></b-icon-twitter>
                        </a>
                        <a href="" class="m-1 btn">
                            <b-icon-linkedin></b-icon-linkedin>
                        </a>
                    </div>
                </b-col>
                <b-col cols="12" class="">
                    <div class="bottom-footer">
                        <div class="py-2">
                            &copy; 2021
                            <span class="text-uppercase"
                                >Diggimark Nepal LLC.</span
                            >
                            All Rights Reserved
                        </div>
                        <div class="py-2">
                            <Logo />
                        </div>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </footer>
</template>

<script>
export default {};
</script>

<style lang="scss">
footer {
    width: 100vw;

    background: linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
        url("/footer-background.jpg") no-repeat bottom;
    background-position: cover;

    .bottom-footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;
        & > div:nth-of-type(1) {
            order: 3;
            font-size: 0.9rem;
            margin-bottom: 20px;
        }
    }

    .social-media {
        a {
            clip-path: circle();
            color: #dad5d5;
            transition: all 0.3s ease-in;
            &:hover {
                background: red;
                color: #fff;
            }
        }
    }

    @media all and (min-width: 600px) {
        height: 610px;
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: -2;
    }

    @media all and (min-width: 1000px) {
        height: 410px;
        .bottom-footer {
            flex-direction: row;
            & > div:nth-of-type(1) {
                order: unset;
                margin-bottom: 0;
            }
        }
    }
}
</style>