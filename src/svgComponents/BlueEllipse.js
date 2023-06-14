const BlueEllipse = (props) => {
  return (
    <svg
      width="88"
      height="88"
      viewBox="0 0 88 88"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <circle cx="44" cy="44" r="44" fill="url(#paint0_linear_11_16)" />
      <defs>
        <linearGradient
          id="paint0_linear_11_16"
          x1="77.0909"
          y1="15.2727"
          x2="15.2727"
          y2="77.8182"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#667DF5" />
          <stop offset="1" stopColor="#5E17EB" />
        </linearGradient>
      </defs>
    </svg>
  );
};
export default BlueEllipse;
