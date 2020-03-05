//
import React from 'react';
import Container from '../Container';

function Content(props) {
  return (
    <Container
      large={props.large}
      fullscreen={props.fullscreen}
      xlarge={props.xlarge}
    >
      {props.children}
    </Container>
  );
}

export default Content;
