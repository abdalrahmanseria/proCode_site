<template>
    <navBar @openServiceDialog="handleServiceDialog" />
    <!-- Hero Start -->

    <section class="py-36 lg:py-64 w-full table relative bg-center bg-cover hero-section"
        id="home">
        <!-- Background Slider -->
        <div class="absolute inset-0 overflow-hidden">
            <div 
                class="slider-container"
                :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
            >
                <div 
                    v-for="(image, index) in backgroundImages" 
                    :key="index"
                    class="slider-slide"
                    :style="{ backgroundImage: `url(${image})` }"
                ></div>
            </div>
        </div>
        <div class="absolute inset-0 bg-black opacity-70"></div>
        <div class="container relative">
            <div class="grid grid-cols-1 mt-12">
                <h4
                    class="text-white lg:text-5xl text-4xl lg:leading-normal leading-normal font-medium mb-7 position-relative">
                    {{ t('hero.title') }} <br>{{ t('hero.subtitle') }}
                    <br class="md:hidden">
                    <span class="inline-block min-w-[200px] typewriter-wrapper">
                        <span class="typewriter-text text-type-element">{{ displayText }}</span>
                        <span class="typewriter-cursor">|</span>
                    </span>
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
    <services ref="servicesRef" />
    <portfolio />
    <client />
    <blog />
    <suppliers />
    <getintouch />
    <fooTer />


</template>

<script setup>
import { ref, onMounted, watch, onBeforeUnmount } from 'vue'
import navBar from '@/components/navbar/navbar-light.vue';
import about from '@/components/about.vue';
import services from '@/components/services.vue';
import portfolio from '@/components/portfolio/portfolio.vue';
import client from '@/components/client.vue';
import blog from '@/components/blog/blog.vue';
import suppliers from '@/components/suppliers.vue';
import getintouch from '@/components/getInTouch.vue'
import fooTer from '@/components/footer.vue';
import { useLanguage } from '~/composables/useLanguage'

// Import background images
import heroBg from '@/assets/images/bg/hero-bg.jpg'
import bg1 from '@/assets/images/bg/1.jpg'
import bg2 from '@/assets/images/bg/2.jpg'
import bg3 from '@/assets/images/bg/3.jpg'

const { t, currentLang } = useLanguage()
const displayText = ref('')
let currentIndex = 0
let currentWordIndex = 0
let isDeleting = false
let typewriterTimeout = null

// Background slider
const currentSlide = ref(0)
const backgroundImages = [heroBg, bg1, bg2, bg3]
let sliderInterval = null

// Services reference
const servicesRef = ref(null)

const handleServiceDialog = (serviceKey) => {
    if (servicesRef.value && servicesRef.value.openServiceDialog) {
        servicesRef.value.openServiceDialog(serviceKey)
    }
}

const stopTypewriter = () => {
  if (typewriterTimeout) {
    clearTimeout(typewriterTimeout)
    typewriterTimeout = null
  }
}

const startTypewriter = () => {
  // إيقاف أي typewriter effect قديم
  stopTypewriter()
  
  // إعادة تعيين المتغيرات
  currentIndex = 0
  currentWordIndex = 0
  isDeleting = false
  displayText.value = ''
  
  const words = t("hero.typewriterWords")
  
  const type = () => {
    const currentWord = words[currentWordIndex]
    
    if (isDeleting) {
      displayText.value = currentWord.substring(0, currentIndex - 1)
      currentIndex--
      
      if (currentIndex === 0) {
        isDeleting = false
        currentWordIndex = (currentWordIndex + 1) % words.length
        typewriterTimeout = setTimeout(type, 500)
        return
      }
    } else {
      displayText.value = currentWord.substring(0, currentIndex + 1)
      currentIndex++
      
      if (currentIndex === currentWord.length) {
        isDeleting = true
        typewriterTimeout = setTimeout(type, 2000)
        return
      }
    }
    
    typewriterTimeout = setTimeout(type, isDeleting ? 50 : 100)
  }
  
  typewriterTimeout = setTimeout(type, 300)
}

const startSlider = () => {
  sliderInterval = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % backgroundImages.length
  }, 3000) // تغيير الصورة كل 3 ثواني
}

const stopSlider = () => {
  if (sliderInterval) {
    clearInterval(sliderInterval)
    sliderInterval = null
  }
}

onMounted(() => {
  if (process.client) {
    setTimeout(() => {
      startTypewriter()
      startSlider()
    }, 500)
  }
})

watch(currentLang, () => {
  startTypewriter()
})

onBeforeUnmount(() => {
  stopTypewriter()
  stopSlider()
})
</script>

<style scoped>
/* Hero section */
.hero-section {
  position: relative;
}

/* Horizontal slider */
.slider-container {
  display: flex;
  width: 100%;
  height: 100%;
  transition: transform 1s ease-in-out;
}

.slider-slide {
  flex: 0 0 100%; /* Fix: each slide takes 100% of the viewport and doesn't shrink */
  height: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

/* Custom typewriter effect */
.typewriter-wrapper {
  position: relative;
}

.typewriter-text {
  display: inline-block;
  font-feature-settings: 'liga' 1, 'calt' 1;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  position: relative;
}

/* Yellow underline effect */
.typewriter-text::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #fbbf24 0%, #f59e0b 100%);
  border-radius: 2px;
}

.typewriter-cursor {
  display: inline-block;
  margin-left: 2px;
  animation: blink 0.7s infinite;
  font-weight: normal;
}

@keyframes blink {
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
}
</style>
