export default function LightModeIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props}
      height={props}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        stroke={props}
        strokeMiterlimit={10}
        strokeWidth={1.5}
        clipPath="url(#a)"
      >
        <path
          strokeLinecap="round"
          d="M5 12H1m22 0h-4M7.05 7.05 4.222 4.222m15.556 15.556L16.95 16.95m-9.9 0-2.828 2.828M19.778 4.222 16.95 7.05"
        />
        <path
          fill="#000"
          fillOpacity={0.16}
          d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
        />
        <path strokeLinecap="round" d="M12 19v4m0-22v4" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
