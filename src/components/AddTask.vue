<script setup>
import TaskDataService from "../services/TaskDataService";
import { ref, onBeforeMount } from 'vue';

const newTask = ref();

function createNewTask() {
    TaskDataService.create(newTask.value)
    .then(response =>{

        console.log(response.data);
        newTask.value.tittle = response.data.tittle
        newTask.value.description = response.data.description
    })

   
}

</script>

<template>
    <form @submit.prevent="createNewTask">
        <div>
            <label>Title</label>
            <input type="text" id="title" v-model="newTask.tittle" />
        </div>
        <div>
            <label>Description</label>
            <input type="text" id="description" v-model="newTask.description" />
        </div>
        <button type="submit">Submit</button>
    </form>
   
</template>
