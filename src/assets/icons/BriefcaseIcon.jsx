export default function BriefcaseIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={48}
      height={48}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <g stroke={props} strokeLinejoin="round" strokeWidth={2}>
        <path d="M3 11c0-1.886 0-2.828.586-3.414C4.172 7 5.114 7 7 7h10c1.886 0 2.828 0 3.414.586C21 8.172 21 9.114 21 11v6c0 1.886 0 2.828-.586 3.414C19.828 21 18.886 21 17 21H7c-1.886 0-2.828 0-3.414-.586C3 19.828 3 18.886 3 17v-6Z" />
        <path d="M8 21V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v16" />
      </g>
    </svg>
  );
}
