import express from "express";
import { mockData } from "./mockData/mockData.js"; // Импортируем моковые данные

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Пример маршрута для получения курсов
app.get("/api/courses", (req, res) => {
  res.json(mockData.courses);
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
