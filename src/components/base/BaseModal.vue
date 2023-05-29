<template>
    <VueFinalModal class=" d-flex align-items-center justify-content-center" content-class="p-3 bg-light base-modal"
        content-transition="vfm-slide-down" overlay-transition="vfm-fade"
        @update:model-value="val => emit('update:modelValue', val)">


        <slot></slot>
        <slot name="header"></slot>
        <slot name="body"></slot>
        <slot name="footer"></slot>
    </VueFinalModal>
</template>
  
<script setup lang="ts">
import { VueFinalModal } from 'vue-final-modal'
import { ref } from 'vue'
defineProps<{
    isLoading?: boolean
}>()

const emit = defineEmits<{
    (e: 'update:modelValue', modelValue: boolean): void
    (e: 'confirm'): void
}>()

</script>


<style>
.base-modal {
    border-radius: 10px;
}
</style>