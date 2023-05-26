<script setup lang="ts">
import { useModal } from 'vue-final-modal'
import HomeModal from './baseModal.vue'

const { open } = useModal({
  component: HomeModal,
  attrs: {
    title: 'Hello World!',
    content: '11111111111111111111111',
  },
  slots: {
    default: '<p>The content of the modal</p>',
  },
})
</script>

<template>
  <button @click="() => open()">
    Open Modal
  </button>
</template>
