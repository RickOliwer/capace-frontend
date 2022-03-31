import * as React from "react";

const SvgQuotes = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={64} height={180} {...props}>
    <text
      data-name='"'
      transform="rotate(180 32 20.5)"
      fill="#ff752e"
      fontSize={180}
      fontFamily="Helvetica"
    >
      <tspan x={0} y={0}>
        {'"'}
      </tspan>
    </text>
  </svg>
);

export default SvgQuotes;
