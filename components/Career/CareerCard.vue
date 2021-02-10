<template>
    <div>
        <div class="custom-card border p-4 shadow">
            <h3>{{ title }}</h3>
            <p>Experience : {{ experience }}</p>
            <p>No. of seats : {{ no_of_seats }}</p>
            <div class="text-justify" v-html="excerpt"></div>
            <div class="text-right">
                <b-button variant="link" :to="`/career/` + slug">
                    For More Details
                </b-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["title", "excerpt", "slug", "experience", "no_of_seats"],
};
</script>

<style>
</style>