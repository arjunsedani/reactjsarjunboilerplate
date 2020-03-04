/**
 * @file
 * @author Arjun Sedani
 * 
 */
import React from "react";
import { colors, fontSizes } from "../../style/styleSettings";
import { darken, lighten } from "polished";
import Loader from "../Loader";
import styled, { css } from "styled-components";
import defaultTheme from "../../constants/theme";
import { useTheme } from "@material-ui/styles";

const small = props =>
  props.small &&
  css`
    padding: 4.5px 12px;
    font-size: 14px;
  `;

const large = props =>
  props.large &&
  css`
    padding: 15px 30px;
    font-size: ${fontSizes.LARGE};
  `;

const wide = props =>
  props.wide &&
  css`
    padding: 8px 30px;
    white-space: nowrap;
  `;

const block = props =>
  props.block &&
  css`
    display: block;
    width: 100%;
  `;

const rounded = props =>
  props.rounded &&
  css`
    border-radius: 999px;
  `;

const thob = props =>
  props.thob &&
  css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    border-radius: 12px;
    height: ${props.small ? "44px" : "32px"};
    width: ${props.small ? "44px" : "32px"};

    svg {
      height: 22px;
      width: 22px;
    }
  `;

const secondary = props =>
  props.secondary &&
  css`
    background-color: ${colors.WHITE};
    border: ${!props.noBorder &&
      `2px solid ${darken(
        0.02,
        (props.theme && props.theme.primaryColor) || defaultTheme.primaryColor
      )}`};

    ${props.onClick &&
      `
      &:hover {
        background-color: transparent;
        border-color: ${darken(
          0.06,
          (props.theme && props.theme.secondaryTextColor) ||
            defaultTheme.secondaryTextColor
        )};
        color: ${(props.theme && props.theme.secondaryTextColor) ||
          defaultTheme.secondaryTextColor};
      }
    `} &[disabled] {
      opacity: 1;
      background: ${colors.DISABLED_GREY};
      border-color: ${(props.theme && props.theme.secondaryTextColor) ||
        defaultTheme.secondaryTextColor};
      color: ${lighten(0.05, colors.PRIMARY_DARK_TEXT)};

      svg path {
        fill: nofill;
      }
    }

    svg path {
      fill: nofill
  `;

const LoaderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonInner = styled.span`
  opacity: 1;
  display: inline-flex;
  align-items: center;

  ${props =>
    props.loading &&
    css`
      opacity: 0;
    `};
`;

const ButtonElement = styled.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  background: ${props =>
    (props.theme && props.theme.primaryColor) || defaultTheme.primaryColor};
  font-family: ${props =>
    (props.theme && props.theme.typography.fontFamily) || "inherit"};
  color: ${props =>
    (props.theme && props.theme.fontColor) || defaultTheme.fontColor};
  border: 0;
  outline: 0;
  font-size: 14px;
  font-weight:600;
  text-align: center;
  padding: 13px 27px;
  border-radius: 5px;
  cursor: pointer;
  float: ${props => props.float || "inherit"};
  top: ${props => props.top || "inherit"};
  left: ${props => props.left || "inherit"};
  id: ${props => props.id};

  ${props =>
    props.onClick &&
    `
    &:hover {
      background: ${darken(
        0.05,
        (props.theme && props.theme.primaryColor) || defaultTheme.primaryColor
      )};
    }
  `} &[disabled] {
    opacity: 0.5;
  }

  svg path {
    fill: nofill;
  }

  ${small} ${large} ${wide} ${block} ${rounded} ${thob} ${secondary};
`;


const Button = function(props) {
  const theme = useTheme();
  const { onClick, ...rest } = props;

  return (
    <ButtonElement {...rest} theme={theme} onClick={onClick}>
      {props.loading && (
        <LoaderWrapper>
          <Loader
            small
            color={
              props.secondary
                ? colors.MID_GREY
                : (props.theme && props.theme.iconColor) ||
                  defaultTheme.iconColor
            }
          />
        </LoaderWrapper>
      )}
      <ButtonInner {...rest}>{props.children}</ButtonInner>
    </ButtonElement>
  );
};

export default Button;
