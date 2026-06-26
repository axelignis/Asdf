export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2 ${className}`}>
      <svg
        width="26"
        height="26"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
        className="text-gold"
      >
        <path
          d="M16 2l3.6 8.2L28 12l-6 6 1.6 9.2L16 22.8 8.4 27.2 10 18l-6-6 8.4-1.8L16 2z"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
        <circle cx="16" cy="14" r="3" stroke="currentColor" strokeWidth="1.2" />
      </svg>
      <span className="font-serif text-2xl font-medium tracking-wide">
        Aurelia
      </span>
    </span>
  );
}
