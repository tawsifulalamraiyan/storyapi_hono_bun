import { Hono } from "hono";
import { prisma } from "./lib/prisma.js";
import { cors } from "hono/cors";

const app = new Hono();

app.use(cors());

app.get("/", (c) => {
  return c.json("hello");
});

app.get("/api/story", async (c) => {
  const AllStory = await prisma.storydb.findMany();
  return c.json(AllStory);
});

app.post("/api/data", async (c) => {
  const body = await c.req.json();

  const { title, writter, content } = body;

  if (!title || !writter || !content) {
    return c.json({ error: "Name and email are required" }, 400);
  }

  const newstory = await prisma.storydb.create({
    data: { title, writter, content },
  });

  return c.json({
    message: "story created successfully!",
    data: newstory,
  });
});

export default app;
