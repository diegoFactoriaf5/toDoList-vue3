<script setup>
import TaskDataService from "../services/TaskDataService";
import { ref, onBeforeMount } from 'vue';

const tasks = ref();

function getTasks() {
    TaskDataService.getAll()
        .then(response => {
            tasks.value = response.data;
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
}

onBeforeMount(() => {
    getTasks();
})

</script>

<template>
    <div>
        <div>
            <h4>Tasks List</h4>
            <ul>
                <li v-for="(task, index) in tasks" :key="index">
                    {{ task.tittle }}
                    <router-link :to="'/task/detail/' + task.id"> Details </router-link>
                    <router-link :to="'/tasks/' + task.id"> Edit </router-link>
                </li>
            </ul>
        </div>
        <br>
    </div>
</template>
