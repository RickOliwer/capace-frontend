import * as React from "react";

const SvgFacebook = (props) => (
  <svg
    width={27}
    height={27}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <path fill="url(#facebook_svg__a)" d="M0 0h27v27H0z" />
    <defs>
      <pattern
        id="facebook_svg__a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#facebook_svg__b" transform="scale(.0077)" />
      </pattern>
      <image
        id="facebook_svg__b"
        width={130}
        height={130}
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);

export default SvgFacebook;
