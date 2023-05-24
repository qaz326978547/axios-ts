<template>
    <div>
        <button @click="fetchData">reload</button>
        <div v-if="loading">
            loading......
        </div>
        <template v-else>
            <div v-for="list in todoListData" :key="list.id">
                <ul style="display: flex;">
                    <li> {{ list.content }}</li>
                    <li style="margin-left: 10px;">
                        <input type="checkbox" :checked="list.isCompleted" disabled>
                    </li>
                    <li>
                        <button @click="removeTodoItem(list.id)">刪除</button>
                    </li>
                </ul>

            </div>
        </template>

        <br>
        <hr>
        <br>
        <div>
            <div>
                <label for="isCompleted">isCompleted</label>
                <input v-model="isCompleted" id="isCompleted" type="checkbox">
            </div>
            <div style="margin: 16px 0;">
                <label for="content">content</label>
                <input v-model="content" type="text">
            </div>
            <button @click="addTodoItem" @keyup.enter="addTodoItem">addItem</button>
        </div>
    </div>
</template>
<style>
ul>li {
    list-style: none;
}
</style>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { TodoApi } from '../../axios/todolistAPI'
import { $http } from '../../base/http'


interface TodoList {
    id?: number;
    isCompleted: boolean;
    content: string;
}

const isCompleted = ref(false);
const content = ref("");

const todoListData = ref<TodoList[]>([]);
const loading = ref(false)
async function fetchData() {
    loading.value = true
    const res = await TodoApi.fetchTodoList()
    if (res) {
        todoListData.value = res
        console.log(todoListData.value);

    } else {
        console.log(todoListData.value);
        todoListData.value = []
    }
    loading.value = false
}


async function addTodoItem() {
    const data: TodoList = {
        isCompleted: isCompleted.value,
        content: content.value
    }
    const res = await TodoApi.addTodoItem(data);
    if (res) {
        console.log('成功新增', res);

        fetchData();
    }

}

async function removeTodoItem(id: number | undefined) {
    const res = await TodoApi.removeTodoItem(id);
    if (res) {
        console.log('成功刪除', res);
        fetchData();
    }
}

onMounted(() => {
    fetchData()
})

</script>