import { HamburgerLineType } from '.'

export enum VariantEnum {
  CLOSED = 'closed',
  OPENED = 'opened',
}

export const hamburgerLinesData: HamburgerLineType[] = [
  {
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
