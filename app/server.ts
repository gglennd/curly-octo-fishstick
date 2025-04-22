import { Hono } from "hono";
import { createApp } from "honox/server";
import { pino } from "pino";
import { pinoLogger } from "hono-pino";
import pretty from "pino-pretty";
import type { HttpBindings } from "@hono/node-server";

const app = new Hono<{ Bindings: HttpBindings }>();

app.use(
  pinoLogger({
    pino: pino(process.env.NODE_ENV === "production" ? undefined : pretty()),
  })
);

app.get("/api", (c) => c.text("api"));

export default createApp({ app });
