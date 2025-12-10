<template>
 <!-- Start -->
 <section class="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800" id="about">
            <div class="container mx-auto">
                <div class="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-2 gap-10 items-center">
                    <div class="lg:col-span-5">
                        <div class="relative">
                            <img src="assets/images/about.jpg" class="rounded-lg shadow-lg relative" alt="">
                            <div class="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
                                <a  @click="toggle" data-type="youtube" data-id="S_CGed6E610" class="cursor-pointer lightbox size-20 rounded-full shadow-lg shadow-slate-100 dark:shadow-slate-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-emerald-600">
                                    <i class="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                                </a>
                            </div>
                        </div>
                    </div><!--end col-->

                    <div class="lg:col-span-7">
                        <div class="lg:ms-7">
                            <h6 class="text-emerald-600 text-base font-medium uppercase mb-2">{{ t('about.whoWeAre') }}</h6>
                            <h3 class="mb-4 md:text-2xl text-xl font-medium dark:text-white">{{ t('about.title') }}</h3>

                            <p class="text-slate-400 dark:text-slate-300 max-w-2xl mx-auto">{{ t('about.description') }}</p>
                            
                            <div class="mt-6">
                                <h6 class="text-emerald-600 text-base font-medium uppercase mb-2">{{ t('about.visionTitle') }}</h6>
                                <p class="text-slate-400 dark:text-slate-300 max-w-2xl mx-auto">{{ t('about.vision') }}</p>
                            </div>
                            
                            <div class="mt-6">
                                <h6 class="text-emerald-600 text-base font-medium uppercase mb-2">{{ t('about.missionTitle') }}</h6>
                                <p class="text-slate-400 dark:text-slate-300 max-w-2xl mx-auto">{{ t('about.mission') }}</p>
                            </div>
                        
                            <div class="relative mt-10">
                                <a href="#portfolio" class="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white rounded-md">{{ t('portfolio.viewPortfolio') }}</a>
                            </div>
                        </div>
                    </div><!--end col-->
                </div><!--end grid-->
                
                <!-- Chairman Word Section -->
                <div class="grid grid-cols-1 mt-16">
                    <div class="text-center mb-8">
                        <h6 class="text-emerald-600 text-base font-medium uppercase mb-2">{{ t('about.chairmanWord.title') }}</h6>
                    </div>
                    <div class="max-w-4xl mx-auto bg-white dark:bg-slate-900 p-8 rounded-lg shadow-lg">
                        <p class="text-slate-400 dark:text-slate-300 mb-4 font-medium">{{ t('about.chairmanWord.greeting') }}</p>
                        <p class="text-slate-400 dark:text-slate-300 mb-4">{{ t('about.chairmanWord.paragraph1') }}</p>
                        <p class="text-slate-400 dark:text-slate-300 mb-4">{{ t('about.chairmanWord.paragraph2') }}</p>
                        <p class="text-slate-400 dark:text-slate-300 mb-4">{{ t('about.chairmanWord.paragraph3') }}</p>
                        <p class="text-slate-400 dark:text-slate-300 mb-4">{{ t('about.chairmanWord.paragraph4') }}</p>
                        <p class="text-slate-400 dark:text-slate-300 mb-6">{{ t('about.chairmanWord.paragraph5') }}</p>
                        <p class="text-slate-400 dark:text-slate-300 mb-2">{{ t('about.chairmanWord.closing') }}</p>
                        <div class="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
                            <h5 class="text-lg font-semibold dark:text-white mb-1">{{ t('about.chairmanWord.ceoName') }}</h5>
                            <p class="text-emerald-600 font-medium mb-1">{{ t('about.chairmanWord.ceoTitle') }}</p>
                            <p class="text-slate-400 dark:text-slate-300 text-sm">{{ t('about.chairmanWord.ceoSubtitle') }}</p>
                        </div>
                    </div>
                </div>
            </div><!--end container-->
        </section><!--end section-->
        <!-- End -->
        <div :class="isActive ? 'fixed' : 'hidden' " class="bg-black/[0.9] top-0 left-0 bottom-0 w-[100%] h-[100%] z-999">
                <div class="h-[100%] flex items-center justify-center">
                    <div class="relative inline-block">
                        <iframe src="https://www.youtube.com/embed/S_CGed6E610" width="700" height="500" frameborder="0"></iframe>
                        <a class="mdi mdi-close text-white absolute top-1 right-1 text-xl cursor-pointer" @click="toggle"></a>
                    </div>
                </div>
          </div>
</template>

<script setup>
import { ref } from 'vue'
import { useLanguage } from '~/composables/useLanguage'

const { t } = useLanguage()
const isActive = ref(false)

const toggle = () => {
    isActive.value = !isActive.value
}
</script>

<style lang="scss" scoped>

</style>