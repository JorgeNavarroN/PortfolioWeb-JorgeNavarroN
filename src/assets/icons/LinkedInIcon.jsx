export default function LinkedInIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        stroke={props}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <path d="M18 22v-7a2 2 0 1 0-4 0v7h-4" />
        <path d="M10 22v-7a6 6 0 0 1 12 0v7h-4M3 9h4v13H3z" />
        <circle cx={5} cy={4} r={2} />
      </g>
    </svg>
  );
}
