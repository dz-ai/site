import posed from 'react-pose'
import styled from 'styled-components/macro'

const AnimatedList = posed.ul({
  enter: {
    opacity: 1,
    scale: 1,
    transition: {
      opacity: { ease: [0.4, 0.0, 0.2, 1], duration: 150 },
      scale: { ease: [0.0, 0.0, 0.2, 1], duration: 150 },
    },
    staggerChildren: 500,
  },
  exit: { opacity: 0, scale: 0.95 },
  initialPose: 'exit',
})

export const List = styled(AnimatedList)`
  padding: 0;

  @media (min-width: 550px) {
    margin: 0;
  }
`

export const ListItem = styled.li<{ itemIndex: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 550px) and (max-width: 767px) {
    // medium
  }
  @media (min-width: 768px) {
    // large
    flex-direction: row;

    position: relative;
    height: 260px;
    align-items: center;
    ${props =>
      props.itemIndex % 2 === 0
        ? 'justify-content: flex-start'
        : 'justify-content: flex-end'};
    ${props =>
      props.itemIndex % 2 === 0 ? 'text-align: left' : 'text-align: right'};
  }
`
