<template>
   <div>
        <h2>Student Name : {{ student.name }} </h2>
        <h2>Student Gender : {{ student.gender }} </h2>
        <button @click="$emit('hide')">Hide Details</button>
   </div>
</template>

<script>
export default {
    props : ['student'],
    emits: ['hide']
}
</script>

<style>

</style>
