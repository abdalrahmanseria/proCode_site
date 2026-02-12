<template>
    <!-- Start -->
    <section class="relative md:py-24 py-16" id="features">
        <div class="container lg mx-auto">
            <div class="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 pb-8 items-center">
                <div>
                    <h6 class="text-blue-800 text-base font-medium uppercase mb-2">{{ t('services.whatWeDo') }}</h6>
                    <h3 class="mb-4 md:text-2xl text-xl font-semibold dark:text-white md:mb-0">{{ t('services.title') }}
                    </h3>
                </div>

                <div>
                    <p class="text-slate-400 dark:text-slate-300 max-w-xl">{{ t('services.description') }}</p>
                </div>
            </div><!--end grid-->

            <div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
                <div v-for="data in datas" :key="data.id" :class="data.class">
                    <div
                        class="size-20 bg-blue-800/5 text-blue-800 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm">
                        <i :class="data.icon"></i>
                    </div>

                    <div class="content mt-7">
                        <a href="javascript:void(0)" @click="openServiceDialog(data.id)"
                            class="text-lg hover:text-blue-800 dark:text-white dark:hover:text-blue-800 transition-all duration-500 ease-in-out font-medium">{{
                                data.name }}</a>
                        <p class="text-slate-400 mt-3">{{ data.desc }}</p>

                        <div class="mt-5">
                            <a href="javascript:void(0)" @click="openServiceDialog(data.id)"
                                class="btn btn-link hover:text-blue-800 dark:hover:text-blue-800 after:bg-blue-800 dark:text-white transition duration-500 cursor-pointer">{{
                                    t('services.readMore') }} <i class="uil uil-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div><!--end grid-->
        </div><!--end container-->


        <div class="container md:mt-24 mt-16">
            <div class="grid grid-cols-1 pb-8 text-center">
                <h6 class="text-blue-800 text-base font-medium uppercase mb-2">{{ t('services.workProcess') }}</h6>
                <h3 class="mb-4 md:text-2xl text-xl font-medium dark:text-white">{{ t('services.digitalSystem') }}
                </h3>

                <p class="text-slate-400 dark:text-slate-300 max-w-xl mx-auto">{{ t('services.digitalSystemDesc') }}</p>
            </div><!--end grid-->

            <div class="grid grid-cols-1 mt-8">
                <div v-for="item in items" :key="item.id" class="timeline relative">
                    <div class="timeline-item">
                        <div v-if="item.id === 'aiAnalysis'" class="grid sm:grid-cols-2">
                            <div>
                                <div class="duration date-label-left ltr:float-right rtl:float-left md:me-7 relative">
                                    <img :src="item.image" class="size-64" alt="">
                                </div>
                            </div><!--end col-->
                            <div class="mt-4 md:mt-0">
                                <div
                                    class="event event-description-right ltr:float-left rtl:float-right ltr:text-left rtl:text-right md:ms-7">
                                    <h5 class="text-lg dark:text-white mb-1 font-medium">{{ item.name }}</h5>
                                    <p class="timeline-subtitle mt-3 mb-0 text-slate-400">{{ item.desc }}</p>
                                </div>
                            </div><!--end col-->
                        </div><!--end grid-->
                    </div><!--end timeline item-->

                    <div class="timeline-item pt-4">
                        <div v-if="item.id === 'cloudDashboards'" class="grid sm:grid-cols-2">
                            <div class="md:order-1 order-2">
                                <div
                                    class="event event-description-left ltr:float-left rtl:float-right ltr:text-right rtl:text-left md:me-7">
                                    <h5 class="text-lg dark:text-white mb-1 font-medium">{{ item.name }}</h5>
                                    <p class="timeline-subtitle mt-3 mb-0 text-slate-400">{{ item.desc }}</p>
                                </div>
                            </div><!--end col-->
                            <div class="md:order-2 order-1">
                                <div class="duration duration-right md:ms-7 relative">
                                    <img :src="item.image" class="size-64" alt="">
                                </div>
                            </div><!--end col-->
                        </div><!--end grid-->
                    </div><!--end timeline item-->

                    <div class="timeline-item  pt-4">
                        <div v-if="item.id === 'paymentGateways'" class="grid sm:grid-cols-2">
                            <div class="mt-4 mt-sm-0">
                                <div class="duration date-label-left ltr:float-right rtl:float-left md:me-7 relative">
                                    <img :src="item.image" class="size-64" alt="">
                                </div>
                            </div><!--end col-->
                            <div class="mt-4 mt-sm-0">
                                <div
                                    class="event event-description-right ltr:float-left rtl:float-right ltr:text-left rtl:text-right md:ms-7">
                                    <h5 class="text-lg dark:text-white mb-1 font-medium">{{ item.name }}</h5>
                                    <p class="timeline-subtitle mt-3 mb-0 text-slate-400">{{ item.desc }}</p>
                                </div>
                            </div><!--end col-->
                        </div><!--end grid-->
                    </div><!--end timeline item-->
                </div>
            </div>
        </div><!--end container-->
    </section><!--end section-->
    <!-- End -->

    <!-- Service Dialog -->
    <div :class="isDialogOpen ? 'fixed' : 'hidden'"
        class="bg-black/[0.9] top-0 left-0 bottom-0 w-[100%] h-[100%] z-[9999] overflow-y-auto">
        <div class="min-h-[100%] flex items-center justify-center p-4">
            <div class="relative bg-white dark:bg-slate-900 rounded-lg shadow-2xl max-w-6xl w-full my-8">
                <!-- Close Button -->
                <button @click="closeServiceDialog"
                    class="absolute top-4 end-4 text-slate-400 hover:text-slate-900 dark:hover:text-white text-2xl z-10">
                    <i class="mdi mdi-close"></i>
                </button>

                <!-- Dialog Content -->
                <div class="p-6 md:p-8">
                    <h3 class="text-2xl md:text-3xl font-semibold dark:text-white mb-4">{{ selectedService?.name }}</h3>

                    <div class="prose dark:prose-invert max-w-none mb-6">
                        <p class="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">{{
                            selectedService?.fullDescription }}</p>
                    </div>

                    <!-- Images Gallery -->
                    <div v-if="selectedService?.images && selectedService.images.length > 0"
                        class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
                        <div v-for="(img, index) in selectedService.images" :key="index"
                            class="relative group cursor-pointer overflow-hidden rounded-lg">
                            <img :src="img" :alt="`${selectedService?.name} - Image ${index + 1}`"
                                class="w-full h-48 object-cover group-hover:scale-110 transition duration-300"
                                @click="openImageLightbox(index)">
                            <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition duration-300">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Image Lightbox -->
    <vue-easy-lightbox :visible="isImageLightboxOpen" :imgs="lightboxImages" :index="lightboxIndex"
        @hide="closeImageLightbox"></vue-easy-lightbox>
</template>

<script setup>
import { useLanguage } from '~/composables/useLanguage'
import image from '@/assets/images/svg/design-thinking.svg';
import image2 from '@/assets/images/svg/coding.svg';
import image3 from '@/assets/images/svg/office-desk.svg';
import { computed, ref } from 'vue'
import VueEasyLightbox from 'vue-easy-lightbox'

// Import electrical service images
// import elecImg1 from '@/assets/images/elec service/Screenshot 2025-12-09 150607.png'
// import elecImg2 from '@/assets/images/elec service/Screenshot 2025-12-09 150622.png'
// import elecImg3 from '@/assets/images/elec service/Screenshot 2025-12-09 150632.png'
// import elecImg4 from '@/assets/images/elec service/Screenshot 2025-12-09 150637.png'
// import elecImg5 from '@/assets/images/elec service/Screenshot 2025-12-09 150644.png'
// import elecImg6 from '@/assets/images/elec service/Screenshot 2025-12-09 150649.png'
// import elecImg7 from '@/assets/images/elec service/Screenshot 2025-12-09 150653.png'
// import elecImg8 from '@/assets/images/elec service/Screenshot 2025-12-09 150702.png'
// import elecImg9 from '@/assets/images/elec service/Screenshot 2025-12-09 150707.png'
// import elecImg10 from '@/assets/images/elec service/Screenshot 2025-12-09 150713.png'
// import elecImg11 from '@/assets/images/elec service/Screenshot 2025-12-09 150719.png'
// import elecImg12 from '@/assets/images/elec service/Screenshot 2025-12-09 150724.png'
// import elecImg13 from '@/assets/images/elec service/Screenshot 2025-12-09 150729.png'
// import elecImg14 from '@/assets/images/elec service/Screenshot 2025-12-09 150738.png'
// import elecImg15 from '@/assets/images/elec service/Screenshot 2025-12-09 150745.png'
// import elecImg16 from '@/assets/images/elec service/Screenshot 2025-12-09 150752.png'
// import elecImg17 from '@/assets/images/elec service/Screenshot 2025-12-09 150811.png'
// import elecImg18 from '@/assets/images/elec service/Screenshot 2025-12-09 150822.png'

// const elecImages = [
//     elecImg1, elecImg2, elecImg3, elecImg4, elecImg5, elecImg6,
//     elecImg7, elecImg8, elecImg9, elecImg10, elecImg11, elecImg12,
//     elecImg13, elecImg14, elecImg15, elecImg16, elecImg17, elecImg18
// ]

// Import HVAC service images
// import hvacImg1 from '@/assets/images/HVAC/Screenshot 2025-12-09 152704.png'
// import hvacImg2 from '@/assets/images/HVAC/Screenshot 2025-12-09 152714.png'
// import hvacImg3 from '@/assets/images/HVAC/Screenshot 2025-12-09 152725.png'
// import hvacImg4 from '@/assets/images/HVAC/Screenshot 2025-12-09 152734.png'
// import hvacImg5 from '@/assets/images/HVAC/Screenshot 2025-12-09 153827.png'
// import hvacImg6 from '@/assets/images/HVAC/Screenshot 2025-12-09 153833.png'
// import hvacImg7 from '@/assets/images/HVAC/Screenshot 2025-12-09 153838.png'
// import hvacImg8 from '@/assets/images/HVAC/Screenshot 2025-12-09 153843.png'
// import hvacImg9 from '@/assets/images/HVAC/Screenshot 2025-12-09 153851.png'
// import hvacImg10 from '@/assets/images/HVAC/Screenshot 2025-12-09 153856.png'

// const hvacImages = [
//     hvacImg1, hvacImg2, hvacImg3, hvacImg4, hvacImg5, hvacImg6,
//     hvacImg7, hvacImg8, hvacImg9, hvacImg10
// ]

// Import Infrastructure service images
// import infraImg1 from '@/assets/images/infraStructure/Screenshot 2025-12-09 154353.png'
// import infraImg2 from '@/assets/images/infraStructure/Screenshot 2025-12-09 154358.png'
// import infraImg3 from '@/assets/images/infraStructure/Screenshot 2025-12-09 154401.png'
// import infraImg4 from '@/assets/images/infraStructure/Screenshot 2025-12-09 154405.png'
// import infraImg5 from '@/assets/images/infraStructure/Screenshot 2025-12-09 154410.png'
// import infraImg6 from '@/assets/images/infraStructure/Screenshot 2025-12-09 154415.png'
// import infraImg7 from '@/assets/images/infraStructure/Screenshot 2025-12-09 154421.png'
// import infraImg8 from '@/assets/images/infraStructure/Screenshot 2025-12-09 154426.png'

// const infraImages = [
//     infraImg1, infraImg2, infraImg3, infraImg4, infraImg5, infraImg6,
//     infraImg7, infraImg8
// ]

const { t, currentLang } = useLanguage()
const isDialogOpen = ref(false)
const selectedServiceId = ref(null)
const isImageLightboxOpen = ref(false)
const lightboxImages = ref([])
const lightboxIndex = ref(0)

const selectedService = computed(() => {
    if (!selectedServiceId.value) return null
    const lang = currentLang.value
    if (selectedServiceId.value === 'aiLLM') {
        return {
            id: 'aiLLM',
            name: t('services.aiLLMIntegration.name'),
            fullDescription: t('services.aiLLMIntegration.fullDescription'),
            images: []
        }
    }
    if (selectedServiceId.value === 'digitalTransformation') {
        return {
            id: 'digitalTransformation',
            name: t('services.digitalTransformation.name'),
            fullDescription: t('services.digitalTransformation.fullDescription'),
            images: []
        }
    }
    if (selectedServiceId.value === 'appDevelopment') {
        return {
            id: 'appDevelopment',
            name: t('services.customAppDevelopment.name'),
            fullDescription: t('services.customAppDevelopment.fullDescription'),
            images: []
        }
    }
    if (selectedServiceId.value === 'healthcare') {
        return {
            id: 'healthcare',
            name: t('services.healthcareManagement.name'),
            fullDescription: t('services.healthcareManagement.fullDescription'),
            images: []
        }
    }
    if (selectedServiceId.value === 'aiCoaching') {
        return {
            id: 'aiCoaching',
            name: t('services.aiCoachingPlatforms.name'),
            fullDescription: t('services.aiCoachingPlatforms.fullDescription'),
            images: []
        }
    }
    if (selectedServiceId.value === 'ecommerce') {
        return {
            id: 'ecommerce',
            name: t('services.ecommercePayments.name'),
            fullDescription: t('services.ecommercePayments.fullDescription'),
            images: []
        }
    }
    return null
})

const openServiceDialog = (serviceId) => {
    // Mapping for consistent IDs
    let mappedId = serviceId
    if (serviceId === 'aiLLM' || serviceId === 'digitalTransformation' || serviceId === 'appDevelopment' ||
        serviceId === 'healthcare' || serviceId === 'aiCoaching' || serviceId === 'ecommerce') {
        selectedServiceId.value = mappedId
        isDialogOpen.value = true
        if (process.client) {
            document.body.style.overflow = 'hidden'
        }
    }
}

const closeServiceDialog = () => {
    isDialogOpen.value = false
    selectedServiceId.value = null
    if (process.client) {
        document.body.style.overflow = ''
    }
}

const openImageLightbox = (index) => {
    if (selectedService.value?.images) {
        lightboxImages.value = selectedService.value.images
        lightboxIndex.value = index
        isImageLightboxOpen.value = true
    }
}

const closeImageLightbox = () => {
    isImageLightboxOpen.value = false
}

const datas = computed(() => {
    const lang = currentLang.value
    return [
        {
            id: 'aiLLM',
            icon: 'uil uil-brain',
            name: t('services.aiLLMIntegration.name'),
            desc: t('services.aiLLMIntegration.desc'),
            class: 'features p-6 hover:shadow-xl hover:shadow-slate-100 dark:hover:shadow-slate-800 transition duration-500 rounded-3xl mt-8'
        },
        {
            id: 'digitalTransformation',
            icon: 'uil uil-cloud-computing',
            name: t('services.digitalTransformation.name'),
            desc: t('services.digitalTransformation.desc'),
            class: 'features p-6 shadow-xl shadow-slate-100 dark:shadow-slate-800 transition duration-500 rounded-3xl mt-8'
        },
        {
            id: 'appDevelopment',
            icon: 'uil uil-mobile-android',
            name: t('services.customAppDevelopment.name'),
            desc: t('services.customAppDevelopment.desc'),
            class: 'features p-6 hover:shadow-xl hover:shadow-slate-100 dark:hover:shadow-slate-800 transition duration-500 rounded-3xl mt-8'
        },
        {
            id: 'healthcare',
            icon: 'uil uil-hospital',
            name: t('services.healthcareManagement.name'),
            desc: t('services.healthcareManagement.desc'),
            class: 'features p-6 shadow-xl shadow-slate-100 dark:shadow-slate-800 transition duration-500 rounded-3xl mt-8'
        },
        {
            id: 'aiCoaching',
            icon: 'uil uil-dumbbell',
            name: t('services.aiCoachingPlatforms.name'),
            desc: t('services.aiCoachingPlatforms.desc'),
            class: 'features p-6 hover:shadow-xl hover:shadow-slate-100 dark:hover:shadow-slate-800 transition duration-500 rounded-3xl mt-8'
        },
        {
            id: 'ecommerce',
            icon: 'uil uil-shopping-cart',
            name: t('services.ecommercePayments.name'),
            desc: t('services.ecommercePayments.desc'),
            class: 'features p-6 shadow-xl shadow-slate-100 dark:shadow-slate-800 transition duration-500 rounded-3xl mt-8'
        },
    ]
})

const items = computed(() => {
    const lang = currentLang.value
    return [
        {
            id: 'aiAnalysis',
            image: image,
            name: t('services.aiAnalysis.name'),
            desc: t('services.aiAnalysis.desc')
        },
        {
            id: 'cloudDashboards',
            image: image2,
            name: t('services.cloudDashboards.name'),
            desc: t('services.cloudDashboards.desc')
        },
        {
            id: 'paymentGateways',
            image: image3,
            name: t('services.paymentGateways.name'),
            desc: t('services.paymentGateways.desc')
        }
    ]
})

defineExpose({
    openServiceDialog
})
</script>

<style lang="scss" scoped></style>