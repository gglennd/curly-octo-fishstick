import { createRoute } from "honox/factory";
import Counter from "../islands/counter";

const Hello = ({ name }: { name: string }) => {
  return <h1 className="text-4xl text-blue-500">Hello, {name}</h1>;
};

export default createRoute((c) => {
  const name = c.req.param("name") ?? "Hono";

  return c.render(
    <div className="py-8 text-center">
      <Hello name={name} />
      <Counter />
    </div>,
    { title: "hello" }
  );
});
