<template>
    <section class="relative md:py-24 py-16">
        <div class="container">
            <div class="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                <div class="lg:col-span-5 md:col-span-6">
                    <div class="grid grid-cols-1 gap-[30px] max-h-[calc(100vh-200px)] overflow-y-auto pr-2 custom-scrollbar">
                        <div v-for="(img, index) in projectImages" :key="index" class="relative group cursor-pointer overflow-hidden rounded-md">
                            <img :src="img" 
                                class="w-full rounded-md group-hover:scale-110 transition duration-500" 
                                :alt="`${projectName} - Image ${index + 1}`"
                                @click="openImageLightbox(index)">
                        </div>
                    </div><!--end grid-->
                </div><!--end col-->

                <div class="lg:col-span-7 md:col-span-6">
                    <div class="sticky top-20">
                        <div class="grid lg:grid-cols-12 grid-cols-1 gap-[30px]">
                            <div class="lg:col-span-12">
                                <div class="work-details">
                                    <h4 class="text-xl font-medium mb-3 border-b border-gray-100 dark:border-gray-700 pb-3 dark:text-white">
                                        {{ t('portfolio.projectDetails.projectDetail') }} :
                                    </h4>
                                    <p class="text-slate-400 dark:text-slate-300 mb-4">{{ projectDescription }}</p>
                                    
                                    <div v-if="scopeOfWork" class="mt-6">
                                        <h5 class="text-lg font-medium mb-3 dark:text-white">{{ t('portfolio.projectDetails.scopeOfWork') }}:</h5>
                                        <ul v-if="Array.isArray(scopeOfWork)" class="list-disc list-inside space-y-2 text-slate-400 dark:text-slate-300">
                                            <li v-for="(item, index) in scopeOfWork" :key="index">{{ item }}</li>
                                        </ul>
                                        <p v-else class="text-slate-400 dark:text-slate-300">{{ scopeOfWork }}</p>
                                    </div>
                                </div>
                            </div><!--end col-->
                            
                            <div class="lg:col-span-7">
                                <div class="bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 p-6 rounded-md">
                                    <h5 class="text-lg font-medium border-b border-gray-100 dark:border-gray-700 pb-3 mb-3 dark:text-white">
                                        {{ t('portfolio.projectDetails.projectInfo') }} :
                                    </h5>
                                    <dl class="grid grid-cols-12 mb-0">
                                        <dt class="md:col-span-4 col-span-5 mt-2 dark:text-white">{{ t('portfolio.projectDetails.location') }} :</dt>
                                        <dd class="md:col-span-8 col-span-7 mt-2 text-slate-400 dark:text-slate-300">{{ projectLocation }}</dd>

                                        <dt v-if="projectClient" class="md:col-span-4 col-span-5 mt-2 dark:text-white">{{ t('portfolio.projectDetails.client') }} :</dt>
                                        <dd v-if="projectClient" class="md:col-span-8 col-span-7 mt-2 text-slate-400 dark:text-slate-300">{{ projectClient }}</dd>

                                        <dt v-if="projectCategory" class="md:col-span-4 col-span-5 mt-2 dark:text-white">{{ t('portfolio.projectDetails.category') }} :</dt>
                                        <dd v-if="projectCategory" class="md:col-span-8 col-span-7 mt-2 text-slate-400 dark:text-slate-300">{{ projectCategory }}</dd>

                                        <dt v-if="projectDate" class="md:col-span-4 col-span-5 mt-2 dark:text-white">{{ t('portfolio.projectDetails.date') }} :</dt>
                                        <dd v-if="projectDate" class="md:col-span-8 col-span-7 mt-2 text-slate-400 dark:text-slate-300">{{ projectDate }}</dd>
                                    </dl>  
                                </div>
                            </div><!--end col-->
                        </div><!--end grid-->
                    </div>
                </div><!--end col-->
            </div><!--end grid-->
        </div><!--end container-->

        <div class="container lg:mt-24 mt-16">
            <div class="grid grid-cols-1 text-center">
                <h3 class="mb-6 md:text-2xl text-xl font-medium dark:text-white">{{ t('portfolio.projectDetails.haveQuestion') }}</h3>

                <p class="text-slate-400 dark:text-slate-300 max-w-xl mx-auto">{{ t('contact.description') }}</p>
            
                <div class="mt-6">
                    <NuxtLink to="/#contact" class="py-2 px-5 inline-block font-normal tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-blue-800 hover:bg-blue-900 border-blue-800 hover:border-blue-900 text-white rounded-md">
                        <i class="uil uil-phone align-middle me-2"></i> {{ t('portfolio.projectDetails.contactUs') }}
                    </NuxtLink>
                </div>
            </div><!--end grid-->
        </div><!--end container-->
    </section><!--end section-->
    <!-- End -->
    
    <!-- Image Lightbox -->
    <vue-easy-lightbox :visible="isImageLightboxOpen" :imgs="lightboxImages" :index="lightboxIndex" @hide="closeImageLightbox"></vue-easy-lightbox>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import { useLanguage } from '~/composables/useLanguage'
import { useRoute } from 'vue-router'
import VueEasyLightbox from 'vue-easy-lightbox'

// Import Mostakbal Masr images
import mostakbalImg1 from '@/assets/images/mostakbal masr/Screenshot 2025-12-09 155820.png'
import mostakbalImg2 from '@/assets/images/mostakbal masr/Screenshot 2025-12-09 155828.png'
import mostakbalImg3 from '@/assets/images/mostakbal masr/Screenshot 2025-12-09 155832.png'
import mostakbalImg4 from '@/assets/images/mostakbal masr/Screenshot 2025-12-09 155837.png'
import mostakbalImg5 from '@/assets/images/mostakbal masr/Screenshot 2025-12-09 155851.png'
import mostakbalImg6 from '@/assets/images/mostakbal masr/Screenshot 2025-12-09 155855.png'
import mostakbalImg7 from '@/assets/images/mostakbal masr/Screenshot 2025-12-09 155921.png'
import mostakbalImg8 from '@/assets/images/mostakbal masr/Screenshot 2025-12-09 155933.png'
import mostakbalImg9 from '@/assets/images/mostakbal masr/Screenshot 2025-12-09 160034.png'
import mostakbalImg10 from '@/assets/images/mostakbal masr/Screenshot 2025-12-09 160042.png'
import mostakbalImg11 from '@/assets/images/mostakbal masr/Screenshot 2025-12-09 160047.png'
import mostakbalImg12 from '@/assets/images/mostakbal masr/Screenshot 2025-12-09 160052.png'
import mostakbalImg13 from '@/assets/images/mostakbal masr/Screenshot 2025-12-09 160101.png'
import mostakbalImg14 from '@/assets/images/mostakbal masr/Screenshot 2025-12-09 160108.png'
import mostakbalImg15 from '@/assets/images/mostakbal masr/Screenshot 2025-12-09 160113.png'
import mostakbalImg16 from '@/assets/images/mostakbal masr/Screenshot 2025-12-09 160118.png'

const mostakbalMasrImages = [
    mostakbalImg1, mostakbalImg2, mostakbalImg3, mostakbalImg4,
    mostakbalImg5, mostakbalImg6, mostakbalImg7, mostakbalImg8,
    mostakbalImg9, mostakbalImg10, mostakbalImg11, mostakbalImg12,
    mostakbalImg13, mostakbalImg14, mostakbalImg15, mostakbalImg16
]

// Import Monorail Garage images
import monorailImg1 from '@/assets/images/monorail/Screenshot 2025-12-09 161651.png'
import monorailImg2 from '@/assets/images/monorail/Screenshot 2025-12-09 161657.png'
import monorailImg3 from '@/assets/images/monorail/Screenshot 2025-12-09 161703.png'
import monorailImg4 from '@/assets/images/monorail/Screenshot 2025-12-09 161708.png'
import monorailImg5 from '@/assets/images/monorail/Screenshot 2025-12-09 161714.png'
import monorailImg6 from '@/assets/images/monorail/Screenshot 2025-12-09 161718.png'
import monorailImg7 from '@/assets/images/monorail/Screenshot 2025-12-09 161725.png'
import monorailImg8 from '@/assets/images/monorail/Screenshot 2025-12-09 161730.png'
import monorailImg9 from '@/assets/images/monorail/Screenshot 2025-12-09 161736.png'
import monorailImg10 from '@/assets/images/monorail/Screenshot 2025-12-09 161742.png'

const monorailGarageImages = [
    monorailImg1, monorailImg2, monorailImg3, monorailImg4,
    monorailImg5, monorailImg6, monorailImg7, monorailImg8,
    monorailImg9, monorailImg10
]

// Import Administration 90th Street images
import admin90thImg1 from '@/assets/images/90th/Screenshot 2025-12-09 162536.png'
import admin90thImg2 from '@/assets/images/90th/Screenshot 2025-12-09 162541.png'
import admin90thImg3 from '@/assets/images/90th/Screenshot 2025-12-09 162546.png'
import admin90thImg4 from '@/assets/images/90th/Screenshot 2025-12-09 162551.png'
import admin90thImg5 from '@/assets/images/90th/Screenshot 2025-12-09 162558.png'
import admin90thImg6 from '@/assets/images/90th/Screenshot 2025-12-09 162603.png'
import admin90thImg7 from '@/assets/images/90th/Screenshot 2025-12-09 162611.png'
import admin90thImg8 from '@/assets/images/90th/Screenshot 2025-12-09 162615.png'

const administration90thImages = [
    admin90thImg1, admin90thImg2, admin90thImg3, admin90thImg4,
    admin90thImg5, admin90thImg6, admin90thImg7, admin90thImg8
]

// Import New Administrative Capital images
import newAdminCapitalImg1 from '@/assets/images/capitalnew/Screenshot 2025-12-09 163033.png'
import newAdminCapitalImg2 from '@/assets/images/capitalnew/Screenshot 2025-12-09 163039.png'
import newAdminCapitalImg3 from '@/assets/images/capitalnew/Screenshot 2025-12-09 163043.png'
import newAdminCapitalImg4 from '@/assets/images/capitalnew/Screenshot 2025-12-09 163048.png'

const newAdminCapitalImages = [
    newAdminCapitalImg1, newAdminCapitalImg2, newAdminCapitalImg3, newAdminCapitalImg4
]

// Import New Damietta images
import newDamiettaImg1 from '@/assets/images/damietta/Screenshot 2025-12-09 164002.png'
import newDamiettaImg2 from '@/assets/images/damietta/Screenshot 2025-12-09 164007.png'
import newDamiettaImg3 from '@/assets/images/damietta/Screenshot 2025-12-09 164012.png'
import newDamiettaImg4 from '@/assets/images/damietta/Screenshot 2025-12-09 164017.png'

const newDamiettaImages = [
    newDamiettaImg1, newDamiettaImg2, newDamiettaImg3, newDamiettaImg4
]

// Import New Administrative Capital Pumps images
import newAdminCapitalPumpsImg1 from '@/assets/images/New Administrative/Screenshot 2025-12-09 164250.png'
import newAdminCapitalPumpsImg2 from '@/assets/images/New Administrative/Screenshot 2025-12-09 164257.png'

const newAdminCapitalPumpsImages = [
    newAdminCapitalPumpsImg1, newAdminCapitalPumpsImg2
]

export default {
    components: {
        VueEasyLightbox
    },
    setup() {
        const { t, currentLang } = useLanguage()
        const route = useRoute()
        const isImageLightboxOpen = ref(false)
        const lightboxImages = ref([])
        const lightboxIndex = ref(0)
        
        const projectId = computed(() => {
            return route.query.id || 'dog-life-ai'
        })
        
        const projectData = computed(() => {
            const lang = currentLang.value
            if (projectId.value === 'dog-life-ai') {
                return {
                    name: t('portfolio.projectDetails.dogLifeAI.name'),
                    location: t('portfolio.projectDetails.dogLifeAI.location'),
                    description: t('portfolio.projectDetails.dogLifeAI.scopeOfWork'),
                    scopeOfWork: t('portfolio.projectDetails.dogLifeAI.scopeOfWork'),
                    images: []
                }
            }
            if (projectId.value === 'lmenus') {
                return {
                    name: t('portfolio.projectDetails.lmenus.name'),
                    location: t('portfolio.projectDetails.lmenus.location'),
                    description: t('portfolio.projectDetails.lmenus.scopeOfWork'),
                    scopeOfWork: t('portfolio.projectDetails.lmenus.scopeOfWork'),
                    images: []
                }
            }
            if (projectId.value === 'nutri-fit') {
                return {
                    name: t('portfolio.projectDetails.nutriFit.name'),
                    location: t('portfolio.projectDetails.nutriFit.location'),
                    description: t('portfolio.projectDetails.nutriFit.scopeOfWork'),
                    scopeOfWork: t('portfolio.projectDetails.nutriFit.scopeOfWork'),
                    images: []
                }
            }
            if (projectId.value === 'my-clinic-system') {
                return {
                    name: t('portfolio.projectDetails.myClinicSystem.name'),
                    location: t('portfolio.projectDetails.myClinicSystem.location'),
                    description: t('portfolio.projectDetails.myClinicSystem.scopeOfWork'),
                    scopeOfWork: t('portfolio.projectDetails.myClinicSystem.scopeOfWork'),
                    images: []
                }
            }
            return null
        })
        
        const projectName = computed(() => projectData.value?.name || '')
        const projectLocation = computed(() => projectData.value?.location || '')
        const projectDescription = computed(() => projectData.value?.description || '')
        const scopeOfWork = computed(() => projectData.value?.scopeOfWork || [])
        const projectImages = computed(() => projectData.value?.images || [])
        const projectClient = computed(() => projectData.value?.client || null)
        const projectCategory = computed(() => projectData.value?.category || null)
        const projectDate = computed(() => projectData.value?.date || null)
        
        const openImageLightbox = (index) => {
            lightboxImages.value = projectImages.value
            lightboxIndex.value = index
            isImageLightboxOpen.value = true
        }
        
        const closeImageLightbox = () => {
            isImageLightboxOpen.value = false
        }
        
        return {
            t,
            projectName,
            projectLocation,
            projectDescription,
            scopeOfWork,
            projectImages,
            projectClient,
            projectCategory,
            projectDate,
            isImageLightboxOpen,
            lightboxImages,
            lightboxIndex,
            openImageLightbox,
            closeImageLightbox
        }
    }
}
</script>

<style lang="scss" scoped>
.custom-scrollbar {
    scrollbar-width: thin;
    scrollbar-color: #1e40af rgba(0, 0, 0, 0.1);
}

.custom-scrollbar::-webkit-scrollbar {
    width: 8px;
}

.custom-scrollbar::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);
    border-radius: 4px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
    background: #1e40af;
    border-radius: 4px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #1e3a8a;
}

/* Dark mode scrollbar */
.dark .custom-scrollbar {
    scrollbar-color: #1e40af rgba(255, 255, 255, 0.1);
}

.dark .custom-scrollbar::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
}

.dark .custom-scrollbar::-webkit-scrollbar-thumb {
    background: #1e40af;
}

.dark .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #1e3a8a;
}
</style>
