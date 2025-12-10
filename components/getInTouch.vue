<template>
      <section class="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800" id="contact">
            <div class="container">
                <div class="grid grid-cols-1 pb-8 text-center">
                    <h6 class="text-emerald-600 text-base font-medium uppercase mb-2">{{ t('contact.contactUs') }}</h6>
                    <h3 class="mb-4 md:text-2xl text-xl font-medium dark:text-white">{{ t('contact.title') }}</h3>

                    <p class="text-slate-400 dark:text-slate-300 max-w-xl mx-auto">{{ t('contact.description') }}</p>
                </div><!--end grid-->

                <div class="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-2 mt-8 items-center gap-6">
                    <div class="lg:col-span-8">
                        <div class="p-6 rounded-md shadow bg-white dark:bg-slate-900">
                            <form @submit.prevent="handleSubmit">
                                <div class="grid lg:grid-cols-12 lg:gap-6">
                                    <div class="lg:col-span-6 mb-5">
                                        <input v-model="formData.name" name="name" id="name" type="text" class="form-input" :placeholder="t('form.name')" required>
                                    </div>
    
                                    <div class="lg:col-span-6 mb-5">
                                        <input v-model="formData.email" name="email" id="email" type="email" class="form-input" :placeholder="t('form.email')" required>
                                    </div><!--end col-->
                                </div>

                                <div class="grid grid-cols-1">
                                    <div class="mb-5">
                                        <input v-model="formData.subject" name="subject" id="subject" class="form-input" :placeholder="t('form.subject')" required>
                                    </div>

                                    <div class="mb-5">
                                        <textarea v-model="formData.message" name="comments" id="comments" class="form-input textarea h-28" :placeholder="t('form.message')" required></textarea>
                                    </div>
                                </div>
                                <button type="submit" id="submit" name="send" class="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white rounded-md h-11 justify-center flex items-center">{{ t('buttons.sendMessage') }}</button>
                            </form>
                        </div>
                    </div>

                    <div class="lg:col-span-4">
                        <div class="lg:ms-8">
                            <div class="flex">
                                <div class="icons text-center mx-auto">
                                    <i class="uil uil-phone block rounded text-2xl dark:text-white mb-0"></i>
                                </div>
    
                                <div class="flex-1 ms-6">
                                    <h5 class="text-lg dark:text-white mb-2 font-medium">{{ t('contact.phone') }}</h5>
                                    <a href="tel:+201094892311" class="text-slate-400">+2 01094892311</a>
                                </div>
                            </div>
    
                            <div class="flex mt-4">
                                <div class="icons text-center mx-auto">
                                    <i class="uil uil-envelope block rounded text-2xl dark:text-white mb-0"></i>
                                </div>
    
                                <div class="flex-1 ms-6">
                                    <h5 class="text-lg dark:text-white mb-2 font-medium">{{ t('contact.email') }}</h5>
                                    <a href="mailto:elsharque.projects@gmail.com" class="text-slate-400">elsharque.projects@gmail.com</a>
                                </div>
                            </div>
    
                            <div class="flex mt-4">
                                <div class="icons text-center mx-auto">
                                    <i class="uil uil-map-marker block rounded text-2xl dark:text-white mb-0"></i>
                                </div>
    
                                <div class="flex-1 ms-6">
                                    <h5 class="text-lg dark:text-white mb-2 font-medium">{{ t('contact.location') }}</h5>
                                    <p class="text-slate-400 mb-2">Building 2023, Apartment No. 4, Extension of Al-Ayada Street, Officers Housing, Nasr City, Cairo Governorate, Egypt</p>
                                    <p class="text-slate-400 mb-2 text-right" dir="rtl">عمارة 2023 شقة رقم ٤، امتداد شارع العيادة، مساكن الضباط، مدينة نصر، محافظة القاهرة</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div><!--end grid-->
            </div><!--end container-->
        </section><!--end section-->
        <!-- End -->
</template>

<script setup>
import { ref } from 'vue'
import { useLanguage } from '~/composables/useLanguage'

const { t } = useLanguage()

const formData = ref({
    name: '',
    email: '',
    subject: '',
    message: ''
})

const handleSubmit = () => {
    // إنشاء الرسالة بالعربي
    const message = `مرحباً، أريد التواصل معكم

*الاسم:* ${formData.value.name}
*البريد الإلكتروني:* ${formData.value.email}
*الموضوع:* ${formData.value.subject}

*الرسالة:*
${formData.value.message}

شكراً لكم`

    // ترميز الرسالة للـ URL
    const encodedMessage = encodeURIComponent(message)
    
    // رقم WhatsApp (بدون + أو مسافات)
    const phoneNumber = '01003923040'
    
    // رابط WhatsApp
    const whatsappUrl = `https://wa.me/2${phoneNumber}?text=${encodedMessage}`
    
    // فتح WhatsApp
    window.open(whatsappUrl, '_blank')
    
    // إعادة تعيين النموذج
    formData.value = {
        name: '',
        email: '',
        subject: '',
        message: ''
    }
}
</script>

<style lang="scss" scoped>

</style>