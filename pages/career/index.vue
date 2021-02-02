<template>
    <section class="bg-white">
        <SmallHero title="Careers" image="bg1.jpg" />
        <b-container class="py-3 pb-5">
            <h2 class="text-center py-4">
                We are looking for following positions
            </h2>
            <div v-for="i in 5" :key="i" class="py-2">
                <CareerCard />
            </div>
        </b-container>
        <LetsChat />
    </section>
</template>

<script>
export default {
    head() {
        return {
            title: "Career | Diggimark Nepal",
        };
    },
};
</script>

<style>
</style>