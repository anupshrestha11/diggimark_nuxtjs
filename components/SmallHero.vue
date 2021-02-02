<template>
    <div
        class="hero"
        :style="
            `background: linear-gradient(0deg, #00000050, #00000050),url('/` +
            image +
            `') no-repeat 50% 30%; background-position: 50% 42%; background-size: cover;`
        "
    >
        <div class="title text-center">
            <h1 class="display-1">{{ title }}</h1>
        </div>
    </div>
</template>

<script>
export default {
    props: ["title", "image"],
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
.hero {
    height: 250px;
    position: relative;

    @media all and (min-width: 600px) {
        height: 500px;
    }
    .title {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        h1 {
            width: 100vw;
            font-weight: bolder;
            color: #fff;
            text-transform: uppercase;
            text-shadow: 0 0 10px #000000;
            @media all and (max-width: 1000px) {
                font-size: 2.5rem;
            }
            @media all and (max-width: 1000px) {
                font-size: 3.5rem;
            }
        }
    }
}
</style>
