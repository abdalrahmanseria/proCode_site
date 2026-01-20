<template>
        <nav class="navbar" id="navbar" @scroll="handleScroll">
            <div class="container-fluid px-4 md:px-10 flex lg_992:flex-nowrap flex-wrap items-center justify-between">
                <NuxtLink class="navbar-brand flex items-center flex-shrink-0" to="/">
                    <img :src="logoImg" class="h-24 md:h-28 dark:hidden logo-image" alt="ProCode Solutions">
                    <img :src="logoImg" class="h-24 md:h-28 hidden dark:inline-block logo-image" alt="ProCode Solutions">
                </NuxtLink>

                <div class="nav-icons flex items-center lg_992:order-2">
                    <!-- Navbar Button -->
                    <ul class="list-none menu-social mb-0 space-x-1">
                        <li class="inline">
                            <a href="#" target="_blank">
                                <span class="login-btn-primary"><span class="btn btn-sm btn-icon rounded-full bg-blue-800 hover:bg-blue-900 border-blue-800 hover:border-blue-900 text-white"><i class="uil uil-facebook-f"></i></span></span>
                                <span class="login-btn-light"><span class="btn btn-sm btn-icon rounded-full bg-gray-50 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-gray-700 hover:border-gray-100 dark:border-gray-700 dark:hover:border-gray-700"><i class="uil uil-facebook-f"></i></span></span>
                            </a>
                        </li>
                        <li class="inline">
                            <a :href="`https://wa.me/${whatsappNumber}`" target="_blank">
                                <span class="login-btn-primary"><span class="btn btn-sm btn-icon rounded-full bg-blue-800 hover:bg-blue-900 border-blue-800 hover:border-blue-900 text-white"><i class="uil uil-whatsapp"></i></span></span>
                                <span class="login-btn-light"><span class="btn btn-sm btn-icon rounded-full bg-gray-50 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-gray-700 hover:border-gray-100 dark:border-gray-700 dark:hover:border-gray-700"><i class="uil uil-whatsapp"></i></span></span>
                            </a>
                        </li>
                        <li class="inline">
                            <a href="#" target="_blank">
                                <span class="login-btn-primary"><span class="btn btn-sm btn-icon rounded-full bg-blue-800 hover:bg-blue-900 border-blue-800 hover:border-blue-900 text-white"><i class="uil uil-linkedin"></i></span></span>
                                <span class="login-btn-light"><span class="btn btn-sm btn-icon rounded-full bg-gray-50 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-gray-700 hover:border-gray-100 dark:border-gray-700 dark:hover:border-gray-700"><i class="uil uil-linkedin"></i></span></span>
                            </a>
                        </li>
                    </ul>
                    <!-- Navbar Collapse Manu Button -->
                    <button data-collapse="menu-collapse" type="button" class="collapse-btn inline-flex items-center ms-3 text-dark dark:text-white lg_992:hidden" aria-controls="menu-collapse" aria-expanded="false"  @click="handler">
                        <span class="sr-only">Navigation Menu</span>
                        <i class="mdi mdi-menu mdi-24px"></i>
                    </button>
                </div>

                <div class="navigation lg_992:order-1 lg_992:flex flex-grow justify-center" id="menu-collapse" :class="{hidden : !toggle}">
                    <ul class="navbar-nav nav-light items-center" id="navbar-navlist" :class="{'en-mode': currentLang === 'en'}">
                        <li class="nav-item active home dropdown-item" @mouseenter="showDropdown = true" @mouseleave="showDropdown = false">
                            <a class="nav-link" href="#home" @click="closeMobileMenu">{{ t('nav.home') }} <i class="mdi mdi-chevron-down"></i></a>
                            <ul class="dropdown-menu hidden lg_992:block" :class="{ 'show': showDropdown }">
                                <li><a @click.prevent="scrollToSection('about')" class="dropdown-link cursor-pointer">{{ t('nav.companyMenu.overview') }}</a></li>
                                <li><a @click.prevent="scrollToSection('about-mission')" class="dropdown-link cursor-pointer">{{ t('nav.companyMenu.mission') }}</a></li>
                                <li><a @click.prevent="scrollToSection('about-vision')" class="dropdown-link cursor-pointer">{{ t('nav.companyMenu.vision') }}</a></li>
                                <li><a @click.prevent="scrollToSection('about-chairman')" class="dropdown-link cursor-pointer">{{ t('nav.companyMenu.chairmanWord') }}</a></li>
                            </ul>
                        </li>
                        <li class="nav-item about">
                            <a class="nav-link" href="#about" @click="closeMobileMenu">{{ t('nav.about') }}</a>
                        </li>
                        <li class="nav-item features dropdown-item" @mouseenter="showServicesDropdown = true" @mouseleave="showServicesDropdown = false">
                            <a class="nav-link" href="#features" @click="closeMobileMenu">{{ t('nav.services') }} <i class="mdi mdi-chevron-down"></i></a>
                            <ul class="dropdown-menu hidden lg_992:block" :class="{ 'show': showServicesDropdown }">
                                <li><a @click.prevent="openServiceDialog('aiLLM')" class="dropdown-link cursor-pointer">{{ t('nav.servicesMenu.aiLLM') }}</a></li>
                                <li><a @click.prevent="openServiceDialog('digitalTransformation')" class="dropdown-link cursor-pointer">{{ t('nav.servicesMenu.digitalTransformation') }}</a></li>
                                <li><a @click.prevent="openServiceDialog('appDevelopment')" class="dropdown-link cursor-pointer">{{ t('nav.servicesMenu.appDevelopment') }}</a></li>
                                <li><a @click.prevent="openServiceDialog('healthcare')" class="dropdown-link cursor-pointer">{{ t('nav.servicesMenu.healthcare') }}</a></li>
                                <li><a @click.prevent="openServiceDialog('aiCoaching')" class="dropdown-link cursor-pointer">{{ t('nav.servicesMenu.aiCoaching') }}</a></li>
                                <li><a @click.prevent="openServiceDialog('ecommerce')" class="dropdown-link cursor-pointer">{{ t('nav.servicesMenu.ecommerce') }}</a></li>
                            </ul>
                        </li>
                        <li class="nav-item portfolio">
                            <a class="nav-link" href="#portfolio" @click="closeMobileMenu">{{ t('nav.portfolio') }}</a>
                        </li>
                        <li class="nav-item clients">
                            <a class="nav-link" href="#clients" @click="closeMobileMenu">{{ t('nav.review') }}</a>
                        </li>
                        <li class="nav-item blog">
                            <a class="nav-link" href="#blog" @click="closeMobileMenu">{{ t('nav.blog') }}</a>
                        </li>
                        <!-- <li class="nav-item suppliers">
                            <a class="nav-link" href="#suppliers" @click="closeMobileMenu">{{ t('nav.suppliers') }}</a>
                        </li> -->
                        <li class="nav-item contact">
                            <a class="nav-link" href="#contact" @click="closeMobileMenu">{{ t('nav.contact') }}</a>
                        </li>
                        <li class="nav-item">
                            <a href="javascript:void(0)" @click.prevent="toggleLanguage(); closeMobileMenu()" class="nav-link cursor-pointer">
                                {{ languageButtonText }}
                            </a>
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
import logoImg from '@/assets/images/proCodeLogo.png'

const { t, currentLang, isRTL, toggleLanguage } = useLanguage()
const toggle = ref(false)
const sections = ref([])
const navLi = ref([])
const current = ref("")
const sectionTop = ref(null)
const whatsappNumber = '966573092631'
const showDropdown = ref(false)
const showServicesDropdown = ref(false)

const languageButtonText = computed(() => {
    return isRTL.value ? 'English' : 'عربي'
})

const scrollToSection = (sectionId) => {
    if (process.client) {
        showDropdown.value = false
        
        setTimeout(() => {
            const element = document.getElementById(sectionId)
            if (element) {
                const navbarHeight = 120
                const elementPosition = element.getBoundingClientRect().top
                const offsetPosition = elementPosition + window.pageYOffset - navbarHeight

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                })

                // Add highlight animation after scroll completes
                setTimeout(() => {
                    element.classList.add('highlight-section')
                    
                    // Remove after animation
                    setTimeout(() => {
                        element.classList.remove('highlight-section')
                    }, 3000)
                }, 800)
            }
        }, 100)
    }
}

const emit = defineEmits(['openServiceDialog'])

const openServiceDialog = (serviceKey) => {
    showServicesDropdown.value = false
    emit('openServiceDialog', serviceKey)
}

onMounted(() => {
    if (process.client) {
        sections.value = document.querySelectorAll("section")
        navLi.value = document.querySelectorAll("nav .container-fluid .navigation ul li")
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

const closeMobileMenu = () => {
    toggle.value = false
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
        document.querySelectorAll("nav .container-fluid .navigation ul li").forEach((li) => {
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
.navbar-nav {
    display: flex;
    flex-wrap: nowrap;
}

.nav-item {
    white-space: nowrap;
}

@media (max-width: 991px) {
    .nav-link {
        padding-top: 10px !important;
        padding-bottom: 10px !important;
        padding-left: 0 !important;
        padding-right: 0 !important;
        display: block;
        width: 100%;
        text-align: center;
        border-bottom: 1px solid rgba(0,0,0,0.05);
    }
    
    .nav-item.active .nav-link {
        color: #1e40af !important;
        background-color: rgba(30, 64, 175, 0.05);
        font-weight: 600;
    }

    .nav-link:active {
        background-color: rgba(30, 64, 175, 0.1);
    }
}

@media (min-width: 992px) {
    .nav-link {
        padding-left: 12px !important;
        padding-right: 12px !important;
        font-size: 17px !important;
        font-weight: 500 !important;
    }
}

.dropdown-item {
    position: relative;
}

.dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    background: white;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    border-radius: 0.375rem;
    min-width: 200px;
    padding: 0.5rem 0;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-10px);
    transition: all 0.3s ease;
    z-index: 1000;
}

.dropdown-menu.show {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}

.dropdown-link {
    display: block;
    padding: 0.5rem 1rem;
    color: #374151;
    text-decoration: none;
    transition: all 0.2s;
}

.dropdown-link:hover {
    background: #1e40af;
    color: white;
}

.dark .dropdown-menu {
    background: #1f2937;
}

.dark .dropdown-link {
    color: #d1d5db;
}

.dark .dropdown-link:hover {
    background: #1e40af;
    color: white;
}

.logo-image {
    border-radius: 12px;
    padding: 8px;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    transition: all 0.3s ease;
    object-fit: contain;
}

.logo-image:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    background: rgba(255, 255, 255, 0.08);
}

.dark .logo-image {
    background: rgba(255, 255, 255, 0.08);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2);
}

.dark .logo-image:hover {
    background: rgba(255, 255, 255, 0.12);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2);
}
</style>