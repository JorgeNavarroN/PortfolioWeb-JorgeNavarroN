export default function LinkIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      fill="none"
      {...props}
    >
      <g clipPath="url(#a)">
        <path
          stroke="#F3F3F3"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M20 9.333h4a6.666 6.666 0 1 1 0 13.334h-4m-8 0H8A6.667 6.667 0 0 1 8 9.333h4M10.667 16h10.666"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h32v32H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
