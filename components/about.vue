<template>
    <!-- Start -->
    <section class="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800" id="about">
        <div class="container mx-auto">
            <div class="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-2 gap-10 items-center">
                <div class="lg:col-span-5">
                    <div class="relative">
                        <img :src="aboutImg" class="rounded-lg shadow-lg relative" alt="">
                        <!-- Video placeholder - will be replaced later -->
                        <div class="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
                            <!-- Video button removed - placeholder for future video -->
                        </div>
                    </div>
                </div><!--end col-->

                <div class="lg:col-span-7">
                    <div class="lg:ms-7">
                        <div id="about">
                            <h6 class="text-blue-800 text-base font-medium uppercase mb-2">{{ t('about.whoWeAre') }}</h6>
                            <h3 class="mb-4 md:text-2xl text-xl font-medium dark:text-white">{{ t('about.title') }}</h3>

                            <p class="text-slate-400 dark:text-slate-300 max-w-2xl mx-auto">{{ t('about.description') }}</p>
                        </div>

                        <div class="mt-6 section-target" id="about-vision">
                            <h6 class="text-blue-800 text-base font-medium uppercase mb-2">{{ t('about.visionTitle') }}</h6>
                            <p class="text-slate-400 dark:text-slate-300 max-w-2xl mx-auto">{{ t('about.vision') }}</p>
                        </div>

                        <div class="mt-6 section-target" id="about-mission">
                            <h6 class="text-blue-800 text-base font-medium uppercase mb-2">{{ t('about.missionTitle') }}
                            </h6>
                            <p class="text-slate-400 dark:text-slate-300 max-w-2xl mx-auto">{{ t('about.mission') }}</p>
                        </div>

                        <div class="relative mt-10">
                            <a href="#portfolio"
                                class="btn bg-blue-800 hover:bg-blue-900 border-blue-800 hover:border-blue-900 text-white rounded-md">{{
                                    t('portfolio.viewPortfolio') }}</a>
                        </div>
                    </div>
                </div><!--end col-->
            </div><!--end grid-->

            <!-- Chairman Word Section -->

        </div><!--end container-->
    </section><!--end section-->
    <!-- End -->
    <!-- Video modal placeholder - will be replaced later -->
    <!-- <div :class="isActive ? 'fixed' : 'hidden' " class="bg-black/[0.9] top-0 left-0 bottom-0 w-[100%] h-[100%] z-999">
                <div class="h-[100%] flex items-center justify-center">
                    <div class="relative inline-block">
                        <iframe src="" width="700" height="500" frameborder="0"></iframe>
                        <a class="mdi mdi-close text-white absolute top-1 right-1 text-xl cursor-pointer" @click="toggle"></a>
                    </div>
                </div>
          </div> -->
</template>

<script setup>
import { useLanguage } from '~/composables/useLanguage'
import aboutImg from '@/assets/images/about.jpg'

const { t } = useLanguage()
// Video-related code removed - will be restored when new video is added
// const isActive = ref(false)
// const toggle = () => {
//     isActive.value = !isActive.value
// }
</script>

<style lang="scss" scoped></style>