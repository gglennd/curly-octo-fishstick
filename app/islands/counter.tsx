import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p className="py-2 text-2xl">{count}</p>
      <Button variant="outline" onClick={() => setCount(count + 1)}>
        Increment
      </Button>
    </div>
  );
}
