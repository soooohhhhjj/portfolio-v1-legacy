import type { JourneyItemNode as Item } from "./types/journey.types";
import { techIconMap } from "./ui/memoryLane.techIcons";
import GlassCard from "@/components/ui/GlassCard";
import BouncingImage from "./ui/BouncingImage";

{ /* Image Variant */ }
function MemoryCardImage({
  type,
  image,
  height = 160,
}: {
  type: Item["type"];
  image?: string;
  height?: number;
}) {
  { /* Placeholder */ }
  if (type === "placeholder") {
    return (
      <GlassCard
        corner="rounded-[4px]"
        shadow="shadow-[0_0_10px_rgba(255,255,255,0.15)]"
        className="w-full"
        style={{ height }}
      >
        <div className="w-full h-full flex items-center justify-center text-center px-4">
          <span className="text-[10px] tracking-[1.5px] text-white/50 uppercase font-montserrat">
            Coming Soon
          </span>
        </div>
      </GlassCard>
    );
  }

  { /* Internship */ }
  if (type === "internship" && image) {
    return (
      <GlassCard
        corner="rounded-[3px]"
        shadow="shadow-[0_0_14px_rgba(255,255,255,0.2)]"
        className="w-full h-full"
      >
        <BouncingImage src={image} />
      </GlassCard>
    );
  }

  { /* Default / Child */ }
  if (image) {
    return (
      <GlassCard
        corner="rounded-[3px]"
        shadow="shadow-[0_0_10px_rgba(255,255,255,0.15)]"
      >
        <img
          src={image}
          alt=""
          draggable={false}
          className="w-full object-cover"
        />
      </GlassCard>
    );
  }

  return null;
}

{ /* Shared Content */ }
function MemoryCardContent({
  title,
  details,
  techTags,
  highlightTags,
  hideTags = false,
}: Item & { hideTags?: boolean }) {
  const hasTech = techTags && techTags.length > 0;
  const hasHighlights = highlightTags && highlightTags.length > 0;
  const showTags = !hideTags && (hasTech || hasHighlights);

  return (
    <div className="p-[2px]">
      {title && (
        <h3 className="mt-3 text-[16px] text-white/80 font-medium tracking-[.5px] font-montserrat leading-tight memory-card-title">
          {title}
        </h3>
      )}

      {details && (
        <p className="mt-[5px] px-[1px] text-[11px] text-white/70 leading-snug font-montserrat">
          {details}
        </p>
      )}

      {showTags && (
        <div className="mt-2 inline-flex flex-wrap items-start gap-1">
          {techTags?.map((tech) => (
            <div
              key={tech}
              className="flex items-center rounded-[3px] bg-white/5 border border-white/10 text-gray-300 px-[9px] py-[4px] text-[9px] font-montserrat"
            >
              {techIconMap[tech] || null}
              <span>{tech}</span>
            </div>
          ))}

          {hasTech && hasHighlights && (
            <span className="px-0.5 mt-[2px] text-[12px] text-gray-400 select-none">
              •
            </span>
          )}

          {highlightTags?.map((tag) => (
            <div
              key={tag}
              className="flex items-center rounded-[3px] bg-white/5 border border-white/10 text-gray-300 px-[9px] py-[4px] text-[9px] font-medium font-montserrat"
            >
              <span>{tag}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

{ /* Main Component */ }
export default function MemoryItem(props: Item) {
  const { x, y, width, height, type } = props;

  // PARENT NODE (intentionally separate)
  if (type === "parent" && props.icon) {
    const Icon = props.icon;

    return (
      <div
        className="absolute flex items-center justify-center memory-node"
        style={{ left: x, top: y, width, height }}
      >
        <Icon className="w-5 h-5 sm:w-[22px] sm:h-[22px] md:w-6 md:h-6 lg:w-7 lg:h-7" strokeWidth={1.3} />
      </div>
    );
  }

  { /* All Card Types */ }
  return (
    <div
      className="absolute flex flex-col memory-card"
      style={{ left: x, top: y, width, height }}
    >
      <MemoryCardImage
        type={type}
        image={props.image}
        height={props.height}
      />

      <MemoryCardContent
        {...props}
        hideTags={type === "placeholder"}
      />
    </div>
  );
}
