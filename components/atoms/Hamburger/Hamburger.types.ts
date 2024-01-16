import { Transition } from 'framer-motion'
import { VariantEnum, PositionEnum } from '.'

export type HamburgerLineType = {
  position: PositionEnum
  coordinates: CoordinatesType
  variants: {
    [VariantEnum.OPENED]: HamburgerLineVariantType
    [VariantEnum.CLOSED]: HamburgerLineVariantType
  }
}

type CoordinatesType = {
  x1: number
  x2: number
  y1: number
  y2: number
}

type HamburgerLineVariantType = {
  rotate?: number
  translateY?: number
  opacity?: number
}

export type HamburgerProps = {
  isOpen?: boolean
  color?: string
  width?: number
  height?: number
  strokeWidth?: string | number
  transition?: Transition
}
