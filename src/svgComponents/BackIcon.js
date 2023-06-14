const BackIcon = (props) => {
  return (
    <svg
      width="21"
      height="18"
      viewBox="0 0 21 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <rect
        x="0.5"
        y="0.5"
        width="20"
        height="17"
        rx="4.5"
        fill="#5E17EB"
        fillOpacity="0.06"
        stroke="black"
      />
      <path
        d="M5.64645 8.64645C5.45118 8.84171 5.45118 9.15829 5.64645 9.35355L8.82843 12.5355C9.02369 12.7308 9.34027 12.7308 9.53553 12.5355C9.7308 12.3403 9.7308 12.0237 9.53553 11.8284L6.70711 9L9.53553 6.17157C9.7308 5.97631 9.7308 5.65973 9.53553 5.46447C9.34027 5.2692 9.02369 5.2692 8.82843 5.46447L5.64645 8.64645ZM6 9.5H16V8.5H6V9.5Z"
        fill="black"
      />
    </svg>
  );
};
export default BackIcon;
