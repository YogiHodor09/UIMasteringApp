import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
export const SendButtonIcon = (props: SvgProps) => (
  <Svg width={18} height={18} viewBox="0 0 18 18" fill="none" {...props}>
    <Path
      d="M16.6474 0.750031C16.6474 0.750031 12.6474 1.75003 7.6474 3.75003C4.79524 4.89089 2.59387 6.03176 1.22889 6.80139C0.537146 7.19143 0.614265 8.1644 1.34418 8.47722L6.6474 10.75L8.92021 16.0532C9.23303 16.7832 10.206 16.8603 10.596 16.1685C11.3657 14.8036 12.5065 12.6022 13.6474 9.75003C15.6474 4.75003 16.6474 0.750031 16.6474 0.750031ZM6.6474 10.75L16.6474 0.750031"
      stroke="white"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
