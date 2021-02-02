<template>
    <section class="bg-white">
        <SmallHero title="Software Engineer" image="bg2.jpg" />

        <b-container>
            <div class="py-4">
                <div class="py-1">
                    <strong>Position : </strong><span>Software Engineer</span>
                </div>
                <div class="py-1">
                    <strong>No. of seats : </strong><span>4 M/F</span>
                </div>
                <div class="py-1">
                    <strong>Experience : </strong><span>2.5 Years</span>
                </div>
                <div class="py-1">
                    <strong>Requirements : </strong
                    ><span>Vue, React, Laravel, Spring Boot</span>
                </div>
            </div>
            <p v-html="content" class="text-justify"></p>
            <div class="py-4 text-right">
                <b-button variant="success">Apply Now</b-button>
            </div>
        </b-container>

        <LetsChat />
    </section>
</template>

<script>
export default {
    data() {
        return {
            content:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde totam id recusandae, rem illo dolor delectus. Eius officia corporis voluptas, quia laboriosam eligendi fuga velit mollitia iusto sunt maiores, natus ipsum nam illum corrupti veritatis ratione nemo sapiente voluptates placeat voluptate. Repellat aliquam autem ipsam eveniet nulla nisi amet laboriosam incidunt nam minima eos suscipit at laudantium placeat magni eius quas laborum, modi odio. Modi est consequatur in suscipit, culpa, tenetur maxime unde rem et dolore cupiditate? Tempore ad beatae adipisci quidem laborum soluta deleniti sit officia fuga laudantium, similique ipsam minima harum ea neque necessitatibus maiores non, velit sint nisi itaque cupiditate repellendus in! Adipisci, ut. Cumque recusandae nesciunt libero, quo expedita sed. Accusantium animi modi, atque quaerat id praesentium assumenda? Eius dolor corporis voluptatum quidem tempore nam provident autem reprehenderit culpa consequatur veritatis, dicta ducimus ad quas dolores quis enim cupiditate libero in voluptatibus officia quos nobis qui dignissimos? Iure consectetur tempora suscipit adipisci eligendi fugit nulla excepturi dolorem nisi quod illum aut assumenda, fuga quidem corrupti eveniet dolor! Quisquam hic a fuga sapiente, facilis ducimus aspernatur. Dolorem accusamus odit, voluptates repudiandae esse modi rerum eligendi fugiat, tempore necessitatibus rem repellendus! Sit, ipsa iusto consectetur dolore autem ab.",
        };
    },
    head() {
        return {
            title: "Software Engineer - Career | Diggimark Nepal",
        };
    },
};
</script>

<style>
</style>