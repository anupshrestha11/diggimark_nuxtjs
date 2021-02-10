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

export default {
    async fetch({ store }) {
        await store.dispatch("loadData", { pageid: 9 });
        await store.dispatch("loadTestimonials");
        await store.dispatch("loadProjects");
        await store.dispatch("loadClients");
    },
    computed: {
        ...mapState(["data", "testimonials"]),
    },

    head() {
        return {
            title: this.data.head.title,
            meta: this.data.head.meta,
        };
    },
};
</script>

<style>
</style>