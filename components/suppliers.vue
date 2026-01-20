<template>
    <section class="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800" id="suppliers">
        <div class="container mx-auto">
            <div class="grid grid-cols-1 pb-8 text-center">
                <h6 class="text-emerald-600 text-base font-medium uppercase mb-2">{{ t('suppliersForm.subtitle') }}</h6>
                <h3 class="mb-4 md:text-2xl text-xl font-medium dark:text-white">{{ t('suppliersForm.title') }}</h3>
                <p class="text-slate-400 dark:text-slate-300 max-w-xl mx-auto">{{ t('suppliersForm.description') }}</p>
            </div><!--end grid-->

            <div class="flex justify-center mt-8">
                <div class="lg:w-2/3 w-full">
                    <div class="p-6 rounded-md shadow bg-white dark:bg-slate-900">
                        <form @submit.prevent="handleSubmit">
                            <div class="grid lg:grid-cols-12 lg:gap-6">
                                <div class="lg:col-span-6 mb-5">
                                    <label class="form-label dark:text-white">{{ t('suppliersForm.companyName') }}</label>
                                    <input v-model="formData.companyName" type="text" class="form-input mt-2" :placeholder="t('suppliersForm.companyName')" required>
                                </div>
                                <div class="lg:col-span-6 mb-5">
                                    <label class="form-label dark:text-white">{{ t('suppliersForm.commercialRegister') }}</label>
                                    <input v-model="formData.commercialRegister" type="text" class="form-input mt-2" :placeholder="t('suppliersForm.commercialRegister')">
                                </div>
                            </div>

                            <div class="grid lg:grid-cols-12 lg:gap-6">
                                <div class="lg:col-span-6 mb-5">
                                    <label class="form-label dark:text-white">{{ t('suppliersForm.employeeName') }}</label>
                                    <input v-model="formData.employeeName" type="text" class="form-input mt-2" :placeholder="t('suppliersForm.employeeName')">
                                </div>
                                <div class="lg:col-span-6 mb-5">
                                    <label class="form-label dark:text-white">{{ t('suppliersForm.jobTitle') }}</label>
                                    <input v-model="formData.jobTitle" type="text" class="form-input mt-2" :placeholder="t('suppliersForm.jobTitle')">
                                </div>
                            </div>

                            <div class="grid lg:grid-cols-12 lg:gap-6">
                                <div class="lg:col-span-12 mb-5">
                                    <label class="form-label dark:text-white">{{ t('suppliersForm.phone') }}</label>
                                    <input v-model="formData.phone" type="text" class="form-input mt-2" :class="{'border-red-500': phoneError}" :placeholder="t('suppliersForm.phone')" required>
                                    <p v-if="phoneError" class="text-red-500 text-sm mt-1">{{ t('suppliersForm.invalidPhone') }}</p>
                                </div>
                            </div>

                            <div class="grid grid-cols-1">
                                <div class="mb-5">
                                    <label class="form-label dark:text-white">{{ t('suppliersForm.products') }}</label>
                                    <textarea v-model="formData.products" class="form-input mt-2 textarea h-28" :placeholder="t('suppliersForm.products')"></textarea>
                                </div>
                            </div>
                            
                            <button type="submit" class="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white rounded-md h-11 w-full justify-center flex items-center">
                                {{ t('suppliersForm.submit') }}
                            </button>
                        </form>
                    </div>
                </div>
            </div><!--end grid-->
        </div><!--end container-->
    </section>
</template>

<script setup>
import { ref } from 'vue'
import { useLanguage } from '~/composables/useLanguage'

const { t } = useLanguage()
const whatsappNumber = '966573092631'
const phoneError = ref(false)

const formData = ref({
    companyName: '',
    commercialRegister: '',
    employeeName: '',
    jobTitle: '',
    phone: '',
    products: ''
})

const validatePhone = (phone) => {
    // Egyptian phone number regex: starts with 010, 011, 012, or 015 followed by 8 digits
    const regex = /^(010|011|012|015)[0-9]{8}$/
    return regex.test(phone)
}

const handleSubmit = () => {
    // Validate phone number
    if (!validatePhone(formData.value.phone)) {
        phoneError.value = true
        return
    }
    
    phoneError.value = false
    
    const message = `*طلب تسجيل مورد جديد*

*اسم الشركة:* ${formData.value.companyName}
*رقم السجل التجاري:* ${formData.value.commercialRegister || 'غير محدد'}
*اسم الموظف المسؤول:* ${formData.value.employeeName || 'غير محدد'}
*الوظيفة:* ${formData.value.jobTitle || 'غير محدد'}
*رقم الموبايل:* ${formData.value.phone}

*المنتجات أو الخدمات:*
${formData.value.products || 'غير محدد'}

شكراً لكم`

    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
    
    window.open(whatsappUrl, '_blank')
    
    // Reset form
    formData.value = {
        companyName: '',
        commercialRegister: '',
        employeeName: '',
        jobTitle: '',
        phone: '',
        products: ''
    }
}
</script>

