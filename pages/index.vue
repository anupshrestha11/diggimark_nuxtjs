<template>
    <div>
        <section>
            <Hero :title="data.name" :description="data.description" />
        </section>
        <section>
            <Section />
        </section>
    </div>
</template>

<script>
import { mapState } from "vuex";
import Section from "../components/Section.vue";

export default {
    components: { Section },
    async fetch({ store }) {
        await store.dispatch("loadData");
    },
    computed: {
        ...mapState(["data"]),
    },
};
</script>

<style>
</style>