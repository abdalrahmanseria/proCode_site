<template>
    <div>
        <section class="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800" id="clients">
            <div class="container">
                <div class="grid grid-cols-1 pb-8 text-center">
                    <h6 class="text-emerald-600 text-base font-medium uppercase mb-2">{{ t('clients.title') }}</h6>
                    <h3 class="mb-4 md:text-2xl text-xl font-medium dark:text-white">{{ t('clients.subtitle') }}</h3>
                    <p class="text-slate-400 dark:text-slate-300 max-w-xl mx-auto">{{ t('clients.description') }}</p>
                </div><!--end grid-->
                
                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-8">
                    <div v-for="(client, index) in clients" :key="index" 
                        class="flex items-center justify-center p-4 bg-white dark:bg-slate-900 rounded-lg shadow shadow-slate-200 dark:shadow-slate-700 hover:shadow-lg transition-shadow duration-300">
                        <img :src="client.image" :alt="client.name" 
                            class="max-w-full h-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
                    </div>
                </div>
            </div><!--end container-->
        </section>
    </div>
</template>

<script setup>
import client1 from 'assets/images/clients/Screenshot 2025-12-10 145421.png'
import client2 from 'assets/images/clients/Screenshot 2025-12-10 145425.png'
import client3 from 'assets/images/clients/Screenshot 2025-12-10 145431.png'
import client4 from 'assets/images/clients/Screenshot 2025-12-10 145437.png'
import client5 from 'assets/images/clients/Screenshot 2025-12-10 145447.png'
import { useLanguage } from '~/composables/useLanguage'

const { t } = useLanguage()

const clients = [
    {
        image: client1,
        name: 'Client 1'
    },
    {
        image: client2,
        name: 'Client 2'
    },
    {
        image: client3,
        name: 'Client 3'
    },
    {
        image: client4,
        name: 'Client 4'
    },
    {
        image: client5,
        name: 'Client 5'
    }
]
</script>
<style scoped>
/* Client logos styling */
</style>