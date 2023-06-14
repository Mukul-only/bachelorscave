const BlurEllipse = (props) => {
  return (
    <svg
      width="338"
      height="417"
      viewBox="0 0 338 417"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <g filter="url(#filter0_f_9_82)">
        <circle cx="94" cy="173" r="53" fill="white" />
      </g>
      <defs>
        <filter
          id="filter0_f_9_82"
          x="-150"
          y="-71"
          width="488"
          height="488"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="95.5"
            result="effect1_foregroundBlur_9_82"
          />
        </filter>
      </defs>
    </svg>
  );
};
export default BlurEllipse;
