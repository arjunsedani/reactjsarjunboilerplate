import styled from 'styled-components';

export const LogoStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  max-width: 400px;
  max-height: 150px;
  align-items: stretch;
`;

export const Header = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: 50px;
  box-shadow: 0px 5px 5px 6px #ccc;
  background-color: #fff;
`;

export const Footer = styled.div`
  position: sticky;
  bottom: 0;
  width: 100%;
  height: 50px;
  background-color: #fff;
  justify-content: center;
`;