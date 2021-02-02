<template>
    <section class="bg-white">
        <SmallHero title="Blog" image="bg1.jpg" />

        <b-container class="py-5">
            <h2>Latest Posts</h2>
            <hr />
            <b-row>
                <b-col cols="12" md="6" lg="4" v-for="i in 5" :key="i">
                    <b-card
                        title="New Changes on Technology"
                        img-src="/s1.jpg"
                        img-alt="post image"
                        tag="article"
                        class="my-4"
                    >
                        <b-card-text class="text-justify">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Eos delectus nobis omnis sed exercitationem
                            inventore illo dignissimos voluptate iure iusto
                            perspiciatis odit, optio distinctio quae asperiores!
                            Vel corporis consectetur autem!
                        </b-card-text>
                        <b-button
                            variant="link"
                            class="p-0 m-0 shadow-none"
                            to="/blog/lksdn"
                            >Read More...</b-button
                        >
                    </b-card>
                </b-col>
            </b-row>
        </b-container>

        <LetsChat />
    </section>
</template>

<script>
export default {
    head() {
        return {
            title: "Blog | Diggimark Nepal",
        };
    },
};
</script>

<style>
</style>