/**
 * @file
 * @author Arjun Sedani
 * 
 */
import styled from 'styled-components';
import { colors } from './styleSettings';

export const RelativeContainer = styled.div`
  position: relative;
`;

export const InlineContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.label`
  font-size: 15px;
  color: ${colors.BLACK};
`;

export const RichTextContainer = styled.div`
  width: 100%;
`;

export const FileName = styled.span`
  font-size: 15px;
  color: ${colors.MID_GREY};
`;

export const Option = styled.div`
  padding: 6px;
  &:hover {
    background-color: ${colors.LIGHT_GREY};
    cursor: pointer;
  }
`;

export const EditButton = styled.label`
  color: ${colors.BLUE};
  cursor: pointer;
  font-size: 14px;
`;

export const DeleteButton = styled.label`
  margin-left: 20px;
  color: ${colors.RED};
  cursor: pointer;
  font-size: 14px;
`;
