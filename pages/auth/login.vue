<template>
    <!-- Hero Start -->
    <section class="position-relative bg-center bg-cover hero-auth">
        <div class="absolute inset-0 bg-black opacity-90"></div>
        <div class="container-fluid relative">
            <div class="grid grid-cols-1">
                <div class="lg:col-span-4">
                    <div class="flex flex-col min-h-screen md:px-12 py-12 px-3">
                        <!-- Start Logo -->
                        <div class="text-center mx-auto">
                            <NuxtLink to="/" class="flex items-center justify-center">
                                <img :src="logoImg" class="h-24" alt="ELSHARQUE">
                            </NuxtLink>
                        </div>
                        <!-- End Logo -->

                        <!-- Start Content -->
                        <div class="text-center my-auto">
                            <div
                                class="w-full max-w-sm m-auto px-6 py-8 bg-white dark:bg-slate-900 rounded-md shadow-lg shadow-slate-500 dark:shadow-slate-800">
                                <div class="grid grid-cols-1">
                                    <h5 class="mb-8 text-xl dark:text-white font-semibold">Login</h5>
                                    <form class="ltr:text-left rtl:text-right">
                                        <div class="grid grid-cols-1">
                                            <div class="mb-4">
                                                <label class="dark:text-white" for="LoginEmail">Email Address:</label>
                                                <input id="LoginEmail" type="email" class="form-input mt-3"
                                                    placeholder="name@example.com">
                                            </div>

                                            <div class="mb-4">
                                                <label class="dark:text-white" for="LoginPassword">Password:</label>
                                                <input id="LoginPassword" type="password" class="form-input mt-3"
                                                    placeholder="Password:">
                                            </div>

                                            <div class="flex justify-between mb-4">
                                                <div class="flex items-center mb-0">
                                                    <input
                                                        class="form-checkbox rounded border-gray-200 dark:border-gray-800 text-emerald-600 focus:border-emerald-300 focus:ring focus:ring-offset-0 focus:ring-emerald-200 focus:ring-opacity-50 me-2"
                                                        type="checkbox" value="" id="RememberMe">
                                                    <label class="form-checkbox-label text-slate-400"
                                                        for="RememberMe">Remember me</label>
                                                </div>
                                                <p class="text-slate-400 mb-0">
                                                    <NuxtLink to="/auth/reset-password" class="text-slate-400">Forgot
                                                        password ?</NuxtLink>
                                                </p>
                                            </div>

                                            <div class="mb-4">
                                                <a href=""
                                                    class="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white rounded-md w-full">Login
                                                    / Sign in</a>
                                            </div>

                                            <div class="text-center">
                                                <span class="text-slate-400 dark:text-slate-300 me-2">Don't have an account
                                                    ?</span>
                                                <NuxtLink to="/auth/signup" class="text-dark dark:text-white fw-bold">Sign
                                                    Up</NuxtLink>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <!-- End Content -->

                        <!-- Start Footer -->
                        <div class="text-center">
                            <p class="text-gray-400">© {{ date }} ELSHARQUE FOR General Contracting and Maintenance. All
                                rights reserved.</p>
                        </div>
                        <!-- End Footer -->
                    </div>
                </div><!--end col-->
            </div><!--end row-->
        </div><!--end container-->
    </section><!--end section-->
    <!-- Hero End -->
</template>

<script setup>
import { ref } from 'vue'
import logoImg from '@/assets/images/new logo (2).png'
import authImg from '@/assets/images/bg/auth.jpg'

const date = ref(new Date().getFullYear())
</script>

<style lang="scss" scoped>.hero-auth {
    background-image: v-bind('`url(${authImg})`');
}</style>