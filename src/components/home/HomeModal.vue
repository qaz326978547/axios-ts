<template>
    <div>
        <button class="btn btn-primary" @click="[show = true, getDataList()]"> open modal </button>
    </div>
    <base-modal v-model="show" :is-loading="isloading">
        <template #header>
            <div class="d-flex justify-content-between ">
                <h3 class="fw-bold">標題</h3>
                <button class="btn-xl btn " @click="confirm">X</button>
            </div>
        </template>
        <template #body>
            <div class="p-3">
                <ul v-for="list in dataList" :key="list.id">
                    <li>
                        {{ list.id }}
                    </li>
                    <li>
                        {{ list.content }}
                    </li>
                    <li>
                        {{ list.isCompleted }}
                    </li>
                </ul>
            </div>
        </template>

    </base-modal>
</template>

<script lang="ts" setup>
import { ref, onMounted, type Ref } from 'vue'
import baseModal from '../baseModal.vue'
import { TodoListApi } from '@/base/todoList'
import type { TodoList } from '@/base/type'
const show = ref(false)
function confirm() {
    show.value = false
}

const dataList = ref<TodoList[]>([])
const isloading = ref(false)

async function getDataList() {
    isloading.value = true
    const res = await TodoListApi.getTodoList()
    if (res) {
        console.log('res', res);
        dataList.value = res
    }
    isloading.value = false
}



</script>