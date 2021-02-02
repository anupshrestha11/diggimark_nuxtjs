<template>
    <section class="bg-white w-100">
        <SmallHero title="About Us" image="bg2.jpg" />
        <b-container fluid class="px-lg-5 py-lg-3">
            <b-row>
                <b-col cols="12" xl="8" class="p-3 my-auto">
                    <h2 class="text-center text-md-left">Our Mission</h2>
                    <p
                        class=""
                        style="font-size: 1rem line-height: 0.1rem; font-family: 'Poppins', sans-serif;"
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ducimus libero assumenda quidem quam. Maxime nihil
                        excepturi quae magni! Placeat laudantium quos
                        asperiores, veritatis beatae laboriosam amet saepe,
                        numquam nobis ut facere sapiente, qui quis.
                        Reprehenderit odio porro sint ipsa. A molestiae eveniet
                        provident ducimus eligendi quod repellendus aperiam
                        exercitationem quasi quia non neque illum, sunt minus
                        quaerat est sequi, perspiciatis harum soluta ea numquam
                        totam? Magni fugiat inventore, vitae nostrum voluptatum
                        molestias consectetur minus tempore adipisci
                        voluptatibus rem aliquam optio, repellendus alias eaque
                        excepturi neque et cupiditate facilis at, in nemo.
                        Voluptatum praesentium eos sapiente et facere reiciendis
                        dolorem quaerat magni deserunt nisi placeat, explicabo
                        ad iste asperiores pariatur cumque molestias aspernatur
                        modi veritatis omnis quos inventore minima. Ducimus ex
                        accusamus consequuntur reprehenderit eaque ab laborum
                        culpa, tenetur nisi possimus commodi doloremque! Beatae
                        optio sequi doloremque soluta nemo nam nesciunt sed. Est
                        voluptatum similique minima dolores magni perferendis
                        atque mollitia illo rerum, nihil, consequuntur,
                        perspiciatis necessitatibus in sunt nam cupiditate
                        officia voluptatibus ullam earum doloremque repellat
                        soluta esse quo dignissimos? Facere odit aut porro fuga
                        ipsam itaque debitis, voluptate sint corporis molestias,
                        delectus magni illo explicabo quisquam hic esse nulla
                        expedita commodi nihil tenetur. Natus commodi inventore
                        officiis, cumque temporibus consequatur sint quis, esse
                    </p>
                </b-col>
                <b-col class="p-3" style="max-height: 400px">
                    <img
                        src="/mission.svg"
                        class="image_fluid w-100 h-100 rellax"
                        data-rellax-speed="-1"
                    />
                </b-col>
            </b-row>
            <OurTeam />
        </b-container>
        <LetsChat />
    </section>
</template>

<script>
var Rellax = require("rellax");

export default {
    mounted: () => {
        var rellax = new Rellax(".rellax");
    },
};
</script>
