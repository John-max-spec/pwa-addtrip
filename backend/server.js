const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json({ limit: "10mb" })); 
app.use(express.urlencoded({ extended: true }));

const trips = []; // 存储任务

// 添加任务的路由
app.post("/api/trips/add-trip", (req, res) => {
  const { id, name, completed, location, photo } = req.body;

  if (!id || !name || completed === undefined || !location) {
    return res.status(400).json({ error: "Invalid task data" });
  }

  if (photo && !photo.startsWith("data:image")) {
    return res.status(400).json({ error: "Invalid or unsupported image data" });
  }

  console.log("Task received:", { id, name, completed, location });
  console.log("Photo data:", photo ? "Image attached" : "No image");

  trips.push({ id, name, completed, location, photo });
  res.status(201).json({ message: "Task added successfully!", trip: { id, name } });
});

// 获取所有任务的路由
app.get("/api/trips", (req, res) => {
  res.status(200).json(trips); // 返回存储的任务
});

// 启动服务器
app.listen(3613, () => {
  console.log("Server is running on http://localhost:3613");
})