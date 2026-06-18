const Logo = () => {
    return (
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-orange-100 bg-orange-50 text-brand-orange">
            <svg
              viewBox="0 0 48 48"
              width={30}
              height={30}
              className="h-[30px] w-[30px] shrink-0"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M8 32h32M11 29c1-11 7-18 17-18s16 7 17 18"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M24 7V4M21 4h6M14 34h20"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </span>
    )
}

export default Logo