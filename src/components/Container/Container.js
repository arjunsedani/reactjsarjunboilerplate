import styled, { css } from "styled-components";

const small = props =>
  props.small &&
  css`
    max-width: 580px;
  `;

const large = props =>
  props.large &&
  css`
    max-width: 920px;
  `;

const xlarge = props =>
  props.xlarge &&
  css`
    margin: 2.1em;
    max-width: 1600px;
  `;

const titleContainer = props =>
  props.titleContainer &&
  css`
    width: 100%;
    max-width: 1682px;
    height: 40px;
    background: #3da98b;
  `;

const clinicAnalyticsTitle = props =>
  props.clinicAnalyticsTitle &&
  css`
    width: 100%;
    max-width: 1682px;
    height: 70px;
    background: #3da98b;
  `;

const fullscreen = props =>
  props.fullscreen &&
  css`
    width: 100%;
    max-width: 1682px;
  `;

const Container = styled.div`
  max-width: 720px;
  margin: 0 auto;
  flex: 1;

  ${small} ${large} ${xlarge} ${fullscreen} ${titleContainer} ${clinicAnalyticsTitle};
`;

export default Container;
