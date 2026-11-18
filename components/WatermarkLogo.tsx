import Image from "next/image";

interface WatermarkLogoProps {
  position?: "top-right" | "bottom-right" | "top-left" | "bottom-left" | "center";
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  className?: string;
}

const sizeMap = {
  sm: 200,
  md: 320,
  lg: 480,
  xl: 640,
  "2xl": 820,
};

const positionMap = {
  "top-right": "top-[-60px] right-[-60px]",
  "bottom-right": "bottom-[-60px] right-[-60px]",
  "top-left": "top-[-60px] left-[-60px]",
  "bottom-left": "bottom-[-60px] left-[-60px]",
  center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
};

export default function WatermarkLogo({
  position = "bottom-right",
  size = "md",
  className = "",
}: WatermarkLogoProps) {
  const px = sizeMap[size];
  return (
    <div
      className={`pointer-events-none select-none absolute ${positionMap[position]} ${className}`}
      aria-hidden="true"
    >
      <Image
        src="/images/logo/logo-diamond.png"
        alt=""
        width={px}
        height={px}
        className="opacity-[0.06] mix-blend-multiply"
        style={{ width: px, height: px }}
      />
    </div>
  );
}
