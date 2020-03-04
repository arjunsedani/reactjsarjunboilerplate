import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import { colors } from '../../style/styleSettings';

type Props = {
  small: boolean,
  color: string,
  inline: boolean
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto;
  width: 46px;
  height: 10px;
  align-self: center;

  ${(props: Props) =>
    props.small &&
    css`
      height: 8px;
      width: 36px;
    `};

  ${(props: Props) =>
    props.inline &&
    css`
      display: inline-flex;
      margin-left: 15px;
    `};
`;

const dotAnimation = keyframes`
  0%, 100% {
    opacity: 1;
  }
  60% {
    opacity: 0;
  }
`;

const Dot = styled.div`
  height: 10px;
  width: 10px;
  border-radius: 10px;
  background-color: ${(props: Props) => props.color || colors.WALLMART_BLUE};
  animation: ${dotAnimation} 1s ease infinite;

  ${(props: Props) =>
    props.small &&
    css`
      height: 8px;
      width: 8px;
      border-radius: 8px;
    `};
`;

const DotOne = styled(Dot)`
  animation-delay: 0.1s;
`;

const DotTwo = styled(Dot)`
  animation-delay: 0.3s;
`;

const DotThree = styled(Dot)`
  animation-delay: 0.5s;
`;

function Loader(props: Props) {
  return (
    <Wrapper {...props}>
      <DotOne {...props} />
      <DotTwo {...props} />
      <DotThree {...props} />
    </Wrapper>
  );
}

export default Loader;
