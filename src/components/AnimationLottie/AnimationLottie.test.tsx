import { render } from 'utils/test-utils'

import AnimationLottie from '.'

import animationDataMock from 'assets/lotties/email-successfully-sent.json'

const animationOptionsMock = {
  loop: false,
  autoplay: true,
  animationData: animationDataMock,
  renderer: 'svg'
}

describe('AnimationLottie component', () => {
  it('should render correctly', () => {
    const { container } = render(
      <AnimationLottie
        width={300}
        height={300}
        options={animationOptionsMock}
      />
    )

    expect(container.firstChild).toBeInTheDocument()
  })
})
