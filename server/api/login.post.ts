import { defineEventHandler, readBody } from "h3";
import sqlite from "sqlite3";

export default defineEventHandler(async (event) => {
  const db = new sqlite.Database("./database/db.sqlite3");
  const data = [
    {
      email: "abcd@mno.com",
      password: "1234",
    },
   
  ];

  const body = await readBody(event);

  console.log("request body", body);

  let isAuthenticated = false;

  data.forEach((item) => {
    if (item.email == body.email && item.password == body.password) {
      isAuthenticated = true;
    }
  });

  if (isAuthenticated) {
    console.log("success");
    return { message: "success" };
  } else {
    console.log("failed");
    throw createError({
      statusCode: 400,
      statusMessage: "login failed",
    });
  }
});
