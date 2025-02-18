export default function GithubIcon(props) {
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
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M12 25.333c-6.667 2-6.667-3.333-9.333-4m18.666 8v-5.16a4.493 4.493 0 0 0-1.253-3.48c4.187-.466 8.587-2.053 8.587-9.333a7.254 7.254 0 0 0-2-5 6.76 6.76 0 0 0-.12-5.027s-1.574-.466-5.214 1.974a17.84 17.84 0 0 0-9.333 0C8.36.867 6.787 1.333 6.787 1.333a6.76 6.76 0 0 0-.12 5.027 7.253 7.253 0 0 0-2 5.04c0 7.227 4.4 8.813 8.586 9.333A4.494 4.494 0 0 0 12 24.173v5.16"
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
