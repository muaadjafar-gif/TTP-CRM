export function BrandMark({ className = "h-5 w-5" }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="m7.6 7.6 2.8 2.8m6-2.8-2.8 2.8M12 14v1.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <circle cx="6" cy="6" r="2.2" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="18" cy="6" r="2.2" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="18" r="2.2" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="1.3" fill="currentColor" />
    </svg>
  );
}
