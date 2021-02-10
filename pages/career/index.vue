<template>
    <section class="bg-white">
        <SmallHero title="Careers" image="bg1.jpg" />
        <b-container class="py-3 pb-5">
            <h2 class="text-center py-4">
                We are looking for following positions
            </h2>
            <div v-for="career in careers" :key="career.id" class="py-2">
                <CareerCard
                    :title="career.title.rendered"
                    :excerpt="career.excerpt.rendered"
                    :slug="career.slug"
                    :experience="career.experience"
                    :no_of_seats="career.no_of_seats"
                />
            </div>
        </b-container>
        <LetsChat />
    </section>
</template>

<script>
export default {
    async asyncData(context) {
        let res = await context.$axios.get("/wp/v2/careers");
        let careers = res.data;
        return {
            careers,
        };
    },

    head() {
        return {
            title: "Careers - Diggimark Nepal",
        };
    },
};
</script>

<style>
</style>