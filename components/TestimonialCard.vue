<template>
    <div
        class="d-flex justify-content-center flex-column align-items-center custom__card p-4 border"
    >
        <div class="text-center">
            <img
                src="/person.jpg"
                width="100px"
                height="100px"
                class=""
                style="object-fit: cover; border-radius: 100%"
                alt=""
            />
            <h5>John Doe</h5>
            <p class="text-muted">GTZ Enterprises, <em>CEO</em></p>
        </div>
        <p class="text-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
            sint molestiae sequi magni, quis praesentium rem eius magnam nobis
            amet iste at illum officia quisquam beatae minus dignissimos est
            numquam voluptate consequuntur qui debitis quos. Fugit ullam
            laudantium, neque culpa, praesentium sed obcaecati ipsum magni porro
            at facere
        </p>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" >
.custom__card {
    background: #fff;
    margin: 10px;
    border-radius: 20px;
    transition: all 0.3s ease;
    &:hover {
        box-shadow: 0 0 12px 0 #00000040;
    }
}
</style>