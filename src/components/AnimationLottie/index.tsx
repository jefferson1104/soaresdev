import Lottie, { LottieProps } from 'react-lottie'

export type AnimationLottieParams = LottieProps

const AnimationLottie = (props: AnimationLottieParams) => {
  return <Lottie {...props} />
}

export default AnimationLottie
