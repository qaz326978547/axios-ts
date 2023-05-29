<template>
    HOME


    <div style="margin: 16px 0;">
        <HomeModal />
    </div>
    <ModalsContainer />
</template>

<script setup lang="ts">
import { ref, onMounted, type Ref } from 'vue'

import { ModalsContainer } from 'vue-final-modal'
import HomeModal from '@/components/home/HomeModal.vue'







onMounted(() => {
})
</script>