<template>

    <navBar />
    <!-- Hero Start -->
    <section
        class="py-36 lg:py-64 w-full table relative bg-[url('../../assets/images/bg/5.jpg')] bg-no-repeat bg-center bg-cover"
        id="home">
        <div class="container relative z-1">
            <div class="grid grid-cols-1 mt-12">
                <h4
                    class="text-white lg:text-5xl text-4xl lg:leading-normal leading-normal font-medium mb-7 position-relative">
                    Everything you need to build <br> a great company with Elsharque</h4>

                <p class="text-white opacity-50 mb-0 max-w-2xl text-lg">Partner with Elsharque for comprehensive solutions and expertise that help you build a successful company.</p>

                <div class="relative mt-10">
                    <a href=""
                        class="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white rounded-md">Get
                        Started</a>
                </div>
            </div>
        </div><!--end container-->
        <div
            class="absolute lg:w-1/2 md:w-4/6 w-full h-full bg-gradient-to-t to-emerald-600 from-emerald-400 md:opacity-100 opacity-80 top-0">
        </div>
    </section><!--end section-->
    <!-- Hero End -->

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
import navBar from '@/components/navbar/navbar-light.vue'
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
        navBar,
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