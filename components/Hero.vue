<template>
    <div>
        <client-only>
            <video-background
                src="/bg2.mp4"
                poster=""
                style="max-height: 100vh; height: 100vh"
                overlay="linear-gradient(155deg, #3499FFDA 0%, #3E71CCC2 25%, #3E5EB4B4 50%, #3D4B9CAA 75%, #3A3985A1 100%)"
            >
                <b-container fluid class="text-white content">
                    <div class="heading text-center">
                        <h1 class="text-uppercase display-4">{{ title }}</h1>
                        <p class="py-2">
                            {{ description }}
                        </p>
                    </div>
                    <div class="text-center my-5">
                        <nuxt-link to="#" class="">
                            <b-button pill class="bg-white text-dark">
                                Our Latest Work
                            </b-button>
                        </nuxt-link>
                        <nuxt-link to="#" class="">
                            <b-button pill variant="primary" class="">
                                Start A Project
                            </b-button>
                        </nuxt-link>
                    </div>
                </b-container>
            </video-background>
        </client-only>
    </div>
</template>

<script>
export default {
    props: ["title", "description"],
};
</script>

<style lang="scss" scoped>
.content {
    transform: translateY(30vh);
    & > * {
        display: block;
    }
    .heading {
        & > p {
            font-size: 1.2rem;
        }
    }
}
</style>