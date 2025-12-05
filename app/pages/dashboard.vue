<template>
  
   
    <div class="m-5 grid grid-cols-4 gap-4">
      <StatCard v-for="item in salesData" :itemClass="item.class" :title="item.title" :value="item.value" @view="itemViewClick"></StatCard>
    </div>
  
</template>

<script setup>

const salesData = ref([
    {title: 'Total students', value: 450, class: 'success'},
    {title: 'Average GPA', value: 2.56, class: 'info'},
    
  ])



const itemViewClick = (e) => {
  console.log("Stat card event: ", e)
}

onMounted(() => {
  console.log('onMounted: dashboard')
})
</script>

<style scoped>

</style>

