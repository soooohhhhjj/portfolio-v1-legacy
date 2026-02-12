type TechImgProps = {
  src: string;
  alt: string;
  className?: string;
};

export default function TechImg({ src, alt, className = "" }: TechImgProps) {
  return <img src={src} alt={alt} className={`w-[22px] h-[22px] ${className}`} />;
}
