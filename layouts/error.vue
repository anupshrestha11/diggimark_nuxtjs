<template>
    <section>
        <SmallHero
            :title="error.statusCode + `<h1/> <h1> ` + error.message + `.`"
            image="bg1.jpg"
            height="100vh"
        />
        <LetsChat />
    </section>
</template>

<script>
import Section from "../components/Index/Section.vue";
export default {
    props: ["error"],
};

Section;
</script>

<style>
</style>