const SupportIcon = ({ className = "w-5 h-5" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M4 12a8 8 0 0116 0" />
    <path d="M4 12v4a2 2 0 002 2h2v-6H6a2 2 0 00-2 2z" />
    <path d="M20 12v4a2 2 0 01-2 2h-2v-6h2a2 2 0 012 2z" />
    <path d="M12 20h2" />
  </svg>
);

export default SupportIcon;