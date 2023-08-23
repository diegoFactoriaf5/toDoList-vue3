<script setup>
import TaskDataService from "../services/TaskDataService";
import { ref, onBeforeMount } from 'vue';
import { useRoute, useRouter } from 'vue-router'

const currentTask = ref();
const router = useRouter();
const route = useRoute();

function getTaskByid(id) {
    TaskDataService.get(id).then(response => {
        currentTask.value = response.data;
    })
}

function updateTask(){
    TaskDataService.update(currentTask.value.id, currentTask.value )
}

function deleteTask() {
    TaskDataService.delete(currentTask.value.id)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        })
}

onBeforeMount(() => {
    getTaskByid(route.params.id)
})

</script>

<template>
    <div v-if="currentTask">
        <form>
            <div>
                <label>Title</label>
                <input type="text" id="title" v-model="currentTask.tittle" />
            </div>
            <div>
                <label>Description</label>
                <input type="text" id="description" v-model="currentTask.description" />
            </div>
        </form>
        <button @click="deleteTask"> Delete </button>
        <button type="submit" @click="updateTask"> Update </button>
    </div>
</template>

<style scoped></style>
