export default function LinkIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={"1em"}
      height={"1em"}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        stroke={props}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14 7h2a5 5 0 0 1 0 10h-2M10 7H8a5 5 0 0 0 0 10h2m-2-5h8"
      />
    </svg>
  );
}
