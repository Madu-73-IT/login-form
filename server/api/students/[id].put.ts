import { defineEventHandler, readBody } from "h3";
let students = [
  { id: 1, name: "nimal", age: 20, classRoom: "A", address: "Kandy" },
  { id: 2, name: "amali", age: 22, classRoom: "B", address: "Colombo" },
];

export default defineEventHandler(async (event) => {
  const id = parseInt(event.context.params!.id);
  const body = await readBody(event);

  const index = students.findIndex((students) => students.id === id);
  if (index === -1) {
    return { message: "Student not found" };
  }

  students[index] = { ...students[index], ...body };

  console.log("Student updated:", students[index]);

  return {
    message: "Student updated successfully",
    student: students[index],
  };
});
