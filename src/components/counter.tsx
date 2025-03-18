"use client";

import { MinusCircle, PlusCircle } from "lucide-react";
import { FC, useState } from "react";

interface Counter {}

const Counter: FC = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <div className="flex gap-12 items-center justify-center">
        <PlusCircle
          size={100}
          className="hover:scale-105 transition-transform hover:cursor-pointer"
          onClick={() => setCount(count + 1)}
        />
        <MinusCircle
          size={100}
          className="hover:scale-105 transition-transform hover:cursor-pointer"
          onClick={() => setCount(count - 1)}
        />
      </div>
      <div className="flex flex-col items-center justify-center text-center">
        <p className="text-lg font-semibold">Total Count</p>
        <p className="text-4xl font-bold">{count}</p>
      </div>
    </div>
  );
};

export default Counter;
