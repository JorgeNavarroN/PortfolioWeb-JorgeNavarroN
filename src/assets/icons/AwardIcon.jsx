export default function AwardIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={48}
      height={48}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        stroke={props}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7.967 14.722 7 22l4.588-2.753c.15-.09.225-.135.305-.152a.5.5 0 0 1 .214 0c.08.017.155.062.305.152L17 22l-.966-7.279M19 9A7 7 0 1 1 5 9a7 7 0 0 1 14 0Z"
      />
    </svg>
  );
}
