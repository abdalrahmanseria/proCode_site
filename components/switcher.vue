<template>
    <div>
        <a href="#" @click="scrollToTop" v-show="showTopButton" id="back-to-top" class="fixed text-lg rounded-full z-10 bottom-5 right-5 size-9 text-center bg-emerald-600 text-white leading-9"><i class="mdi mdi-arrow-up"></i></a>
        <!-- Back to top -->

        <!-- Switcher -->
        <div class="fixed top-1/4 -right-2 z-3">
            <span class="relative inline-block rotate-90">
                <input type="checkbox" class="checkbox opacity-0 absolute" id="chk" @change="changeMode($event)">
                <label class="label bg-slate-900 dark:bg-white shadow dark:shadow-gray-800 cursor-pointer rounded-full flex justify-between items-center p-1 w-14 h-8" for="chk">
                    <i data-feather="moon" class="w-[18px] h-[18px] text-yellow-500"></i>
                    <i data-feather="sun" class="w-[18px] h-[18px] text-yellow-500"></i>
                    <span class="ball bg-white dark:bg-slate-900 rounded-full absolute top-[2px] left-[2px] size-7"></span>
                </label>
            </span>
        </div>
        <!-- Switcher -->
    </div>
</template>

<script setup>
import feather from 'feather-icons'
import { onMounted, onUnmounted, ref } from 'vue'

const showTopButton = ref(false)
const htmlTag = ref(null)

const handleScroll = () => {
    if (process.client) {
        if (
            document.body.scrollTop >= 50 ||
            document.documentElement.scrollTop >= 50
        ) {
            showTopButton.value = true
        } else {
            showTopButton.value = false
        }
    }
}

const changeMode = (event) => {
    if (process.client && htmlTag.value) {
        if (htmlTag.value.className.includes("dark")) {
            htmlTag.value.className = 'light'
        } else {
            htmlTag.value.className = 'dark'
        }
    }
}

const scrollToTop = () => {
    if (process.client) {
        window.scrollTo(0, 0)
    }
}

onMounted(() => {
    if (process.client) {
        htmlTag.value = document.getElementsByTagName("html")[0]
        feather.replace()
        window.addEventListener('scroll', handleScroll)
    }
})

onUnmounted(() => {
    if (process.client) {
        window.removeEventListener('scroll', handleScroll)
    }
})
</script>