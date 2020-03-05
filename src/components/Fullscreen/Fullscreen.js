// @flow
/**
 * @file
 */
import styled from 'styled-components';

type Props = {
  contentCenter: boolean,
  contentOffset: string,
  backgroundColor: string
};

const contentCenter = (props: Props) => props.contentCenter && 'center';

const contentOffset = (props: Props) => props.contentOffset;

const backgroundColor = (props: Props) =>
  props.backgroundColor || 'transparent';
const Fullscreen = styled.div`
  display: flex;
  align-items: ${contentCenter};
  position: absolute;
  overflow: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${backgroundColor};

  > * {
    margin-top: ${contentOffset};
  }
`;

export default Fullscreen;
