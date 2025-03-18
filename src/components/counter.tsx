"use client";

import Cookies from "js-cookie";
import { debounce } from "lodash";
import { MinusCircle, PlusCircle } from "lucide-react";
import { FC, useCallback, useEffect, useState } from "react";

interface CounterProps {
  cookieKey: string;
}

const Counter: FC<CounterProps> = ({ cookieKey }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const savedCount = Cookies.get(cookieKey);
    if (savedCount != undefined) setCount(parseInt(savedCount, 10));
  }, []);

  const debouncedUpdateCount = useCallback(
    debounce((newCount: number) => {
      Cookies.set(cookieKey, newCount.toString());
    }, 500),
    []
  );

  const updateCount = (newCount: number) => {
    setCount(newCount);
    debouncedUpdateCount(newCount);
  };

  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <div className="flex gap-12 items-center justify-center">
        <PlusCircle
          size={100}
          className="hover:scale-105 transition-transform hover:cursor-pointer"
          onClick={() => updateCount(count + 1)}
        />
        <MinusCircle
          size={100}
          className="hover:scale-105 transition-transform hover:cursor-pointer"
          onClick={() => updateCount(count - 1)}
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
