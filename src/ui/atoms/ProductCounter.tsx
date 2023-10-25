"use client";
import { useState } from "react";

export const ProductCounter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button
        className="border border-slate-200 px-4"
        onClick={() => setCount((count) => count - 1)}
      >
        -
      </button>
      <input className="border border-slate-200" readOnly value={count} />
      <button
        className="border border-slate-200 px-4"
        onClick={() => setCount((count) => count + 1)}
      >
        +
      </button>
    </div>
  );
};
