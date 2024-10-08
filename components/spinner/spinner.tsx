import React from 'react';
import type { SVGProps } from 'react';

/**
 * 로딩 상태를 보여줄 스피너 컴포넌트 입니다.
 */
export function Spinner(props: SVGProps<SVGSVGElement>) {
  const { width = '100%' } = props;
  return (
    <div className={`max-w-[${width}] w-full h-full flex-center`}>
      <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24" {...props}>
        <g stroke="currentColor">
          <circle cx={12} cy={12} r={9.5} fill="none" strokeLinecap="round" strokeWidth={3}>
            <animate
              attributeName="stroke-dasharray"
              calcMode="spline"
              dur="1.5s"
              keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1"
              keyTimes="0;0.475;0.95;1"
              repeatCount="indefinite"
              values="0 150;42 150;42 150;42 150"
            ></animate>
            <animate
              attributeName="stroke-dashoffset"
              calcMode="spline"
              dur="1.5s"
              keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1"
              keyTimes="0;0.475;0.95;1"
              repeatCount="indefinite"
              values="0;-16;-59;-59"
            ></animate>
          </circle>
          <animateTransform
            attributeName="transform"
            dur="2s"
            repeatCount="indefinite"
            type="rotate"
            values="0 12 12;360 12 12"
          ></animateTransform>
        </g>
      </svg>
    </div>
  );
}
