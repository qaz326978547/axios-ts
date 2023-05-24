<template>
  <button @click="getTodoList">btn</button>
</template>

<script setup lang="ts">
import { Api } from '../../base/api'
import { onMounted, ref } from 'vue'
import type { IP } from '../../base/api'
import { appEmitter, AppEvents } from '../../base/modules/event'

const todolist = ref<IP[]>([])
async function getTodoList() {
  console.log('run1');
  if (todolist.value.length) {
    console.log('了');

  }
  const res = await Api.getTodoList()
  if (res) {
    todolist.value = res;
    console.log(todolist.value);

  }
}

onMounted(() => {
  console.log('run');

  getTodoList()
})

</script>