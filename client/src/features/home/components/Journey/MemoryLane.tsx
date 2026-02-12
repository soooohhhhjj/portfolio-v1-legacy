import { useMemo } from "react";
import MemoryItem from "./MemoryItem";
import MemoryPath from "./MemoryPath";
import { journeyContent } from "./journey.content";
import { computeJourneyNodes } from "./layout/computeNodes";
import { pickLayout } from "./layout";
import { useContainerSize } from "./layout/useContainerSize";
import { useViewportWidth } from "./layout/useViewportWidth";

import "./CSS/memoryLane.css";

export default function MemoryLane() {
  const { ref, width } = useContainerSize<HTMLDivElement>();
  const viewportWidth = useViewportWidth();

  const layout = useMemo(
    () => pickLayout(viewportWidth),
    [viewportWidth]
  );
  const { items, itemMap, edges, height } = useMemo(
    () => computeJourneyNodes(journeyContent, layout, width),
    [layout, width]
  );

  return (
    <div
      ref={ref}
      className="memory-lane relative w-full"
      style={{ height }}
    >
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
