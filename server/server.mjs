import express from "express";
import cors from "cors";
import newsRouter from "./routes/news.mjs";
import commentsRouter from "./routes/comments.mjs";
import usersRouter from "./routes/users.mjs";

const PORT = 3000;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/news", newsRouter);
app.use("/api/comments", commentsRouter);
app.use("/api/users", usersRouter);

app.listen(PORT, () => {
  console.log(`Express start on ${PORT} port`);
});
