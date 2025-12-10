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
                    <span class="inline-block min-w-[200px]">
                        <span class="typewriter-text">{{ displayText }}</span>
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
    <services />
    <portfolio />
    <client />
    <team />
    <blog />
    <getintouch />
    <fooTer />


</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import navBar from '@/components/navbar/navbar-light.vue';
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
const displayText = ref('')
let currentIndex = 0
let currentWordIndex = 0
let isDeleting = false
let typewriterInterval = null

const startTypewriter = () => {
  if (typewriterInterval) {
    clearInterval(typewriterInterval)
  }
  
  const words = t("hero.typewriterWords")
  
  const type = () => {
    const currentWord = words[currentWordIndex]
    
    if (isDeleting) {
      displayText.value = currentWord.substring(0, currentIndex - 1)
      currentIndex--
      
      if (currentIndex === 0) {
        isDeleting = false
        currentWordIndex = (currentWordIndex + 1) % words.length
        setTimeout(type, 500)
        return
      }
    } else {
      displayText.value = currentWord.substring(0, currentIndex + 1)
      currentIndex++
      
      if (currentIndex === currentWord.length) {
        isDeleting = true
        setTimeout(type, 2000)
        return
      }
    }
    
    setTimeout(type, isDeleting ? 50 : 100)
  }
  
  type()
}

onMounted(() => {
  if (process.client) {
    setTimeout(() => {
      startTypewriter()
    }, 500)
  }
})

watch(currentLang, () => {
  currentIndex = 0
  currentWordIndex = 0
  isDeleting = false
  displayText.value = ''
  startTypewriter()
})
</script>

<style scoped>
/* Custom typewriter effect */
.typewriter-text {
  display: inline-block;
  font-feature-settings: 'liga' 1, 'calt' 1;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
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
