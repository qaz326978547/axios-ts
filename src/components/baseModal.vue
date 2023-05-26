<template>
    <VueFinalModal class=" d-flex justify-content-center align-items-center"
        content-class="base-modal p-3 bg-white rounded border border-gray-100 dark:border-gray-800"
        @update:model-value="val => emit('update:modelValue', val)">
        <vue-element-loading :color="loadingColor" :active="isLoading"></vue-element-loading>
        <div class="px-3 d-flex justify-content-between ">
            <h3>{{ title }}</h3>
            <button class="btn  ms-auto" @click="emit('update:modelValue', false)">
                X
            </button>
        </div>
        <hr class="m-1">
        <div class="px-3">
            <slot />
        </div>
    </VueFinalModal>
</template>
<script setup lang="ts">
import { VueFinalModal } from 'vue-final-modal'



defineProps<{
    title?: string;
    content?: string;
    id?: number;
    isCompleted?: boolean;
    loadingColor?: string;
    isLoading?: boolean;
}>();
const emit = defineEmits<{
    (e: 'update:modelValue', modelValue: boolean): void
}>()
</script>
<style>
.base-modal {
    min-height: 300px;
    min-width: 90%;
}
</style>