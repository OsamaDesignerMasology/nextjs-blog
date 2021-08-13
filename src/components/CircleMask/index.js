import React from "react";
import { motion } from "framer-motion";

const CircleMask = (props) => {
  const { xlinkHref, x, y, strokeWidth, width, height } = props;

  return (
    <div className="circle-mask">
      <svg
        className="circle-mask-svg"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="100%"
      >
         <image
          filter="url(#filter1)"
          xlinkHref={xlinkHref}
          width="100%"
          height="100%"
          x="0"
          y="0"
          preserveAspectRatio="xMinYMin slice"
        />

        <filter id="filter1">
          <feGaussianBlur in="SourceGraphic" stdDeviation="8"></feGaussianBlur>
        </filter>

        <mask id="mask1">
          <motion.g fill="none" stroke="white" strokeWidth={strokeWidth}>
            <motion.rect
              animate={{ y: y, x: x }}
              transition={{ duration: 0.5 }}
              width={width}
              height={height}
              rx={width / 2}
              fill="none"
            />
          </motion.g>
          {/* <g fill="none" stroke="white" strokeWidth={strokeWidth}>
            <rect
              x={x}
              y={y}
              width={width}
              height={height}
              rx={width / 2}
              fill="none"
            />
          </g> */}
        </mask>

         <image
          xlinkHref={xlinkHref}
          width="100%"
          height="100%"
          mask="url(#mask1)"
          x="0"
          y="0"
          preserveAspectRatio="xMinYMin slice"
        />
      </svg>
    </div>
  );
};

export default CircleMask;                              
