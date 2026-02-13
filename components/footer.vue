<template>
    <!-- Start Footer -->
    <footer class="py-8 bg-slate-800 dark:bg-gray-900">
        <div class="container">
            <div class="grid md:grid-cols-12 items-center">
                <div class="md:col-span-3">
                    <a href="#" class="logo-footer flex items-center justify-center md:justify-start">
                        <img :src="logoImg" class="h-32 md:h-36 logo-image-footer" alt="ProCode Solutions">
                    </a>
                </div>

                <div class="md:col-span-5 md:mt-0 mt-8">
                    <div class="text-center">
                        <p class="text-gray-400">© {{ date }} {{ t('footer.copyright') }}</p>
                    </div>
                </div>

                <div class="md:col-span-4 md:mt-0 mt-8">
                    <ul class="list-none foot-icon ltr:md:text-right rtl:md:text-left text-center">
                        <li class="inline"><a href="https://web.facebook.com/profile.php/?id=61579639703417&_rdc=1&_rdr#"
                                target="_blank"
                                class="btn btn-icon btn-sm border rounded-md border-slate-700 dark:border-slate-800 hover:border-blue-800 bg-slate-800 dark:bg-gray-900 hover:bg-blue-800 dark:hover:bg-blue-800 text-gray-400 hover:text-white"><i
                                    class="uil uil-facebook-f align-middle" title="Facebook"></i></a></li>
                        <li class="inline"><a :href="`https://wa.me/${whatsappNumber}`" target="_blank"
                                class="btn btn-icon btn-sm border rounded-md border-slate-700 dark:border-slate-800 hover:border-blue-800 bg-slate-800 dark:bg-gray-900 hover:bg-blue-800 dark:hover:bg-blue-800 text-gray-400 hover:text-white"><i
                                    class="uil uil-whatsapp align-middle" title="WhatsApp"></i></a></li>
                        <li class="inline"><a href="#" target="_blank"
                                class="btn btn-icon btn-sm border rounded-md border-slate-700 dark:border-slate-800 hover:border-blue-800 bg-slate-800 dark:bg-gray-900 hover:bg-blue-800 dark:hover:bg-blue-800 text-gray-400 hover:text-white"><i
                                    class="uil uil-linkedin align-middle" title="LinkedIn"></i></a></li>
                    </ul><!--end icon-->
                </div><!--end col-->
            </div><!--end row-->
        </div><!--end container-->
    </footer><!--end footer-->
    <!-- End Footer -->
</template>

<script setup>
import { computed } from 'vue'
import { useLanguage } from '~/composables/useLanguage'
import logoImg from '@/assets/images/new-logo-2.png'

const { t } = useLanguage()
const date = computed(() => new Date().getFullYear())

// رقم الواتساب بالصيغة الدولية
const whatsappNumber = '966573092631'
</script>

<style lang="scss" scoped>
.logo-image-footer {
    transition: all 0.3s ease;
    object-fit: contain;
}

.logo-image-footer:hover {
    transform: scale(1.05);
}

.dark .logo-image-footer {
    /* No additional styles needed */
}

.dark .logo-image-footer:hover {
    /* No additional styles needed */
}
</style>