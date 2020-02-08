import styled from 'styled-components';

import { color, font } from '../../utils/styles';

export const ErrorPage = styled.div`
  padding: 64px;
`;

export const ErrorPageInner = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  padding: 200px 0;
  @media (max-height: 680px) {
    padding: 140px 0;
  }
`;

export const ErrorBox = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 480px;
  padding: 32px;
  border-radius: 3px;
  border: 1px solid ${color.borderLight};
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.25);
  background: rgba(255, 255, 255, 0.9);
  text-align: center;
`;

export const Title = styled.h1`
  margin-bottom: 16px;
  ${font.size(29)}
`;