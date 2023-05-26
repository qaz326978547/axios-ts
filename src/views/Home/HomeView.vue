<template>
    HOME


    <div style="margin: 16px 0;">
        <ul v-for="list in listData" :key="list.id">
            <li>
                {{ list.content }}
            </li>
        </ul>
    </div>
    <HomeModal />
    <ModalsContainer />
</template>

<script setup lang="ts">
import { ref, onMounted, type Ref } from 'vue'
import { $http } from './api'
import type { TodoList } from './type'
import { ModalsContainer } from 'vue-final-modal'

import HomeModal from '@/components/HomeModal.vue'




// const listData: Ref<TodoList[]> = ref([])
// const getData = async () => {
//     const res = await getTodoList()
//     if (res) {
//         listData.value = res as unknown as TodoList[]
//     } else {
//         listData.value = []
//     }

// }



onMounted(() => {
    // getData()
})
</script>