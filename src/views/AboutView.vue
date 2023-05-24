<template>
  <div>
    <button @click="fetchData">Fetch Data</button>
    <div v-if="loading">Loading...</div>
    <div v-else>{{ data }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { getData } from '../../axios/api';

const data = ref('');
const loading = ref(false);

export interface TodoList {
  id: number;
  isCompleted: boolean;
  content: string;
}
async function fetchData() {
  loading.value = true;
  try {
    const todoList: TodoList[] = await getData<TodoList[]>('/todoList');
    data.value = JSON.stringify(todoList);
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
  }
}

</script>
