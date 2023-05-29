<template>
    <VueFinalModal class=" d-flex justify-content-center align-items-center"
        content-class="base-modal p-3 bg-white rounded border border-gray-100 dark:border-gray-800"
        @update:model-value="val => emit('update:modelValue', val)">
        <vue-element-loading :active="props.isLoading"></vue-element-loading>
        <slot name="header"></slot>
        <hr class="m-1">
        <div>
            <slot />
            <slot name="body"></slot>
            <slot name="footer"></slot>
        </div>
    </VueFinalModal>
</template>
<script setup lang="ts">
import { VueFinalModal } from 'vue-final-modal'

const props = defineProps<{
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