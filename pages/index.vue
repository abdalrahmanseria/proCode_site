<template>
    <navBar />
    <!-- Hero Start -->

    <section class="py-36 lg:py-64 w-full table relative bg-[url('../../assets/images/bg/1.jpg')] bg-center bg-cover"
        id="home">
        <div class="absolute inset-0 bg-black opacity-80"></div>
        <div class="container relative">
            <div class="grid grid-cols-1 mt-12">
                <h4
                    class="text-white lg:text-5xl text-4xl lg:leading-normal leading-normal font-medium mb-7 position-relative">
                    {{ t('hero.title') }} <br>{{ t('hero.subtitle') }}
                    <br class="md:hidden">
                    <ClientOnly fallback-tag="span">
                        <span v-if="typewriterReady" class="inline-block min-w-[200px]">
                            <vue-typewriter-effect 
                                :key="`typewriter-${currentLang}`"
                                class="typewrite relative text-type-element inline" 
                                data-period="2000"
                                :strings='t("hero.typewriterWords")' />
                        </span>
                        <span v-else class="inline-block min-w-[200px]">
                            {{ t("hero.typewriterWords")[0] }}
                        </span>
                    </ClientOnly>
                </h4>

                <p class="text-white opacity-50 mb-0 max-w-2xl text-lg">{{ t('hero.description') }}</p>

                <div class="relative mt-10">
                    <a href="#contact"
                        class="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white rounded-md">{{ t('buttons.getStarted') }}</a>
                </div>
            </div>
        </div><!--end container-->
    </section><!--end section-->
    <!-- Hero End -->
    <about />
    <services />
    <portfolio />
    <client />
    <team />
    <blog />
    <getintouch />
    <fooTer />


</template>

<script setup>
import { ref, onMounted } from 'vue'
import navBar from '@/components/navbar/navbar-light.vue';
import VueTypewriterEffect from "vue-typewriter-effect";
import about from '@/components/about.vue';
import services from '@/components/services.vue';
import portfolio from '@/components/portfolio/portfolio.vue';
import client from '@/components/client.vue';
import team from '@/components/teams.vue';
import blog from '@/components/blog/blog.vue';
import getintouch from '@/components/getInTouch.vue'
import fooTer from '@/components/footer.vue';
import { useLanguage } from '~/composables/useLanguage'

const { t, currentLang } = useLanguage()
const typewriterReady = ref(false)

onMounted(() => {
  // Small delay to ensure DOM is ready
  setTimeout(() => {
    typewriterReady.value = true
  }, 100)
})
</script>
