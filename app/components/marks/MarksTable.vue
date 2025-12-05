<template>
  <UCard>
    <div class="flex justify-between items-center mb-4">
      <h1 class="text-2xl font-bold">Marks List</h1>

      <UButton to="/marks/add" color="primary">
        Add Marks +
      </UButton>
    </div>

    <UTable :rows="rows" :columns="columns" />

 </UCard>
</template>

<script setup>




const columns = [
  { key: "id", label: "ID",id: 'id' },
  { key: "name", label: "Student",id: 'student' },
  { key: "gpa", label: "GPA",id: 'gpa' },
  { key: "subjects", label: "Subjects",id: 'subjects' },
 
];
const { data: rows } = await useFetch("api/Marks")
</script>



