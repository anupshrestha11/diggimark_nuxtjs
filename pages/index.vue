<template>
    <section>
        <Hero :title="data.name" :description="data.description" />
    </section>
</template>

<script>
import { mapState } from "vuex";

export default {
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