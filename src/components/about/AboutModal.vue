<template>
    <div>
        <button @click="show = true">Modal</button>
        <a class="d-block" @click.prevent="show = true">Modal</a>
    </div>
    <baseModal v-model="show">
        <template #header>
            <div class="d-flex justify-content-between ">
                <h3 class="fw-bold">標題</h3>
                <button class="btn-xl btn " @click="confirm">X</button>
            </div>
        </template>
        <template #body>
            <div v-for="list in todoListData" :key="list.id">
                <ul>
                    <li>id: {{ list.id }}</li>
                    <li>內容: {{ list.content }}</li>
                    <li>{{ list.isCompleted ? '已完成' : '未完成' }} </li>
                </ul>
            </div>
        </template>
    </baseModal>
</template>
  
<script setup lang="ts">

import { onMounted, ref, type Ref } from 'vue'
import baseModal from '@/components/base/BaseModal.vue'
import { TodoListApi } from '@/views/Home/todolistApi'
import type { TodoList } from '@/views/About/types'


const todoListData = ref<TodoList[]>([])

async function getTodoList() {
    //todolistApi.ts 
    // export async function getTodoList(): Promise<TodoList[] | null> {
    // const res = await asyncData(() => $http<TodoList[]>('get', '/todolist'));
    // return res?.data ?? null;
    //這邊要注意.value = res 型別錯誤 根據Promise<TodoList[] | null> 及 $http<TodoList[]>
    const res = await TodoListApi.getTodoList()
    if (res) {
        todoListData.value = res
    }
}

const show = ref(false)
function confirm() {
    show.value = false
}

onMounted(() => {
    getTodoList()
})
</script>