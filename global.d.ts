import "@hono/react-renderer";

declare module "@hono/react-renderer" {
  interface Props {
    title?: string;
  }
}

declare module "hono" {
  interface ContextVariableMap {
    logger: pino.Logger;
  }
}
