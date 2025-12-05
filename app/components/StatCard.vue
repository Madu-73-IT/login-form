<template>
  <UCard :class="staticData.mapToClass(props.itemClass)">
    <template #header>
      <div class="w-full text-center text-2xl font-semibold text-white">{{ props.title }}</div>
    </template>
    <div class="text-black text-5xl text-semibold w-full text-center">{{ props.value }}</div>

  </UCard>
</template>

<script  setup>
const staticData = useStaticData()

const props = defineProps({
  itemClass: 'info',
  title: '',
  value: ''
})



</script>

<style scoped>

</style>
