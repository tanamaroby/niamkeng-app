"use client";

import { motion } from "framer-motion";
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
    <div className="flex flex-col items-center justify-center gap-6 p-6 sm:p-7 rounded-2xl border bg-card shadow-sm w-full">
      <div className="flex flex-col items-center gap-1">
        <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
          Total Count
        </p>
        <motion.p
          key={count} // triggers animation when count changes
          initial={{ scale: 0.8, opacity: 1 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="font-mono text-5xl font-bold text-primary tabular-nums"
        >
          {count}
        </motion.p>
      </div>
      <div className="flex gap-8">
        <button
          onClick={() => updateCount(count - 1)}
          className="p-3 rounded-full border border-destructive/40 bg-destructive/10 hover:bg-destructive/20 active:scale-95 transition-all"
          aria-label="Decrease Count"
        >
          <MinusCircle className="w-9 h-9 text-destructive" />
        </button>
        <button
          onClick={() => updateCount(count + 1)}
          className="p-3 rounded-full border border-primary/40 bg-primary/10 hover:bg-primary/20 active:scale-95 transition-all"
          aria-label="Increase Count"
        >
          <PlusCircle className="w-9 h-9 text-primary" />
        </button>
      </div>
    </div>
  );
};

export default Counter;
