import { motion } from 'framer-motion'
import { FC } from 'react'
import {
  HamburgerProps,
  VariantEnum,
  defaultDimensions,
  hamburgerLinesData,
} from '.'

export const Hamburger: FC<HamburgerProps> = ({
  isOpen = false,
  width = defaultDimensions.width,
  height = defaultDimensions.hight,
  strokeWidth = 1,
  color = '#000',
  transition,
}) => (
  <button>
    <motion.svg
      viewBox={'0 0 4 4'}
      overflow="visible"
      preserveAspectRatio="none"
      width={width}
      height={height}
    >
      {hamburgerLinesData.map(({ coordinates, variants, position }) => (
        <motion.line
          key={position}
          x1={coordinates.x1}
          x2={coordinates.x2}
          y1={coordinates.y1}
          y2={coordinates.y2}
          variants={variants}
          stroke={color}
          strokeWidth={strokeWidth}
          vectorEffect="non-scaling-stroke"
          transition={transition}
          initial={VariantEnum.CLOSED}
          animate={isOpen ? VariantEnum.OPENED : VariantEnum.CLOSED}
        />
      ))}
    </motion.svg>
  </button>
)
