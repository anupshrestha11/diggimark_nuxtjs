<template>
    <section class="bg-white">
        <SmallHero title="Exclusive SEO" image="bg1.jpg" />
        <b-container class="py-5">
            <div>
                <h2 class="text-center text-md-left">Exclusive SEO</h2>
                <div class="py-3">
                    <h4><em>What is SEO?</em></h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptates, ea veritatis ullam vel assumenda delectus
                        cum temporibus incidunt voluptatibus similique
                        voluptatum illum magni culpa quam nihil? Ullam optio
                        dicta delectus! Odio dolore maxime eveniet quo,
                        repellendus voluptates dolorem doloribus soluta, libero
                        sunt obcaecati dignissimos maiores? Corrupti sunt modi
                        dolore tempora. Odio deserunt, aut obcaecati ut fugiat
                        maiores consequuntur ipsam eveniet. Repudiandae
                        architecto in culpa numquam necessitatibus, est
                        praesentium illum asperiores totam atque magni. Harum
                        sint earum id provident error, quibusdam voluptas ullam.
                        Obcaecati, dolore! Doloribus officia odit quibusdam
                        pariatur saepe. Ullam porro repudiandae facere
                        voluptatum inventore, eos nemo tempora vero eveniet
                        exercitationem suscipit, corporis, nisi magni esse
                        praesentium dolor amet magnam assumenda rem ipsa laborum
                        ut reprehenderit? Deleniti, qui et. Vero ipsam soluta
                        dicta. Dolore beatae numquam vero nisi impedit, sed
                        officiis quas dolorem cum harum quo quasi nemo.
                        Praesentium nostrum veritatis quis maxime error dolores
                        voluptas aperiam consequatur nulla?
                    </p>
                </div>
                <div class="py-3">
                    <h4><em>Why it is Needed?</em></h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptates, ea veritatis ullam vel assumenda delectus
                        cum temporibus incidunt voluptatibus similique
                        voluptatum illum magni culpa quam nihil? Ullam optio
                        dicta delectus! Odio dolore maxime eveniet quo,
                        repellendus voluptates dolorem doloribus soluta, libero
                        sunt obcaecati dignissimos maiores? Corrupti sunt modi
                        dolore tempora. Odio deserunt, aut obcaecati ut fugiat
                        maiores consequuntur ipsam eveniet. Repudiandae
                        architecto in culpa numquam necessitatibus, est
                        praesentium illum asperiores totam atque magni. Harum
                        sint earum id provident error, quibusdam voluptas ullam.
                        Obcaecati, dolore! Doloribus officia odit quibusdam
                        pariatur saepe. Ullam porro repudiandae facere
                        voluptatum inventore, eos nemo tempora vero eveniet
                        exercitationem suscipit, corporis, nisi magni esse
                        praesentium dolor amet magnam assumenda rem ipsa laborum
                        ut reprehenderit? Deleniti, qui et. Vero ipsam soluta
                        dicta. Dolore beatae numquam vero nisi impedit, sed
                        officiis quas dolorem cum harum quo quasi nemo.
                        Praesentium nostrum veritatis quis maxime error dolores
                        voluptas aperiam consequatur nulla?
                    </p>
                </div>
                <div class="py-3">
                    <h4><em>Our Expertise</em></h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptates, ea veritatis ullam vel assumenda delectus
                        cum temporibus incidunt voluptatibus similique
                        voluptatum illum magni culpa quam nihil? Ullam optio
                        dicta delectus! Odio dolore maxime eveniet quo,
                        repellendus voluptates dolorem doloribus soluta, libero
                        sunt obcaecati dignissimos maiores? Corrupti sunt modi
                        dolore tempora. Odio deserunt, aut obcaecati ut fugiat
                        maiores consequuntur ipsam eveniet. Repudiandae
                        architecto in culpa numquam necessitatibus, est
                        praesentium illum asperiores totam atque magni. Harum
                        sint earum id provident error, quibusdam voluptas ullam.
                        Obcaecati, dolore! Doloribus officia odit quibusdam
                        pariatur saepe. Ullam porro repudiandae facere
                        voluptatum inventore, eos nemo tempora vero eveniet
                        exercitationem suscipit, corporis, nisi magni esse
                        praesentium dolor amet magnam assumenda rem ipsa laborum
                        ut reprehenderit? Deleniti, qui et. Vero ipsam soluta
                        dicta. Dolore beatae numquam vero nisi impedit, sed
                        officiis quas dolorem cum harum quo quasi nemo.
                        Praesentium nostrum veritatis quis maxime error dolores
                        voluptas aperiam consequatur nulla?
                    </p>
                </div>
                <b-row>
                    <b-col cols="12">
                        <h5 class="text-center">Some of Example Work</h5>
                    </b-col>
                    <b-col cols="12" md="6" lg="4" v-for="i in 5" :key="i">
                        <WorkCard title="Diitial tesla" tags="SEO" />
                    </b-col>
                </b-row>
            </div>
        </b-container>
        <LetsChat />
    </section>
</template>

<script>
export default {};
</script>

<style>
</style>