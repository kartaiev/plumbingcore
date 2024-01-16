import { HamburgerLineType } from '.'

export enum VariantEnum {
  CLOSED = 'closed',
  OPENED = 'opened',
}

export enum PositionEnum {
  TOP = 'top',
  CENTER = 'center',
  Bottom = 'bottom',
}

export const defaultDimensions = {
  hight: 24,
  width: 24,
}

export const hamburgerLinesData: HamburgerLineType[] = [
  {
    position: PositionEnum.TOP,
    coordinates: {
      x1: 0,
      x2: 4,
      y1: 0,
      y2: 0,
    },
    variants: {
      [VariantEnum.CLOSED]: {
        rotate: 0,
        translateY: 0,
      },
      [VariantEnum.OPENED]: {
        rotate: 45,
        translateY: 2,
      },
    },
  },
  {
    position: PositionEnum.CENTER,
    coordinates: {
      x1: 0,
      x2: 4,
      y1: 2,
      y2: 2,
    },
    variants: {
      [VariantEnum.CLOSED]: {
        opacity: 1,
      },
      [VariantEnum.OPENED]: {
        opacity: 0,
      },
    },
  },
  {
    position: PositionEnum.Bottom,
    coordinates: {
      x1: 0,
      x2: 4,
      y1: 4,
      y2: 4,
    },
    variants: {
      [VariantEnum.CLOSED]: {
        rotate: 0,
        translateY: 0,
      },
      [VariantEnum.OPENED]: {
        rotate: -45,
        translateY: -2,
      },
    },
  },
]
