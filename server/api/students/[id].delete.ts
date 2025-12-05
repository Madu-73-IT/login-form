import { defineEventHandler } from "h3";
let students = [
  { id: 1, name: "nimal", age: 20, classRoom: "A", address: "Kandy" },
  { id: 2, name: "amali", age: 22, classRoom: "B", address: "Colombo" },
];

export default defineEventHandler((event) => {
  const id = parseInt(event.context.params!.id);
  const index = students.findIndex((students) => students.id === id);

  if (index === -1) {
    return { message: "Student not found" };
  }

  const deleted = students.splice(index, 1);

  console.log("Deleted student:", deleted[0]);

  return {
    message: "Student deleted successfully",
    students,
  };
});
