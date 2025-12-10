<template>
    <nav class="navbar" id="navbar" @scroll="handleScroll">
            <div class="container flex flex-wrap items-center justify-end">
                <NuxtLink class="navbar-brand flex items-center" to="/">
                    <img src="assets/images/logo (2).png" class="h-20 dark:hidden" alt="ELSHARQUE">
                    <img src="assets/images/logo (2).png" class="h-20 hidden dark:inline-block" alt="ELSHARQUE">
                </NuxtLink>

                <div class="nav-icons flex items-center lg_992:order-2 ms-auto">
                    <!-- Navbar Button -->
                    <ul class="list-none menu-social mb-0">
                        <li class="inline">
                            <a href="" class="btn btn-sm btn-icon rounded-full bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white"><i class="uil uil-github"></i></a>
                        </li>
                        <li class="inline">
                            <a href="" class="btn btn-sm btn-icon rounded-full bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white"><i class="uil uil-twitter"></i></a>
                        </li>
                        <li class="inline">
                            <a href="">
                                <a href="" class="btn btn-sm btn-icon rounded-full bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white"><i class="uil uil-instagram"></i></a>
                            </a>
                        </li>
                    </ul>
                    <!-- Navbar Collapse Manu Button -->
                    <button data-collapse="menu-collapse" type="button" class="collapse-btn inline-flex items-center ms-3 text-dark dark:text-white lg_992:hidden" aria-controls="menu-collapse" aria-expanded="false" @click="handler">
                        <span class="sr-only" >Navigation Menu</span>
                        <i class="mdi mdi-menu mdi-24px"></i>
                    </button>
                </div>

                <!-- Navbar Manu -->
                <div class="navigation lg_992:order-1 lg_992:flex" id="menu-collapse" :class="{hidden : !toggle}">
                    <ul class="navbar-nav" id="navbar-navlist">
                        <li class="nav-item active home">
                            <a class="nav-link active" href="#home">{{ t('nav.home') }}</a>
                        </li>
                        <li class="nav-item about">
                            <a class="nav-link" href="#about">{{ t('nav.about') }}</a>
                        </li>
                        <li class="nav-item features">
                            <a class="nav-link" href="#features">{{ t('nav.services') }}</a>
                        </li>
                        <li class="nav-item portfolio">
                            <a class="nav-link" href="#portfolio">{{ t('nav.portfolio') }}</a>
                        </li>
                        <li class="nav-item testi">
                            <a class="nav-link" href="#testi">{{ t('nav.review') }}</a>
                        </li>
                        <li class="nav-item pricing">
                            <a class="nav-link" href="#pricing">{{ t('nav.pricing') }}</a>
                        </li>
                        <li class="nav-item blog">
                            <a class="nav-link" href="#blog">{{ t('nav.blog') }}</a>
                        </li>
                        <li class="nav-item contact">
                            <a class="nav-link" href="#contact">{{ t('nav.contact') }}</a>
                        </li>                       
                    </ul>
                </div>
            </div>
        </nav>
        <!-- Navbar End -->
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useLanguage } from '~/composables/useLanguage'

const { t } = useLanguage()
const toggle = ref(false)
const sections = ref([])
const navLi = ref([])
const current = ref("")
const sectionTop = ref(null)

onMounted(() => {
    if (process.client) {
        sections.value = document.querySelectorAll("section")
        navLi.value = document.querySelectorAll("nav .container .navigation ul li")
        window.addEventListener('scroll', handleScroll)
        window.addEventListener('scroll', onscroll)
    }
})

onUnmounted(() => {
    if (process.client) {
        window.removeEventListener('scroll', handleScroll)
        window.removeEventListener('scroll', onscroll)
    }
})

const handler = () => {
    toggle.value = !toggle.value
}

const handleScroll = (event) => {
    if (process.client) {
        const navbar = document.getElementById("navbar")
        if (
            document.body.scrollTop >= 50 ||
            document.documentElement.scrollTop >= 50
        ) {
            navbar.classList.add("is-sticky")
        } else {
            navbar.classList.remove("is-sticky")
        }
    }
}

const onscroll = () => {
    if (process.client) {
        document.querySelectorAll("section").forEach((section) => {
            sectionTop.value = section.offsetTop
            if (pageYOffset >= sectionTop.value - 60) {
                current.value = section.getAttribute("id")
            }
        })
        document.querySelectorAll("nav .container .navigation ul li").forEach((li) => {
            if (li.classList.contains(current.value)) {
                li.classList.add("active")
            } else {
                li.classList.remove("active")
            }
        })
    }
}
</script>

<style lang="scss" scoped>

</style>