export function StarRating({ rating, size = 12 }: { rating: number; size?: number }) {
  const full = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;

  return (
    <span role="img" className="inline-flex items-center gap-0.5" aria-label={`${rating} von 5 Sternen`}>
      {Array.from({ length: 5 }, (_, i) => {
        const filled = i < full;
        const half = i === full && hasHalf;
        return (
          <svg key={i} width={size} height={size} viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path
              d="M6 1L7.5 4.5H11L8.5 6.5L9.5 10L6 8L2.5 10L3.5 6.5L1 4.5H4.5L6 1Z"
              fill={filled || half ? "currentColor" : "none"}
              fillOpacity={half ? 0.4 : 1}
              stroke="currentColor"
              strokeWidth="0.75"
              className={filled || half ? "text-accent" : "text-ink-muted/30"}
            />
          </svg>
        );
      })}
    </span>
  );
}
