import React, { forwardRef, SVGAttributes } from "react";
export interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const ZoomOutOutline = forwardRef(
  ({ size = 24, ...props }: Props, ref: any) => {
    return (
      <svg
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        ref={ref}
        width={size}
        height={size}
        {...props}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zm-4 0H7"
        />
      </svg>
    );
  }
);
export default ZoomOutOutline;
