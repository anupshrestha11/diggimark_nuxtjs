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
// import { mapState } from "vuex";

export default {
    // async fetch({ store }) {
    //     await store.dispatch("loadData");
    // },
    // computed: {
    //     ...mapState(["data"]),
    // },

    asyncData() {
        return {
            data: {
                name: "Diggimark Nepal ",
                description: "Nepal's Leading IT Solution Company",
            },
        };
    },
};
</script>

<style>
</style>