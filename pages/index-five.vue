<template>
    <navbar />
    <section class="py-36 md:h-auto md:py-0 flex items-center relative bg-emerald-600/5 dark:bg-emerald-600/10" id="home">
        <div class="container relative">
            <div class="grid grid-cols-1 text-center mt-0 md:mt-12 pt-0 md:pt-12">
                <div class="mt-28">
                    <div>
                        <h4
                            class="lg:text-5xl text-4xl lg:leading-normal leading-normal font-medium mb-7 position-relative dark:text-white">
                            Innovative Solutions by Elsharque</h4>

                        <p class="text-slate-600 dark:text-white/70 opacity-50 mb-0 max-w-2xl text-lg mx-auto">Discover unique and powerful solutions designed to transform your business with Elsharque's expertise.</p>

                        <div class="relative mt-10">
                            <a href=""
                                class="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white rounded-md">Start
                                Free Trail !</a>
                        </div>
                    </div>

                    <img src="assets/images/bg/laptop.png" alt="" class="relative mt-16">
                </div>
            </div>
        </div><!--end container-->
    </section><!--end section-->
    <about />
    <services />
    <portfolio />
    <client />
    <pricing />
    <team />
    <blog />
    <getintouch />
    <fooTer />
</template>

<script>
import navbar from '@/components/navbar/navbar.vue'
import about from '@/components/about.vue';
import services from '@/components/services.vue';
import portfolio from '@/components/portfolio/portfolio.vue';
import client from '@/components/client.vue';
import pricing from '@/components/pricing.vue';
import team from '@/components/teams.vue';
import blog from '@/components/blog/blog.vue';
import getintouch from '@/components/getInTouch.vue'
import fooTer from '@/components/footer.vue';
export default {
    data() {
        return {

        }
    },
    components: {
        navbar,
        about,
        services,
        portfolio,
        client,
        pricing,
        team,
        blog,
        getintouch,
        fooTer,
    }
}
</script>

<style lang="scss" scoped></style>