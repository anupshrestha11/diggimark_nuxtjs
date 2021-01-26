<template>
    <div
        class="burger d-flex d-sm-none"
        @click="toggleActive"
        :class="[isActive ? 'active' : '']"
    >
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
    </div>
</template>

<script>
export default {
    props: {
        isActive: Boolean,
        toggleActive: Function,
    },
};
</script>

<style lang="scss">
.burger {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    z-index: 1;
    .line {
        width: 30px;
        height: 3px;
        background: #ddd;
        margin: 3px 0;
        transition: all 0.3s ease-in-out;
        &:nth-of-type(2) {
            width: 20px;
        }
        &:nth-of-type(3) {
            width: 15px;
        }
    }

    &.active {
        .line {
            width: 30px;
            &:nth-of-type(2) {
                opacity: 0;
            }

            &:nth-of-type(1) {
                transform: rotate(45deg) translate(3px, 10px);
            }
            &:nth-of-type(3) {
                transform: rotate(-45deg) translate(3px, -10px);
            }
        }
    }
    .burger {
        z-index: 100;
    }
}
</style>