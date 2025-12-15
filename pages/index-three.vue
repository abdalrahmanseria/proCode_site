<template>
    <div>
        <navBar />
        <section class="py-36 md:py-72 w-full h-full table relative  bg-center bg-cover jarallax"
            :style="{ backgroundImage: `url(${backgroundImagePath})`, backgroundPosition: 'center', backgroundAttachment: 'fixed' }" data-jarallax data-speed="0.5" id="home">
            <div class="absolute inset-0 bg-black opacity-80"></div>
            <div class="container relative">
                <div class="grid grid-cols-1 text-center">
                    <h4
                        class="text-white lg:text-5xl text-4xl lg:leading-normal leading-normal font-medium mb-7 position-relative">
                        Transform Your Vision with Elsharque</h4>

                    <p class="text-white opacity-50 mb-0 max-w-2xl text-lg mx-auto">Experience excellence with Elsharque. We deliver innovative solutions tailored to your business needs.</p>

                    <div class="text-center subcribe-form mt-4 pt-2">
                        <form class="relative mx-auto">
                            <input type="email" id="subemail" name="email"
                                class="rounded-full bg-white opacity-70 border" placeholder="E-mail :">
                            <button type="submit"
                                class="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white rounded-full">Submit
                                <i class="uil uil-arrow-right"></i></button>
                        </form><!--end form-->
                    </div>
                </div>
            </div><!--end container-->
        </section><!--end section-->
    </div>
    <about />
    <services />
    <porTfolio />
    <client />
    <blog />
    <getintouch />
    <fooTer />
</template>

<script>
import navBar from '@/components/navbar/navbar-light.vue';
import about from '@/components/about.vue';
import services from '@/components/services.vue';
import porTfolio from '@/components/portfolio/portfolio-jarallax.vue';
import client from '@/components/client.vue';
import blog from '@/components/blog/blog.vue';
import getintouch from '@/components/getInTouch.vue'
import fooTer from '@/components/footer.vue';
import backgroundImagePath from '../../assets/images/bg/4.jpg'
export default {
    data() {
        return {
            backgroundImagePath
        }
    },
    components: {
        navBar,
        about,
        services,
        porTfolio,
        client,
        blog,
        getintouch,
        fooTer,
    }
}
</script>

<style lang="scss" scoped></style>