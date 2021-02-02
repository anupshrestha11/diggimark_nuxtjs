<template>
    <section class="bg-white">
        <SmallHero title="New Changes in Technology" image="s1.jpg" />
        <b-container class="py-5">
            <h1>New Changes in Technology</h1>
            <div class="pb-2">
                <small> 17 Sep, 2020, John Doe</small>
            </div>
            <p class="text-justify">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. At
                obcaecati quibusdam ipsa voluptates, architecto laboriosam
                beatae eaque voluptatem est illo id aperiam ex, repellendus
                porro provident saepe dolores? Accusantium, sapiente veritatis
                voluptatem mollitia quos repellendus reprehenderit animi.
                Doloribus harum dolore vitae, earum labore tempora voluptate
                quisquam fugit soluta. Asperiores dolorem repellendus cupiditate
                corporis maxime non. Quibusdam, minus maiores. Aut ducimus
                provident rem magnam assumenda dolore libero consequuntur
                debitis aperiam, quos iure, impedit magni nobis cupiditate quis
                a? Sequi odio dolor ullam nostrum hic eum dicta velit voluptatem
                deleniti at accusantium, nam est numquam, laborum asperiores
                dolorum, porro sed ab voluptate nisi quia! Sequi, repellendus
                incidunt quibusdam maxime, explicabo eum sit molestiae vel eos
                excepturi dolores odit dolor eius consectetur blanditiis.
                Doloremque quasi voluptatem ullam vel illo, deserunt enim
                reprehenderit velit dolores in dignissimos accusantium quia
                delectus perspiciatis dolorum harum quae alias porro facere
                natus. Dolorum iste incidunt vero at earum adipisci ea,
                repudiandae, nostrum laboriosam optio tempora, numquam alias. Ab
                adipisci possimus sapiente nulla unde animi ex quam voluptatum
                repellendus similique earum vitae, hic praesentium maxime
                explicabo consectetur veniam nesciunt excepturi. Dolorem minus
                impedit excepturi, numquam quas molestiae totam non possimus
                voluptatum porro veniam nobis similique eaque ducimus deserunt
                qui culpa incidunt cumque laboriosam officia ipsum. Magnam
                reiciendis iure provident cum esse nostrum quis! Repellendus
                incidunt suscipit vel corrupti obcaecati. Distinctio minima
                dolor similique totam quibusdam eius aliquid animi, porro,
                voluptates libero quae accusamus quam ab possimus harum aperiam
                ratione deserunt cum aliquam facilis voluptatibus temporibus eos
                facere iste. Laudantium accusantium explicabo odit quas nemo.
                Illum dolores tempora dolor sequi, expedita exercitationem modi
                amet quam aliquid, ipsam, natus nostrum veritatis obcaecati
                deleniti dicta libero. Sapiente, esse ad! Similique maxime
                aliquam fuga labore reiciendis earum sed, neque repellendus
                error id perferendis nostrum minus dolores voluptatum.
                Reprehenderit sit aperiam voluptates, alias dolorum vitae culpa
                animi itaque vero aut reiciendis id impedit sed ipsam, quidem
                cum, a similique aliquam blanditiis doloremque voluptate
                voluptatibus. Non recusandae quos voluptas odit repudiandae
                corrupti saepe odio aut consequuntur nobis quae ipsum,
                repellendus nisi iusto dicta, natus ratione ea quaerat provident
                ipsam! Quibusdam impedit modi, quidem officiis voluptates at
                aliquam illum voluptatibus quam ratione obcaecati aut hic nihil
                cum voluptatem asperiores reprehenderit sed vero eveniet?
                Mollitia quod doloribus et similique labore velit fugiat esse
                saepe, necessitatibus accusamus, itaque iste illum aliquid at
                neque veritatis id! A laborum dicta voluptate mollitia, delectus
                quaerat error provident ipsa sequi quod ducimus, iure tempore
                non eligendi dolore, culpa magni? Nostrum ipsa dignissimos unde
                ducimus perferendis ex dolorum deleniti dolores repellat omnis
                velit iste, labore numquam architecto totam odio voluptatibus
                molestias facere doloribus corporis! Omnis maxime est
                exercitationem illum quidem ad et sit deleniti laboriosam? Est
                doloremque ipsum sequi tempora eos assumenda, quia quod debitis,
                ducimus excepturi quam dignissimos quisquam. Odio quia accusamus
                magni quos praesentium? Illum, error suscipit? Quidem optio
                ducimus consectetur dolor quas inventore iure excepturi eaque
                nulla atque. Ipsam culpa non itaque? Quos, sed omnis id
                aspernatur, reiciendis eius dolores architecto temporibus
                incidunt reprehenderit, provident placeat animi maxime!
                Architecto, amet.
            </p>
            <div id="disqus_thread"></div>
        </b-container>
    </section>
</template>

<script>
export default {
    mounted: () => {
        var d = document,
            s = d.createElement("script");
        s.src = "https://diggimark.disqus.com/embed.js";
        s.setAttribute("data-timestamp", +new Date());
        (d.head || d.body).appendChild(s);
    },
};
</script>

<style>
</style>