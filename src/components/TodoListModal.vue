<script setup lang="ts">
import { useModal } from 'vue-final-modal'
import TodoListModal from './baseModal.vue'
import type { TodoList } from '@/views/Home/type';
import type { PropType } from 'vue';
import { ref } from 'vue';
const props = defineProps({
    detail: {
        type: Object as PropType<TodoList>,
        required: true
    }
})

console.log(props.detail);


const { open } = useModal({
    component: TodoListModal,
    attrs: {
        title: '細節',
        id: props.detail.id,
        content: props.detail.content,
        isCompleted: props.detail.isCompleted,

    },
    slots: {
        default: `
        <div>
            <p>id:${props.detail.id} </p>
            <p>內容: ${props.detail.content}</p>
            <p>狀態: ${props.detail.isCompleted ? '已完成' : '未完成'}</p>
        </div>
        
        `,
    },
})


const loading = ref(false)



</script>

<template>
    <button class="btn btn-outline-success ms-3" @click="() => open()">
        content
    </button>
</template>
