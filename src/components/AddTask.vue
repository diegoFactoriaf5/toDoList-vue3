<script setup>
import TaskDataService from "../services/TaskDataService";
import { reactive } from 'vue';


const task = reactive({
    id: null,
    title: "",
    description: "",
})

function saveTask() {
    var data = {
        title: task.title,
        description: task.description
    };

    TaskDataService.create(data)
        .then(response => {
            task.id = response.data.id;
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
}

</script>

<template>
    <div>
        <div>
            <label>Title </label>
            <input type="text" id="title" required v-model="task.title" name="title" />
        </div>

        <div>
            <label>Description </label>
            <input id="description" required v-model="task.description" name="description" />
        </div>

        <button @click="saveTask">Submit</button>
    </div>
</template>

<style>
.submit-form {
    max-width: 300px;
    margin: auto;
}
</style>
