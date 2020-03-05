// @flow
/**
 * @file
 */
import styled from 'styled-components';

type Props = {
  backgroundColor: string,
  height: string,
  width: string,
  padding: string,
  margin: string
};

const Spacing = styled.div`
  height: ${(props: Props) => props.height};
  width: ${(props: Props) => props.width};
  padding: ${(props: Props) => props.padding};
  margin: ${(props: Props) => props.margin};

  background-color: ${(props: Props) => props.backgroundColor};
`;

export default Spacing;
