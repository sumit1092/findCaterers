const Logo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width="40"
      height="40"
      fill="none"
    >
      <circle
        cx="32"
        cy="34"
        r="20"
        stroke="orange"
        stroke-width="3"
      />

      <circle
        cx="32"
        cy="34"
        r="12"
        stroke="currentColor"
        stroke-width="2"
      />

      <path
        d="M24 16C24 12 28 12 28 8"
        stroke="currentColor"
        stroke-width="2.5"
        stroke-linecap="round"
      />
      <path
        d="M32 16C32 12 36 12 36 8"
        stroke="currentColor"
        stroke-width="2.5"
        stroke-linecap="round"
      />
      <path
        d="M40 16C40 12 44 12 44 8"
        stroke="currentColor"
        stroke-width="2.5"
        stroke-linecap="round"
      />

      <path
        d="M18 52H46"
        stroke="currentColor"
        stroke-width="3"
        stroke-linecap="round"
      />
    </svg>
  )
}

export default Logo