

const SearchIcon = ({ className }: { className?: string }) => {
    return(
        <svg
              className={className}
              viewBox="0 0 24 24"
              width={20}
              height={20}
              fill="none"
              aria-hidden="true"
            >
              <path
                d="m21 21-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
    )
}

export default SearchIcon