<template>
    <navBar />
    <!-- Hero Start -->
    <section class="pt-6">

    </section>
    <!-- Hero End -->
    <portfoliodetail />
    <fooTer />
</template>

<script>
import navBar from '@/components/navbar/navbar-light.vue';
import portfoliodetail from '@/components/portfolio/portfolio-detail.vue';
import fooTer from '@/components/footer.vue'
import authImg from '@/assets/images/bg/auth.jpg'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useLanguage } from '~/composables/useLanguage'

export default {
    components: {
        navBar,
        portfoliodetail,
        fooTer
    },
    setup() {
        const route = useRoute()
        const { t, currentLang } = useLanguage()

        const projectId = computed(() => {
            return route.query.id || 'mostakbal-masr'
        })

        const projectName = computed(() => {
            const lang = currentLang.value
            if (projectId.value === 'mostakbal-masr') {
                return t('portfolio.projectDetails.mostakbalMasr.name')
            }
            if (projectId.value === 'monorail-garage') {
                return t('portfolio.projectDetails.monorailGarage.name')
            }
            if (projectId.value === 'administration-90th') {
                return t('portfolio.projectDetails.administration90th.name')
            }
            if (projectId.value === 'new-admin-capital') {
                return t('portfolio.projectDetails.newAdminCapital.name')
            }
            if (projectId.value === 'new-damietta') {
                return t('portfolio.projectDetails.newDamietta.name')
            }
            if (projectId.value === 'new-admin-capital-pumps') {
                return t('portfolio.projectDetails.newAdminCapitalPumps.name')
            }
            return ''
        })

        const projectLocation = computed(() => {
            const lang = currentLang.value
            if (projectId.value === 'mostakbal-masr') {
                return t('portfolio.projectDetails.mostakbalMasr.location')
            }
            if (projectId.value === 'monorail-garage') {
                return t('portfolio.projectDetails.monorailGarage.location')
            }
            if (projectId.value === 'administration-90th') {
                return t('portfolio.projectDetails.administration90th.location')
            }
            if (projectId.value === 'new-admin-capital') {
                return t('portfolio.projectDetails.newAdminCapital.location')
            }
            if (projectId.value === 'new-damietta') {
                return t('portfolio.projectDetails.newDamietta.location')
            }
            if (projectId.value === 'new-admin-capital-pumps') {
                return t('portfolio.projectDetails.newAdminCapitalPumps.location')
            }
            return ''
        })

        return {
            t,
            projectName,
            projectLocation,
            authImg
        }
    }
}
</script>

<style lang="scss" scoped>
.hero-auth {
    background-image: v-bind('`url(${authImg})`');
    background-size: cover;
}
</style>