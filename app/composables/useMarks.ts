export const useMarks = () => {
  const marks = ref([])

  const fetchMarks = async () => {
    marks.value = await $fetch('/api/marks')
  }

  const addMark = async () => {
    await $fetch('/api/marks', {
      method: 'POST',
     
    })
  }

  return { marks, fetchMarks, addMark }
}
