interface BrandMarkProps {
  variant?: 'light' | 'dark';
  showSlogan?: boolean;
  compact?: boolean;
}

export function BrandMark({
  variant = 'light',
  showSlogan = false,
  compact = false,
}: BrandMarkProps) {
  const titleColor = variant === 'light' ? 'text-white' : 'text-[#101D2B]';
  const subColor = variant === 'light' ? 'text-[#C69A53]' : 'text-[#9F7837]';
  const sloganColor = variant === 'light' ? 'text-[#87919B]' : 'text-[#576370]';
  const primaryStroke = variant === 'light' ? '#FFFFFF' : '#101D2B';

  return (
    <div className="inline-flex items-center gap-3.5 select-none">
      {/* Architectural Roofline & Protective Shield Monogram */}
      <svg
        viewBox="0 0 56 56"
        className={compact ? 'h-9 w-9 shrink-0' : 'h-11 w-11 shrink-0'}
        fill="none"
        aria-hidden="true"
      >
        {/* Outer protective shield + gable roof geometry */}
        <path
          d="M28 5L49 15.5V29.5C49 41 40.1 49.5 28 52.5C15.9 49.5 7 41 7 29.5V15.5L28 5Z"
          stroke="#C69A53"
          strokeWidth="1.75"
          fill={variant === 'light' ? 'rgba(24, 35, 45, 0.72)' : 'rgba(16, 29, 43, 0.04)'}
        />
        {/* Subtle inner architectural roofline accent */}
        <path
          d="M15 18.5L28 11.5L41 18.5"
          stroke="rgba(198, 154, 83, 0.48)"
          strokeWidth="1.25"
          strokeLinecap="square"
        />
        {/* Crisp geometric T */}
        <path
          d="M17 23H28M22.5 23V37.5"
          stroke={primaryStroke}
          strokeWidth="2.5"
          strokeLinecap="square"
        />
        {/* Crisp geometric 3 */}
        <path
          d="M30.5 23H38.5L34 29.2C37 29.5 39 31.2 39 33.8C39 36.4 36.8 37.8 33.7 37.8C32 37.8 30.6 37.3 29.6 36.4"
          stroke="#C69A53"
          strokeWidth="2.4"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
      </svg>

      <div className="flex flex-col leading-none">
        <div className="flex items-baseline gap-1.5 sm:gap-2">
          <span
            className={`font-editorial text-lg sm:text-[22px] font-semibold tracking-tight ${titleColor}`}
          >
            T3
          </span>
          <span
            className={`font-sans-ui text-[9px] sm:text-[11px] font-semibold uppercase tracking-[0.18em] sm:tracking-[0.26em] whitespace-nowrap ${subColor}`}
          >
            Pest Management
          </span>
        </div>
        {showSlogan && (
          <span className={`mt-1 text-[11px] tracking-[0.04em] ${sloganColor}`}>
            Providing results, not excuses.
          </span>
        )}
      </div>
    </div>
  );
}
