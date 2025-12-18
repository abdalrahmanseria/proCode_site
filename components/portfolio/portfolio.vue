<template>
    <!-- Start -->
    <section class="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800" id="portfolio">
        <div class="container">
            <div class="grid grid-cols-1 pb-8 text-center">
                <h6 class="text-emerald-600 text-base font-medium uppercase mb-2">{{ t('portfolio.title') }}</h6>
                <h3 class="mb-4 md:text-2xl text-xl font-medium dark:text-white">{{ t('portfolio.subtitle') }}</h3>

                <p class="text-slate-400 dark:text-slate-300 max-w-xl mx-auto">{{ t('portfolio.description') }}</p>
            </div><!--end grid-->

            <div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 mt-8">
                <div v-for="item in portfolios" :key="item.id" 
                    class="relative rounded-md shadow-sm overflow-hidden group cursor-pointer"
                    @click="navigateToProject(item.id)">
                    <img :src="item.image"
                        class="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                        :alt="item.name">
                    <div class="absolute inset-0 group-hover:bg-black opacity-50 transition duration-500 z-0"></div>

                    <div class="absolute inset-0 flex items-center justify-center z-10">
                        <div class="text-center px-4">
                            <h5 class="text-white text-xl font-semibold mb-2 opacity-0 group-hover:opacity-100 transition duration-500">
                                {{ item.name }}
                            </h5>
                        </div>
                    </div>
                </div>
            </div><!--end grid-->
            
            <!-- Previous Projects List -->
            <div class="mt-16">
                <div class="text-center mb-8">
                    <h6 class="text-emerald-600 text-base font-medium uppercase mb-2">{{ t('portfolio.previousProjects') }}</h6>
                </div>
                <div class="max-w-4xl mx-auto bg-white dark:bg-slate-900 p-8 rounded-lg shadow-lg">
                    <ul class="grid grid-cols-1 md:grid-cols-2 gap-4 list-none">
                        <li v-for="(project, index) in previousProjects" :key="index" class="flex items-start">
                            <span class="text-emerald-600 font-semibold me-2">{{ index + 1 }}.</span>
                            <span class="text-slate-400 dark:text-slate-300">{{ project }}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div><!--end container-->
    </section><!--end section-->
    <!-- End -->
    <vue-easy-lightbox :visible="visibleRef" :imgs="imgsRef" :index="indexRef" @hide="onHide"></vue-easy-lightbox>
    <!-- Start -->
    <section id="portfolio-cta" class="py-24 w-full table relative bg-center bg-cover hero-cta">
        <div class="absolute inset-0 bg-black opacity-80"></div>
        <div class="container relative">
            <div class="grid grid-cols-1 pb-8 text-center">
                <h3 class="mb-6 md:text-3xl text-2xl text-white font-medium">{{ t('portfolio.readyToStart') }}</h3>

                <p class="text-white opacity-50 max-w-xl mx-auto">{{ t('portfolio.contactToday') }}</p>
            
                <div class="relative mt-10">
                    <a href="#contact" class="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white rounded-md">{{ t('buttons.getStarted') }} !</a>
                </div>
            </div><!--end grid-->
        </div><!--end container-->
    </section><!--end section-->
    <!-- End -->
</template>

<script>
import mostakbalMasrImg from '@/assets/images/mostakbal masr/Screenshot 2025-12-09 155820.png';
import monorailGarageImg from '@/assets/images/monorail/Screenshot 2025-12-09 161651.png';
import administration90thImg from '@/assets/images/90th/Screenshot 2025-12-09 162536.png';
import newAdminCapitalImg from '@/assets/images/capitalnew/Screenshot 2025-12-09 163033.png';
import newDamiettaImg from '@/assets/images/damietta/Screenshot 2025-12-09 164002.png';
import newAdminCapitalPumpsImg from '@/assets/images/New Administrative/Screenshot 2025-12-09 164250.png';
import ctaImg from '@/assets/images/bg/cta.png';
import VueEasyLightbox from 'vue-easy-lightbox';
import { ref, computed } from 'vue'
import { useLanguage } from '~/composables/useLanguage'
import { useRouter } from 'vue-router'

export default {
    components: {
        VueEasyLightbox,
    },
    setup() {
        const { t, currentLang } = useLanguage()
        const router = useRouter()
        const visibleRef = ref(false)
        const indexRef = ref(0)
        const imgsRef = ref([])

        const previousProjects = computed(() => {
            // Add currentLang as dependency to force recomputation when language changes
            const lang = currentLang.value
            return t('portfolio.projects')
        })
        
        const portfolios = computed(() => {
            // Add currentLang as dependency to force recomputation when language changes
            const lang = currentLang.value
            return [
                {
                    id: 'mostakbal-masr',
                    image: mostakbalMasrImg,
                    name: t('portfolio.projectDetails.mostakbalMasr.name'),
                },
                {
                    id: 'monorail-garage',
                    image: monorailGarageImg,
                    name: t('portfolio.projectDetails.monorailGarage.name'),
                },
                {
                    id: 'administration-90th',
                    image: administration90thImg,
                    name: t('portfolio.projectDetails.administration90th.name'),
                },
                {
                    id: 'new-admin-capital',
                    image: newAdminCapitalImg,
                    name: t('portfolio.projectDetails.newAdminCapital.name'),
                },
                {
                    id: 'new-damietta',
                    image: newDamiettaImg,
                    name: t('portfolio.projectDetails.newDamietta.name'),
                },
                {
                    id: 'new-admin-capital-pumps',
                    image: newAdminCapitalPumpsImg,
                    name: t('portfolio.projectDetails.newAdminCapitalPumps.name'),
                }
            ]
        })

        const navigateToProject = (projectId) => {
            router.push(`/portfolio-detail?id=${projectId}`)
        }

        const onShow = () => {
            visibleRef.value = true
        }
        const showMultiple = () => {
            imgsRef.value = []
            indexRef.value = 0
            onShow()
        }
        const onHide = () => (visibleRef.value = false)

        return {
            t,
            portfolios,
            previousProjects,
            visibleRef,
            indexRef,
            imgsRef,
            showMultiple,
            onHide,
            navigateToProject,
            ctaImg
        }
    }
}
</script>

<style lang="scss" scoped>
.hero-cta {
    background-image: v-bind('`url(${ctaImg})`');
}
</style>