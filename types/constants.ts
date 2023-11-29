import { z } from 'zod'
import { zColor } from '@remotion/zod-types'

export const COMP_NAME = 'MyComp'

export const CompositionProps = z.object({
  title: z.string(),
})

export const defaultMyCompProps: z.infer<typeof CompositionProps> = {
  title: 'Next.js and Remotion',
}

export const videoCompSchema = z.object({
  titleTexts: z.array(z.string()),
  titleColor: zColor(),
})

export const defaultVideoCompProps: z.infer<typeof videoCompSchema> = {
  titleTexts: [
    'Balancer Exploit Results in $900K stolen from LPs',
    'The Team warned about the bug 5 days prior',
    'Record 1 million ETH burned since the start of this year',
    'Uniswap fees alone made for 50% of the burn',
    'Grayscale wins against the sec in court',
  ],
  titleColor: '#ffff',
}

export const imageCompSchema = z.object({
  titleTexts: z.string(),
  titleColor: zColor(),
})

export const defaultImageCompProps: z.infer<typeof imageCompSchema> = {
  titleTexts: `Ethereum price shakeup predicted amid Merge confusion Cryptocurrency
           has doubled in value since mid June ahead of momentous event`,
  titleColor: '#000',
}

export const DURATION_IN_FRAMES = 200
export const VIDEO_WIDTH = 1280
export const VIDEO_HEIGHT = 720
export const VIDEO_FPS = 30