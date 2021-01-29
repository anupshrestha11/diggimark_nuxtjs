<template>
    <div class="mt-4 pt-4">
        <b-container>
            <h4>{{ error.statusCode }}</h4>
            <h5>{{ error.message }}</h5>
        </b-container>
    </div>
</template>

<script>
export default {
    props: ["error"],
};
</script>

<style>
</style>