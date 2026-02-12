import MemoryItem from "./MemoryItem";
import MemoryPath from "./MemoryPath";
import { items } from "./memoryLane.data";
import { edges } from "./memoryLane.edges.data";

import "./memoryLane.css";

export default function MemoryLane() {
  const itemMap = Object.fromEntries(
    items.map((item) => [item.id, item])
  );

  return (
    <div className="memory-lane relative w-full h-[5500px]">
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {edges.map((edge, i) => (
          <MemoryPath
            key={i}
            edge={edge}
            items={itemMap}
          />
        ))}
      </svg>

      {items.map((item) => (
        <MemoryItem key={item.id} {...item} />
      ))}
    </div>
  );
}
