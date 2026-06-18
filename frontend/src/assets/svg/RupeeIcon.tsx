const RupeeIcon = ({ className = "w-5 h-5" }) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <text
      x="12"
      y="17"
      textAnchor="middle"
      fontSize="24"
      fontWeight="700"
      fill="currentColor"
      fontFamily="Arial, Helvetica, sans-serif"
    >
      ₹
    </text>
  </svg>
);

export default RupeeIcon;